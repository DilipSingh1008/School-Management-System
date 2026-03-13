import React from "react";

export default function Admissions() {
  const steps = [
    {
      num: "01",
      title: "Online Inquiry",
      desc: "Start by filling the digital form.",
    },
    {
      num: "02",
      title: "Campus Visit",
      desc: "Tour our labs, library, and sports arena.",
    },
    {
      num: "03",
      title: "Assessment",
      desc: "A light evaluation of the student's skills.",
    },
    {
      num: "04",
      title: "Interaction",
      desc: "Meet the Dean to align educational goals.",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* 1. Optimized Header */}
      <section className="bg-primary pt-32 pb-16 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            Academic Year 2026-27
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-heading mt-4 mb-4 leading-tight">
            The Gateway to{" "}
            <span className="text-secondary italic">Excellence</span>
          </h1>
          <p className="text-blue-100/70 text-base md:text-lg leading-relaxed">
            Join a community that nurtures curiosity and builds character. Your
            child's future begins with a single step today.
          </p>
        </div>
      </section>

      {/* 2. Main Grid - Managed Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-10">
        {/* Left Side: Information (Col-span 7) */}
        <div className="lg:col-span-7 space-y-10">
          {/* Admission Process - Compact Timeline */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary text-secondary rounded-xl flex items-center justify-center font-black">
                ?
              </span>
              Registration Steps
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 border border-transparent hover:border-secondary/30 hover:bg-white transition-all group"
                >
                  <span className="text-xs font-black text-secondary tracking-widest block mb-1">
                    STEP {step.num}
                  </span>
                  <h4 className="font-bold text-primary text-lg mb-1 group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-muted text-sm leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist - Clean Layout */}
          <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-secondary">📋</span> Required Documents
            </h3>
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Birth Certificate (Original)",
                "Previous 2 Year Reports",
                "Passport Size Photos (6)",
                "Transfer Certificate",
                "Aadhar Card / Passport",
                "Immunization Record",
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-blue-100/80"
                >
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] text-secondary font-bold">
                    ✓
                  </div>
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Right Side: Sticky Inquiry Form (Col-span 5) */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 sticky top-28">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-primary">
                Apply for Admission
              </h3>
              <p className="text-muted text-sm mt-1 font-medium">
                Get a call back from our counselor.
              </p>
            </div>

            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                    Contact No.
                  </label>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                  Select Grade
                </label>
                <select className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm appearance-none transition-all cursor-pointer">
                  <option>Primary (Grade 1-5)</option>
                  <option>Middle (Grade 6-8)</option>
                  <option>Senior (Grade 9-12)</option>
                </select>
              </div>

              <div className="pt-2">
                <button className="w-full bg-primary text-white hover:bg-accent font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
                  Request Prospectus
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center gap-4 p-4 bg-blue-50 rounded-2xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                📞
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">
                  Need Help?
                </p>
                <p className="text-sm font-bold text-primary">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
