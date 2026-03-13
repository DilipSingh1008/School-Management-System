import React from "react";

export default function Academics() {
  const departments = [
    {
      title: "Primary Wing",
      grades: "Grades 1 - 5",
      desc: "Focus on foundational literacy, numeracy, and creative exploration through play-way methods.",
      color: "border-blue-500",
      icon: "🎨",
    },
    {
      title: "Middle School",
      grades: "Grades 6 - 8",
      desc: "Introduction to specialized sciences, advanced mathematics, and analytical social studies.",
      color: "border-secondary",
      icon: "🔬",
    },
    {
      title: "Senior Secondary",
      grades: "Grades 9 - 12",
      desc: "Rigorous academic training with elective streams: Science, Commerce, and Humanities.",
      color: "border-accent",
      icon: "🎓",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* 1. Compact Header */}
      <section className="bg-primary pt-32 pb-16 px-6 text-center text-white relative">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-4 leading-none">
            Academic <span className="text-secondary italic">Excellence</span>
          </h1>
          <p className="text-blue-100/70 text-base md:text-lg">
            A curriculum designed to challenge minds and inspire a lifelong
            passion for learning.
          </p>
        </div>
      </section>

      {/* 2. Key Departments Grid - Tight Layout */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-4">
          {departments.map((dept, i) => (
            <div
              key={i}
              className={`bg-white p-6 rounded-3xl shadow-xl border-t-8 ${dept.color} group hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {dept.icon}
              </div>
              <h3 className="text-xl font-bold text-primary leading-tight">
                {dept.title}
              </h3>
              <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">
                {dept.grades}
              </p>
              <p className="text-muted text-sm leading-relaxed">{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Subject Matrix - Professional Table Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Curriculum Details */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Core Methodology
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <span className="text-secondary">●</span> Experiential
                    Learning
                  </h4>
                  <p className="text-muted text-sm">
                    Bache sirf kitabon se nahi, experiments aur real-life
                    projects se seekhte hain.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <span className="text-secondary">●</span> Digital
                    Integration
                  </h4>
                  <p className="text-muted text-sm">
                    Smart boards aur coding sessions har grade ke curriculum ka
                    hissa hain.
                  </p>
                </div>
              </div>
            </div>

            {/* Subject List Table */}
            <div className="overflow-hidden rounded-[2rem] border border-slate-200">
              <table className="w-full text-left bg-white border-collapse">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 text-sm font-bold text-primary uppercase">
                      Subject Area
                    </th>
                    <th className="p-4 text-sm font-bold text-primary uppercase">
                      Specialization
                    </th>
                    <th className="p-4 text-sm font-bold text-primary uppercase">
                      Tools Used
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Mathematics", "Vedic & Modern Math", "GeoGebra, Abacus"],
                    ["Science", "Physics, Chem, Bio", "Robotics Lab, VR"],
                    [
                      "Languages",
                      "English, Hindi, French",
                      "Language Lab, Debates",
                    ],
                    [
                      "Technology",
                      "AI & Computer Science",
                      "Coding Hub, 3D Printing",
                    ],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-sm font-bold text-slate-800">
                        {row[0]}
                      </td>
                      <td className="p-4 text-sm text-muted">{row[1]}</td>
                      <td className="p-4 text-sm font-medium text-secondary">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Academic Calendar / Quick Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-accent text-white p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 italic">
                  Academic Calendar
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs font-bold text-secondary uppercase">
                      Term 1
                    </p>
                    <p className="text-sm font-medium">April - September</p>
                  </div>
                  <div className="border-l-2 border-white/30 pl-4">
                    <p className="text-xs font-bold text-white/50 uppercase">
                      Term 2
                    </p>
                    <p className="text-sm font-medium">October - March</p>
                  </div>
                </div>
                <button className="mt-8 w-full bg-white text-accent font-bold py-3 rounded-xl hover:bg-secondary hover:text-primary transition-all">
                  Download Syllabus PDF
                </button>
              </div>
            </div>

            {/* Teaching Faculty Preview */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <h4 className="font-bold text-primary mb-4">
                Teaching Standards
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                  1:25 Teacher-Student Ratio
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                  Certified IB & CBSE Educators
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
