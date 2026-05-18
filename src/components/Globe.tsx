import { CSSProperties, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { MapPin } from "lucide-react";

export type Marker = {
  country: string;
  university: string;
  location: [number, number];
  flag?: string;
  code?: string;
};

type Props = {
  markers: Marker[];
  activeIndex: number;
};

function targetFromLatLng(lat: number, lng: number) {
  // COBE's map projection centers a coordinate when:
  // phi = -90° - longitude and theta = latitude.
  const phi = -Math.PI / 2 - (lng * Math.PI) / 180;
  const theta = (lat * Math.PI) / 180;
  return { phi, theta };
}

function activePinStyle(activeIndex: number) {
  // Note: Anchor positioning is a modern CSS feature. 
  // If not supported, it might need a fallback or different approach.
  return {
    positionAnchor: `--cobe-partner-${activeIndex}`,
    left: "anchor(center)",
    top: "anchor(center)",
    opacity: `var(--cobe-visible-partner-${activeIndex}, 1)`,
  } as CSSProperties;
}

function buildGlobeMarkers(markers: Marker[], activeIndex: number) {
  // Uniform premium primary color — pins live in HTML overlay
  const baseColor: [number, number, number] = [0.42, 0.27, 0.78];
  return markers.map((m, i) => ({
    id: `partner-${i}`,
    location: m.location,
    size: i === activeIndex ? 0.08 : 0.035,
    color: baseColor,
  }));
}

export function GlobeFluid({ markers, activeIndex }: Props) {
  const initialTarget = markers[activeIndex]
    ? targetFromLatLng(markers[activeIndex].location[0], markers[activeIndex].location[1])
    : { phi: -Math.PI / 2, theta: 0.25 };
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    phi: initialTarget.phi,
    theta: initialTarget.theta,
    targetPhi: initialTarget.phi,
    targetTheta: initialTarget.theta,
    activeIndex,
    width: 0,
  });

  useEffect(() => {
    const m = markers[activeIndex];
    if (!m) return;
    const t = targetFromLatLng(m.location[0], m.location[1]);
    const cur = stateRef.current.phi;
    let next = t.phi;
    while (next - cur > Math.PI) next -= 2 * Math.PI;
    while (next - cur < -Math.PI) next += 2 * Math.PI;
    stateRef.current.activeIndex = activeIndex;
    stateRef.current.targetPhi = next;
    stateRef.current.targetTheta = t.theta;
  }, [activeIndex, markers]);

  useEffect(() => {
    if (!canvasRef.current || !wrapRef.current) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const initialWidth = wrapRef.current.offsetWidth || 600;
    stateRef.current.width = initialWidth;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: initialWidth * dpr,
      height: initialWidth * dpr,
      phi: stateRef.current.phi,
      theta: stateRef.current.theta,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2.2,
      baseColor: [0.95, 0.96, 0.98],
      markerColor: [0.42, 0.27, 0.78],
      glowColor: [0.85, 0.88, 0.98],
      markerElevation: 0.08,
      markers: buildGlobeMarkers(markers, stateRef.current.activeIndex),
    });

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w) stateRef.current.width = w;
    });
    ro.observe(wrapRef.current);

    let raf = 0;
    const tick = () => {
      const s = stateRef.current;
      s.phi += (s.targetPhi - s.phi) * 0.05;
      s.theta += (s.targetTheta - s.theta) * 0.05;
      globe.update({
        phi: s.phi,
        theta: s.theta,
        width: s.width * dpr,
        height: s.width * dpr,
        markers: buildGlobeMarkers(markers, s.activeIndex),
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      globe.destroy();
    };
  }, [markers]);

  const activeMarker = markers[activeIndex];

  return (
    <div ref={wrapRef} className="relative h-full w-full">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", aspectRatio: "1/1" }} />
      {activeMarker ? (
        <div
          key={activeIndex}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-[105%] flex-col items-center transition-[opacity,filter,transform] duration-500"
        >
          {/* Premium location pin — anchored to the real selected country coordinate */}
          <div className="animate-[pin-drop_500ms_ease-out_both]">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/25 blur-xl" />
              <div className="relative grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-card/95 shadow-[0_16px_34px_-8px_rgba(15,59,156,0.2)] backdrop-blur-md">
                <MapPin
                  className="h-6 w-6 text-primary"
                  strokeWidth={2.4}
                  fill="currentColor"
                  fillOpacity={0.15}
                />
              </div>
              <div className="mx-auto mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_5px_rgba(153,38,158,0.16)]" />
            </div>
          </div>
          {/* Floating label below pin */}
          <div className="mt-3 w-[min(330px,72vw)] animate-[label-rise_500ms_ease-out_120ms_both] rounded-2xl border border-border bg-card/90 px-4 py-3 text-center shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-center gap-2">
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                {activeMarker.country}
              </h3>
              {activeMarker.code ? (
                <img 
                  src={`https://flagcdn.com/w40/${activeMarker.code}.png`} 
                  srcSet={`https://flagcdn.com/w80/${activeMarker.code}.png 2x`}
                  className="w-6 h-auto rounded shadow-sm"
                  alt={activeMarker.country}
                />
              ) : null}
            </div>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">
              {activeMarker.university}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
