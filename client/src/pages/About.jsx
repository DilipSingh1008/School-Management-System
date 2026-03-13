import React from "react";

export const About = () => {
  const stats = [
    { label: "Years of Excellence", value: "25+" },
    { label: "Expert Educators", value: "80+" },
    { label: "Global Awards", value: "15+" },
    { label: "Successful Alumni", value: "5000+" },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* 1. Header Section - Dynamic Hero */}
      <section className="relative bg-primary py-24 px-6 text-center text-white overflow-hidden">
        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto animate-entrance">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-secondary/20 text-secondary text-sm font-bold tracking-widest uppercase">
            Since 1999
          </div>
          <h1 class="text-4xl md:text-6xl font-black font-heading mt-4 mb-4 leading-tight">
            Nurturing <span className="text-secondary italic">Excellence</span>{" "}
            <br />
            Beyond Boundaries
          </h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Humara maqsad sirf shiksha dena nahi, balki ek aisi peedi taiyar
            karna hai jo kal ki duniya ko behtar bana sake.
          </p>
        </div>
      </section>

      {/* 2. Stats Section - Floating Overlap */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group border-r last:border-0 border-slate-100"
            >
              <div className="text-3xl md:text-5xl font-black text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-tighter text-[10px] md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Story & Philosophy - Interactive Split */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1523050853063-915894b920a3?q=80&w=1000"
                alt="Campus Life"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Gold Box */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary rounded-[3rem] -z-0 hidden md:block opacity-20 animate-pulse"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-accent leading-tight">
              A Legacy of <br />{" "}
              <span className="text-primary font-black">
                Holistic Education
              </span>
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Excellence School mein hum critical thinking aur innovation ko
              prathmikta dete hain. Humara focus bache ke mental, physical aur
              emotional well-being par rehta hai.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-50">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">
                    Our Mission
                  </h4>
                  <p className="text-muted text-sm">
                    To empower students with values that build strong character
                    and sharp minds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-50">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  👁️
                </div>
                <div>
                  <h4 className="font-bold text-amber-600 text-xl">
                    Our Vision
                  </h4>
                  <p className="text-muted text-sm">
                    Becoming a global beacon of academic brilliance and creative
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Principal Message - Modern Quotation Design */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/3 group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                className="rounded-[2.5rem] shadow-2xl border-4 border-white/10 group-hover:border-secondary transition-all duration-500 grayscale group-hover:grayscale-0"
                alt="Principal"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-primary p-4 rounded-2xl font-black shadow-xl">
                25 Yrs Exp.
              </div>
            </div>
          </div>
          <div className="md:w-2/3 text-white">
            <span className="text-7xl font-serif text-secondary/30 block mb-[-20px]">
              “
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 italic leading-snug font-heading">
              Education is not just about filling a bucket; it's about lighting
              a fire.
            </h3>
            <p className="text-blue-100/70 text-lg mb-8 leading-relaxed max-w-2xl">
              At Excellence School, we believe every child is a potential
              leader. Our role is simply to provide the environment where they
              can shine brightest.
            </p>
            <div>
              <div className="text-2xl font-black text-secondary">
                — Dr. Sarah Jenkins
              </div>
              <div className="text-blue-200/60 font-bold uppercase tracking-widest text-sm mt-1">
                Principal & Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Values Grid */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Core Values That Drive Us
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Integrity", "Innovation", "Discipline", "Empathy"].map(
            (val, i) => (
              <div key={i} className="school-card text-center group">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform inline-block">
                  ✨
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">{val}</h4>
                <p className="text-muted text-sm">
                  Setting standards in {val.toLowerCase()} across all academic
                  levels.
                </p>
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
};
