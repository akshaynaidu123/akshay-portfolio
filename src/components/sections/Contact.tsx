import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/SectionHeading";

const phone = "+91 9392977189";
const phoneRaw = "919392977189";
const email = "akshayenaganti@gmail.com";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const msg = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(msg + `\n\n— ${name} (${data.get("email")})`);
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      toast.success("Opening your email client…");
      setSending(false);
      form.reset();
    }, 300);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build <span className="gradient-text">something</span></>}
          description="Open to internships, collaborations, and ambitious AI projects."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-6 sm:p-8 gradient-border space-y-5"
          >
            <a href={`tel:${phoneRaw}`} className="flex items-start gap-4 group">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                <div className="font-medium group-hover:text-primary transition-colors">{phone}</div>
              </div>
            </a>
            <a href={`mailto:${email}`} className="flex items-start gap-4 group">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-medium break-all group-hover:text-primary transition-colors">{email}</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Location</div>
                <div className="font-medium">Andhra Pradesh, India</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/akshay-enaganti"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/akshayenaganti"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                <Mail size={14} /> Email
              </a>
              <a
                href={`https://wa.me/${phoneRaw}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-3xl p-6 sm:p-8 gradient-border space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-muted-foreground">Your name</span>
                <input
                  name="name" required
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="Ada Lovelace"
                />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Email</span>
                <input
                  name="email" type="email" required
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs text-muted-foreground">Message</span>
              <textarea
                name="message" required rows={6}
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
                placeholder="Tell me about the role, project, or opportunity…"
              />
            </label>
            <button
              type="submit" disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition disabled:opacity-50"
            >
              <Send size={14} /> {sending ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
