import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-primary">
      {/* 1. Background Layer (Optimized Opacity) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070"
          alt="Academy"
          className="w-full h-full object-cover opacity-30 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
      </div>

      {/* 2. Main Content Container - Reduced Vertical Gaps */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 pb-20">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Tight Heading - Line height optimized */}
          <h1 class="text-4xl md:text-5xl font-black font-heading mt-4 mb-4 leading-tight">
            Where Young Minds <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-300">
              Shape The Future
            </span>
          </h1>

          {/* Subtext - Max width reduced for better reading flow */}
          <p className="text-base md:text-xl text-blue-50/70 max-w-xl mx-auto leading-normal">
            A tradition of excellence, a future of innovation. Join a community
            dedicated to academic rigor and personal growth.
          </p>

          {/* Buttons - Gap Optimized */}
          <div className="flex flex-row items-center gap-4 mt-4">
            <Link
              to="/admissions"
              className="bg-secondary text-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-black text-sm md:text-base hover:bg-white transition-all shadow-lg active:scale-95"
            >
              Apply Now
            </Link>

            <Link
              to="/about"
              className="group flex items-center gap-2 text-white font-bold text-sm md:text-base hover:text-secondary transition-all"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary transition-all">
                <span className="text-lg">→</span>
              </div>
              Tour Campus
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Floating Feature Row - Integrated Design */}
      <div className="absolute bottom-0 left-0 w-full z-20 px-4 md:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-t-[2rem] overflow-hidden translate-y-2 md:translate-y-8">
          {[
            { icon: "🏛️", title: "Elite Campus", color: "bg-white" },
            { icon: "🔬", title: "STEM Focused", color: "bg-slate-50" },
            { icon: "🎨", title: "Creative Arts", color: "bg-white" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.color} p-5 md:p-8 flex items-center justify-center gap-4 group cursor-default border-b-4 border-transparent hover:border-secondary transition-all duration-300`}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <div className="text-left">
                <h4 className="font-bold text-primary text-sm md:text-lg leading-none">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-tight">
                  Global Standard
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
