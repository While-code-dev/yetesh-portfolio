import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold text-gradient">BY</a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleDark} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Toggle theme">
            {dark ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Menu">
            {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
