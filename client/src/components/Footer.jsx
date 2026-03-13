import { Link } from "react-router-dom";
// Note: Agar aap icons use karna chahte hain toh 'lucide-react' ya 'react-icons' install kar sakte hain.
// Filhal main emojis aur styling se isse premium bana raha hoon.

export default function Footer() {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academics" },
    { name: "Campus Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
        {/* 1. School Branding */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 group">
            <div className="bg-secondary p-1.5 rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
              <span className="text-white font-black text-lg italic">ES</span>
            </div>
            <h3 className="text-2xl font-heading font-bold tracking-tight">
              Excellence <span className="text-secondary">School</span>
            </h3>
          </div>
          <p className="text-blue-100/70 text-sm leading-relaxed">
            Building the leaders of tomorrow with character, discipline, and
            academic excellence. Join our community to nurture your child's
            future.
          </p>
          <div className="flex gap-4 pt-2">
            {/* Social Icons Placeholder */}
            {["FB", "IG", "TW", "LN"].map((social) => (
              <span
                key={social}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-secondary hover:text-primary transition-all cursor-pointer"
              >
                {social}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Quick Navigation */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b-2 border-secondary/30 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-blue-100/80 hover:text-secondary hover:translate-x-2 transition-all inline-block text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact Information */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b-2 border-secondary/30 pb-2 inline-block">
            Contact Us
          </h4>
          <div className="space-y-4 text-sm text-blue-100/80">
            <div className="flex items-start gap-3">
              <span>📍</span>
              <p>
                123 Education Lane, Knowledge City, <br /> Rajasthan, India -
                342001
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span>📞</span>
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <span>✉️</span>
              <p>info@excellenceschool.com</p>
            </div>
          </div>
        </div>

        {/* 4. Interactive Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b-2 border-secondary/30 pb-2 inline-block">
            Newsletter
          </h4>
          <p className="text-xs text-blue-100/70 mb-4 font-medium">
            Get the latest updates and school news.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-secondary text-primary font-bold px-4 rounded-lg text-xs hover:bg-yellow-500 transition-colors">
              Join
            </button>
          </div>
          <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[10px] text-blue-100/50 italic">
              "Education is not the learning of facts, but the training of the
              mind to think." - Einstein
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/40">
          <p>&copy; 2026 Excellence School. All Rights Reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest font-bold">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
