import logo from "@/assets/logo.png";

const LINKEDIN_URL = "https://www.linkedin.com/in/vandana-sharma-leads/";

const Footer = () => {
  return (
    <footer className="py-4 bg-navy-deep border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="LeadNorth Consulting" className="h-10 w-auto mix-blend-screen" />
            <div>
              <span className="font-display text-lg font-bold text-foreground">LeadNorth Consulting</span>
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} LeadNorth Consulting. All rights reserved.
              </p>
            </div>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary text-sm transition-colors underline underline-offset-2 shrink-0"
          >
            Join Me on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
