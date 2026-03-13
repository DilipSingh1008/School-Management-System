import React from "react";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      detail: "123 Education Lane, Knowledge City, India",
      sub: "Open: Mon-Sat (8 AM - 4 PM)",
    },
    {
      icon: "📞",
      title: "Call Us",
      detail: "+91 98765 43210",
      sub: "Principal Office: Ext 102",
    },
    {
      icon: "✉️",
      title: "Email Us",
      detail: "info@excellenceschool.edu",
      sub: "Admissions: admission@school.edu",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* 1. Minimalist Header */}
      <section className="bg-primary pt-32 pb-12 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-4 leading-none">
            Get In <span className="text-secondary italic">Touch</span>
          </h1>
          <p className="text-blue-100/60 text-base md:text-lg">
            Have questions? We're here to help you navigate your child's
            educational journey.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid - Tight Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Contact Details & Map (Col-span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="grid gap-4">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-secondary transition-all group"
              >
                <div className="text-3xl bg-slate-50 w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-secondary/10 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg leading-tight">
                    {info.title}
                  </h4>
                  <p className="text-slate-700 font-medium text-sm mt-1">
                    {info.detail}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">{info.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map Placeholder */}
          <div className="h-64 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-slate-200 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5665!2d77.2273!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ2LjQiTiA3N8KwMTMnMzguMyJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
              VIEW MAP
            </div>
          </div>
        </div>

        {/* Right: Message Form (Col-span 7) */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 relative">
            <div className="mb-8">
              <h3 className="text-3xl font-black text-primary leading-none">
                Send a Message
              </h3>
              <p className="text-muted text-sm mt-2">
                Fill the form below and our team will get back to you shortly.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">
                  Subject
                </label>
                <select className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm cursor-pointer transition-all">
                  <option>General Inquiry</option>
                  <option>Admission Process</option>
                  <option>Fee Structure</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm transition-all resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-2">
                <button className="w-full bg-primary text-white hover:bg-accent font-black py-4 rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2">
                  Send Message Now <span>🚀</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
