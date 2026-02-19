import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = ["Home", "Services", "About", "Values", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
          <img src={logo} alt="LeadNorth Consulting" className="h-20 w-auto" />
          <span className="font-display text-2xl font-bold text-foreground">
            LeadNorth <span className="text-primary">Consulting</span>
          </span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item === "Home" ? "home" : item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item === "Home" ? "home" : item.toLowerCase())}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
