import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/trustees", label: "Trustees" },
  { to: "/teachers", label: "Teachers" },
  { to: "/videos", label: "Videos" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft border-b border-border" : "bg-transparent"}`}>
      <nav className="container flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Sagan Angels School logo" className="h-11 w-11 object-contain transition-bounce group-hover:scale-110" width={44} height={44} />
          <div className="leading-tight">
            <div className="font-heading font-bold text-base sm:text-lg text-primary">Sagan Angels</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground -mt-0.5">School • Est. 2016</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-smooth relative ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full gradient-primary" />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" className="hidden md:inline-flex">
            <Link to="/contact#enquiry">Enquire Now</Link>
          </Button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md hover:bg-muted transition-smooth" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => `block px-4 py-3 rounded-md font-medium ${isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="hero" className="w-full">
                <Link to="/contact#enquiry">Enquire Now</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
