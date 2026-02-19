import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-navy-deep border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl font-bold text-gradient-gold">Elevate Coaching</span>
            <p className="text-muted-foreground text-sm mt-1">
              © {new Date().getFullYear()} Elevate Coaching. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:hello@elevatecoaching.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
