import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleEmail = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message || "Hello, I visited your portfolio and would like to connect with you."}`);
    window.open(`mailto:yeteshbadiger@gmail.com?subject=${subject}&body=${body}`, "_self");
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(form.message || "Hello, I visited your portfolio and would like to connect with you.");
    window.open(`https://wa.me/917093034187?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-6 ${inView ? "animate-slide-in-left" : "opacity-0"}`}>
            <p className="text-muted-foreground">Interested in collaborating or have a question? Feel free to reach out!</p>
            <div className="space-y-4">
              <a href="tel:7093034187" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
                +91 7093034187
              </a>
              <a href="mailto:yeteshbadiger@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                yeteshbadiger@gmail.com
              </a>
            </div>
          </div>
          {/* Form */}
          <div className={`glass rounded-xl p-6 gradient-border ${inView ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
              <div className="flex gap-3">
                <Button variant="hero" className="flex-1" onClick={handleEmail}>
                  <Send className="w-4 h-4" /> Send via Email
                </Button>
                <Button variant="heroOutline" className="flex-1" onClick={handleWhatsApp}>
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
