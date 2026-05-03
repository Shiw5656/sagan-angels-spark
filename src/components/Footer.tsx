import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Sagan Aangels School" className="h-10 w-10 bg-white rounded-md p-1" width={40} height={40} />
            <div>
              <div className="font-heading font-bold">Sagan Aangels School</div>
              <div className="text-xs opacity-80">Shaping Future Since 2016</div>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Nurturing curious minds and confident hearts in Neknamepur, Bihar.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              ["About", "/about"], ["Teachers", "/teachers"],
              ["Trustees", "/trustees"], ["Videos", "/videos"],
              ["Events", "/events"], ["Contact", "/contact"],
            ].map(([n, p]) => (
              <li key={p}><Link to={p} className="hover:text-accent transition-smooth">{n}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Neknamepur, Bihar, India</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@saganangels.edu.in</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-accent transition-smooth hover:-translate-y-1">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Sagan Aangels School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
