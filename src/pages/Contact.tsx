import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24 bg-gradient-glow">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold bg-primary/10 text-primary mb-6">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Let's Build Something <span className="text-gradient-gold">Incredible</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Whether you need to hire top talent or scale your digital presence, our team is ready to craft a custom growth plan for your business.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="text-foreground font-medium">Hr@brothersbond.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call Us</div>
                    <div className="text-foreground font-medium">+91 81783 30956</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Visit Us</div>
                    <div className="text-foreground font-medium">B-07 Ground Floor, Deep Vihar, Rohini Sector-24, New Delhi, India</div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-10 rounded-xl overflow-hidden border border-border">
                <iframe
                  title="BrothersBond Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5!2d77.0567!3d28.7365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDeep+Vihar%2C+Rohini+Sector+24%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-xl border border-border bg-card shadow-card space-y-6">
                <h2 className="text-2xl font-heading font-bold text-foreground">Request a Free Consultation</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <Input placeholder="Email *" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  <Input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
                <Textarea placeholder="Tell us about your project and goals *" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <Button type="submit" size="lg" className="w-full text-base">
                  Send Message <Send className="ml-2" size={18} />
                </Button>
                <p className="text-xs text-muted-foreground text-center">We respond within 24 hours. No spam, ever.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
