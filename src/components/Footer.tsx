import { Github, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2026 Badiger Yetesh. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/While-code-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
        <a href="mailto:yeteshbadiger@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="w-5 h-5" /></a>
        <a href="tel:7093034187" className="text-muted-foreground hover:text-foreground transition-colors"><Phone className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
