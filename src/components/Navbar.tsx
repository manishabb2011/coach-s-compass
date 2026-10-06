import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";

import logo from "@/assets/logo.png";



type NavItem =

  | { kind: "section"; label: string; section: string }

  | { kind: "route"; label: string; to: string };



const navItems: NavItem[] = [

  { kind: "section", label: "Home", section: "home" },

  { kind: "route", label: "Masterclass", to: "/masterclass" },

  { kind: "section", label: "Programs", section: "programs" },

  { kind: "section", label: "Values", section: "values" },

  { kind: "section", label: "About", section: "about" },

  { kind: "section", label: "Join the Circle", section: "join-the-circle" },

  { kind: "section", label: "Contact", section: "contact" },

];



const linkClass =

  "text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase";



const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const isHome = location.pathname === "/";



  const goToSection = (section: string) => {

    setMobileOpen(false);

    if (isHome) {

      const el = document.getElementById(section);

      el?.scrollIntoView({ behavior: "smooth" });

      return;

    }

    navigate(`/#${section}`);

  };



  const renderNavItem = (item: NavItem) => {

    if (item.kind === "route") {

      return (

        <Link to={item.to} className={linkClass} onClick={() => setMobileOpen(false)}>

          {item.label}

        </Link>

      );

    }

    return (

      <button type="button" onClick={() => goToSection(item.section)} className={linkClass}>

        {item.label}

      </button>

    );

  };



  return (

    <nav className="fixed top-0 left-0 right-0 z-50 transition-all bg-background border-b border-border/30">

      <div className="container mx-auto flex items-center justify-between py-2 px-6">

        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>

          <img src={logo} alt="LeadNorth Consulting" className="h-12 w-auto mix-blend-screen" />

          <span className="font-display text-2xl font-bold text-foreground">

            LeadNorth <span className="text-gradient-gold">Consulting</span>

          </span>

        </Link>



        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">

          {navItems.map((item) => (

            <li key={item.label}>{renderNavItem(item)}</li>

          ))}

        </ul>



        <button

          type="button"

          className="lg:hidden text-foreground"

          onClick={() => setMobileOpen(!mobileOpen)}

          aria-expanded={mobileOpen}

          aria-label={mobileOpen ? "Close menu" : "Open menu"}

        >

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}

        </button>

      </div>



      {mobileOpen && (

        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border max-h-[70vh] overflow-y-auto">

          <ul className="flex flex-col items-center gap-4 py-6">

            {navItems.map((item) => (

              <li key={item.label}>{renderNavItem(item)}</li>

            ))}

          </ul>

        </div>

      )}

    </nav>

  );

};



export default Navbar;

