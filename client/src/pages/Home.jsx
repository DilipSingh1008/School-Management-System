import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-surface min-h-screen">
      {/* 1. Hero Section (Pehle se design kiya hua) */}
      <HeroSection />

      {/* 2. Welcome & Philosophy Section */}
      <section className="section-padding animate-entrance">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Decorative Image Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=500"
                className="rounded-3xl shadow-lg"
                alt="Classroom"
              />
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500"
                className="rounded-3xl shadow-lg translate-x-4"
                alt="Library"
              />
            </div>
            <div className="pt-12">
              <img
                src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=500"
                className="rounded-3xl shadow-lg"
                alt="Students"
              />
            </div>
            {/* Background Decorative Shape */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center lg:text-left">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">
              Established since 1999
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 leading-tight">
              Nurturing Minds, <br />
              <span className="text-primary italic">Empowering Futures.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Excellence School mein hum sirf academics par nahi, balki bache ki
              holistic growth par focus karte hain. Modern technology aur
              traditional values ka sahi mishran hi humari pehchan hai.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/about" className="btn-primary">
                Learn Our Story
              </Link>
              <Link
                to="/gallery"
                className="flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors group"
              >
                Explore Campus{" "}
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section (Upgraded Cards) */}
      <section className="bg-white py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Parents Trust Us?
            </h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="school-card group">
              <div className="w-20 h-20 bg-blue-50 text-primary rounded-[1.5rem] flex items-center justify-center mb-6 text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                🎓
              </div>
              <h3 className="text-2xl font-bold mb-3">Academic Rigor</h3>
              <p className="text-muted leading-relaxed">
                Hamara curriculum international standards ko meet karta hai,
                taki students har competitive exam ke liye taiyar rahein.
              </p>
            </div>

            {/* Card 2 */}
            <div className="school-card group">
              <div className="w-20 h-20 bg-amber-50 text-secondary rounded-[1.5rem] flex items-center justify-center mb-6 text-3xl group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                🔬
              </div>
              <h3 className="text-2xl font-bold mb-3">Innovation Hub</h3>
              <p className="text-muted leading-relaxed">
                Smart classes aur AI-enabled labs bacchon ko future ki jobs aur
                challenges ke liye aaj se hi taiyar karti hain.
              </p>
            </div>

            {/* Card 3 */}
            <div className="school-card group">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[1.5rem] flex items-center justify-center mb-6 text-3xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                🏆
              </div>
              <h3 className="text-2xl font-bold mb-3">Holistic Growth</h3>
              <p className="text-muted leading-relaxed">
                Sports, Arts, aur Music ko hum academics ke barabar mahatva dete
                hain, taki bacha har field mein champion bane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Action Admission Banner (More Modern) */}
      <section className="section-padding">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden relative group">
          {/* Animated Background Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              Enroll Your Child for <br />
              <span className="text-secondary">2026-27 Session</span>
            </h2>
            <p className="text-blue-100/80 text-lg">
              Limited seats available for Nursery to Grade 10. Give your child
              the excellence they deserve.
            </p>
          </div>

          <div className="relative z-10 mt-10 lg:mt-0 flex flex-col sm:flex-row gap-4">
            <Link
              to="/admissions"
              className="btn-secondary px-10 py-4 text-center"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold transition-all text-center"
            >
              Request Prospectus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
