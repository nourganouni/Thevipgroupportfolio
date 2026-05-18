import heroWoman from "@/assets/hero-woman.png";
import rocket from "@/assets/rocket.png";
import trophy from "@/assets/trophy.png";

export function NewHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
        .font-roboto { font-family: 'Roboto', sans-serif; }

        @keyframes float-slow { 0%,100% { transform: translateY(0) translateX(0);} 50% { transform: translateY(-20px) translateX(10px);} }
        @keyframes float-mid { 0%,100% { transform: translateY(0) translateX(0);} 50% { transform: translateY(15px) translateX(-12px);} }
        @keyframes float-fast { 0%,100% { transform: translateY(0) translateX(0);} 50% { transform: translateY(-25px) translateX(-8px);} }
        @keyframes rocket-bob { 0%,100% { transform: translateY(0) rotate(-8deg);} 50% { transform: translateY(-18px) rotate(-2deg);} }
        @keyframes spin-slow { from { transform: rotate(0);} to { transform: rotate(360deg);} }
        @keyframes fade-up { from { opacity:0; transform: translateY(20px);} to { opacity:1; transform: translateY(0);} }

        .anim-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .anim-float-mid  { animation: float-mid 5s ease-in-out infinite; }
        .anim-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .anim-rocket     { animation: rocket-bob 4s ease-in-out infinite; }
        .anim-spin-slow  { animation: spin-slow 8s linear infinite; transform-origin: 50% 60%; }
        .anim-fade-up    { animation: fade-up 0.9s ease-out both; }
      `}</style>

      <section id="education" className="font-roboto min-h-screen bg-transparent overflow-hidden flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left */}
          <div className="anim-fade-up self-center order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
              Free online Courses
              <br />
              With{" "}
              <span className="relative inline-block">
                Certificates
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="auroraGradUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0f3b9c" />
                      <stop offset="33%" stopColor="#99269e" />
                      <stop offset="66%" stopColor="#1ba0d9" />
                      <stop offset="100%" stopColor="#78c142" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 8 C 60 0, 140 0, 198 8"
                    stroke="url(#auroraGradUnderline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              &
              <br />
              Diplomas
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-500 max-w-md leading-relaxed mx-auto lg:mx-0">
              1000+ Courses covering all tech domains for you to learn and
              explore new opportunities. Learn from Industry Experts and land
              your Dream Job.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="px-6 sm:px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-lg shadow-slate-200 transition-all hover:scale-105 duration-300">
                Register
              </button>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start">
              <Stat number="1000+" label={["Courses to", "choose from"]} color="text-amber-500" />
              <Stat number="5000+" label={["Students", "Trained"]} color="text-blue-600" />
              <Stat number="200+" label={["Professional", "Trainers"]} color="text-orange-500" />
            </div>
          </div>

          {/* Right */}
          <div className="relative w-full max-w-[520px] mx-auto aspect-square order-1 lg:order-2">
            {/* Orange circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full bg-orange-500" />
            {/* Thin outline ring slightly bigger than the orange circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[71%] h-[71%] rounded-full border border-slate-800/70" />

            {/* Floating circles */}
            <div className="absolute top-[3%] right-[8%] w-[14%] h-[14%] rounded-full bg-purple-500 anim-float-slow" />
            <div className="absolute top-[22%] right-0 w-[7%] h-[7%] rounded-full anim-float-fast" style={{ background: "linear-gradient(135deg, #0f3b9c, #99269e, #1ba0d9, #78c142)" }} />
            <div className="absolute bottom-[18%] left-[2%] w-[12%] h-[12%] rounded-full bg-yellow-400 anim-float-mid" />
            <div className="absolute top-[48%] left-[4%] w-[7%] h-[7%] rounded-full anim-float-fast" style={{ background: "linear-gradient(135deg, #0f3b9c, #99269e, #1ba0d9, #78c142)" }} />

            {/* Outlined circles */}
            <svg className="absolute top-[1%] right-[4%] w-[22%] h-[22%] anim-float-mid" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" stroke="#1f2937" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="absolute bottom-[10%] left-0 w-[18%] h-[18%] anim-float-slow" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" stroke="#1f2937" strokeWidth="1.5" fill="none" />
            </svg>

            {/* Woman */}
            <img
              src={heroWoman}
              alt="Student with laptop"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] w-[100%] object-contain z-20 drop-shadow-xl"
            />

            {/* Rocket */}
            <img
              src={rocket}
              alt="Rocket"
              className="absolute top-[2%] left-[4%] w-[26%] z-20 anim-rocket"
            />

            {/* Trophy */}
            <img
              src={trophy}
              alt="Trophy"
              className="absolute bottom-[2%] right-[4%] w-[24%] z-20 anim-spin-slow"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  number,
  label,
  color,
}: {
  number: string;
  label: string[];
  color: string;
}) {
  return (
    <div>
      <div className={`text-3xl font-bold ${color}`}>{number}</div>
      <div className="mt-2 text-sm font-semibold text-slate-700 leading-tight">
        {label[0]}
        <br />
        {label[1]}
      </div>
    </div>
  );
}
