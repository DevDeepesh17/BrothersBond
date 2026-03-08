import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  Search, Target, Share2, FileText, Globe, TrendingUp, Zap,
  Users, ShieldCheck, Award, ArrowRight, CheckCircle2,
  Building2, Briefcase, Rocket, BarChart3, Clock, Star, Phone
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "250+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
  { value: "3x", label: "Avg. ROI Delivered" },
  { value: "500+", label: "Positions Filled" },
];

const services = [
  { icon: Search, title: "SEO Services", description: "Dominate search rankings with data-driven SEO strategies that bring qualified traffic to your doorstep." },
  { icon: Target, title: "Google Ads / PPC", description: "Maximize ROI with precision-targeted paid campaigns that convert clicks into customers." },
  { icon: Share2, title: "Social Media Marketing", description: "Build a loyal community and amplify your brand presence across all major platforms." },
  { icon: Users, title: "Talent Acquisition", description: "Find and hire top-tier talent that aligns perfectly with your company culture and goals." },
  { icon: FileText, title: "Content Marketing", description: "Engage your audience with compelling content that educates, inspires, and converts." },
  { icon: Briefcase, title: "HR Consulting", description: "Streamline your HR operations with expert consulting for compliance, payroll, and employer branding." },
];

const process = [
  { step: "01", title: "Discovery", description: "We deep-dive into your business, goals, and challenges." },
  { step: "02", title: "Strategy", description: "We craft a custom growth plan combining hiring and marketing." },
  { step: "03", title: "Execution", description: "Our experts implement with precision and agility." },
  { step: "04", title: "Optimization", description: "We continuously refine for maximum results and ROI." },
];

const industries = [
  { icon: Rocket, label: "Startups" },
  { icon: Building2, label: "Real Estate" },
  { icon: BarChart3, label: "Finance" },
  { icon: Globe, label: "E-Commerce" },
  { icon: Briefcase, label: "IT & SaaS" },
  { icon: Users, label: "Healthcare" },
];

const testimonials = [
  { name: "Rajesh K.", role: "CEO, TechStart India", text: "BrothersBond helped us hire a full engineering team and generate 3x leads in 6 months. Absolute game-changer.", rating: 5 },
  { name: "Priya M.", role: "Founder, StyleBox", text: "Their dual expertise in HR and marketing saved us time and money. One partner for everything we needed.", rating: 5 },
  { name: "David W.", role: "COO, GlobalScale", text: "The team understood our international hiring needs and paired it with a stellar lead gen strategy.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-glow" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold bg-primary/10 text-primary mb-6">
              HR + Digital Marketing Agency
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6">
              Hire Smarter.{" "}
              <span className="text-gradient-gold">Market Better.</span>{" "}
              Grow Faster.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              India's first hybrid growth partner that combines world-class HR consultancy with performance-driven digital marketing to help you scale without limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/contact">Get a Free Consultation <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-gold text-foreground hover:bg-primary/10">
                <Link to="/digital-marketing">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-heading text-gradient-gold">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-glow">
        <div className="container">
          <SectionHeading
            badge="Why BrothersBond"
            title="Why Businesses Choose"
            highlight="BrothersBond"
            description="We don't just market your brand or fill positions. We build growth engines powered by the perfect blend of talent and digital strategy."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Dual Expertise", desc: "The only agency that fuses HR and digital marketing for compounding growth." },
              { icon: ShieldCheck, title: "Results-Driven", desc: "Every strategy is tied to measurable KPIs. No vanity metrics, only real business outcomes." },
              { icon: Award, title: "Startup-Friendly", desc: "Flexible packages designed for founders who need premium results without enterprise budgets." },
            ].map((item, i) => (
              <ServiceCard key={i} icon={item.icon} title={item.title} description={item.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            badge="Our Services"
            title="Everything You Need to"
            highlight="Hire & Grow"
            description="From talent acquisition to lead generation, we offer a comprehensive suite of services to accelerate your business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild className="border-gold text-foreground hover:bg-primary/10">
              <Link to="/digital-marketing">View All Services <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card">
        <div className="container">
          <SectionHeading
            badge="Our Process"
            title="A Proven 4-Step"
            highlight="Growth Framework"
            description="We've refined our process to deliver consistent, scalable results for businesses of all sizes."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-8 rounded-xl border border-border bg-background"
              >
                <div className="text-5xl font-heading font-bold text-primary/20 mb-4">{p.step}</div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container">
          <SectionHeading
            badge="Industries"
            title="We Serve Businesses"
            highlight="Across Sectors"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-gradient-card hover:border-gold transition-all"
              >
                <ind.icon size={28} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by"
            highlight="Growth-Focused Leaders"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border bg-background"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Ready to <span className="text-gradient-gold">Scale Your Business?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Get a free growth consultation from our experts. No commitments, just actionable insights tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-gold text-foreground hover:bg-primary/10">
                <a href="tel:+918178330956"><Phone className="mr-2" size={18} /> Call Us Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
