import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import {
  Search, Target, Share2, FileText, Globe, TrendingUp,
  ArrowRight, CheckCircle2, BarChart3, Megaphone
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    overview: "Dominate search engine results and drive organic traffic that converts.",
    benefits: ["Higher Google rankings", "Increased organic traffic", "Better conversion rates", "Long-term ROI"],
    process: ["Technical SEO audit", "Keyword research & strategy", "On-page optimization", "Link building & outreach", "Monthly reporting"],
  },
  {
    icon: Target,
    title: "Google Ads / PPC",
    overview: "Maximize your ad spend with data-driven PPC campaigns that deliver immediate, measurable results.",
    benefits: ["Instant visibility", "Precise audience targeting", "Measurable ROI", "Scalable campaigns"],
    process: ["Campaign strategy", "Ad copy & creative", "Landing page optimization", "Bid management", "Performance tracking"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    overview: "Build brand awareness and community across all major platforms with engaging content strategies.",
    benefits: ["Brand awareness", "Community building", "Lead generation", "Customer loyalty"],
    process: ["Platform strategy", "Content calendar", "Creative production", "Community management", "Analytics & insights"],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    overview: "Attract, engage, and convert your audience with strategic content that positions you as an authority.",
    benefits: ["Thought leadership", "SEO boost", "Lead nurturing", "Brand storytelling"],
    process: ["Content audit", "Strategy development", "Content creation", "Distribution", "Performance analysis"],
  },
  {
    icon: Globe,
    title: "Website Development",
    overview: "Build fast, modern, conversion-optimized websites that turn visitors into customers.",
    benefits: ["Mobile-first design", "Lightning fast speed", "SEO-friendly", "High conversion rates"],
    process: ["Discovery & planning", "UI/UX design", "Development", "Testing & QA", "Launch & support"],
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    overview: "Generate a consistent pipeline of high-quality leads with multi-channel strategies.",
    benefits: ["Qualified leads", "Lower cost per lead", "Multi-channel reach", "Predictable pipeline"],
    process: ["Audience research", "Funnel design", "Campaign execution", "Lead scoring", "Conversion optimization"],
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    overview: "Every rupee counts. We drive ROI-focused campaigns across search, social, and display channels.",
    benefits: ["Data-driven decisions", "Maximum ROI", "Cross-channel synergy", "Transparent reporting"],
    process: ["Goal setting", "Channel selection", "Campaign launch", "Real-time optimization", "ROI reporting"],
  },
];

const DigitalMarketing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-glow">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold bg-primary/10 text-primary mb-6">
              Digital Marketing Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Scale Your Brand with <span className="text-gradient-gold">Data-Driven Marketing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              From SEO to performance marketing, we build growth engines that deliver measurable results for startups and enterprises alike.
            </p>
            <Button size="lg" asChild className="text-base px-8">
              <Link to="/contact">Get Your Free Marketing Audit <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section key={i} className={`py-20 ${i % 2 === 0 ? "bg-card" : ""}`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-start"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{service.overview}</p>
                <Button asChild className="px-6">
                  <Link to="/contact">Get Started <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Our Process</h3>
                  <ol className="space-y-3">
                    {service.process.map((p, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {j + 1}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-glow">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Let's Build Your <span className="text-gradient-gold">Growth Engine</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Book a free consultation and discover how our digital marketing strategies can transform your business.
          </p>
          <Button size="lg" asChild className="text-base px-8">
            <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalMarketing;
