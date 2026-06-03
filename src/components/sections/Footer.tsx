import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 mt-12">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold">A</span>
          <span>© {new Date().getFullYear()} Enaganti Akshay Shankar Naidu — Built with care.</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://linkedin.com/in/akshay-enaganti" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/5 hover:text-foreground" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="https://github.com/akshayenaganti" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/5 hover:text-foreground" aria-label="GitHub"><Github size={16} /></a>
          <a href="mailto:akshayenaganti@gmail.com" className="p-2 rounded-lg hover:bg-white/5 hover:text-foreground" aria-label="Email"><Mail size={16} /></a>
          <a href="https://wa.me/919392977189" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/5 hover:text-foreground" aria-label="WhatsApp"><MessageCircle size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
