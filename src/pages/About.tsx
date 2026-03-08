import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-24 bg-gradient-glow">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold bg-primary/10 text-primary mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              India's First <span className="text-gradient-gold">Hybrid Growth Partner</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              BrothersBond was founded with a simple belief: businesses grow fastest when they have the right people AND the right visibility. We're the only agency that delivers both.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Our <span className="text-gradient-gold">Unique Positioning</span></h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Most agencies are either recruitment firms or marketing agencies. BrothersBond combines both disciplines to create compounding growth — helping startups hire engineering teams while simultaneously building their lead generation engines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This dual expertise means we understand your business from the inside out — your culture, your market, your customers, and your talent needs. One partner, one strategy, exponential results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: "500+ Hires Made" },
                { icon: Target, label: "3x Avg. ROI" },
                { icon: Award, label: "95% Retention" },
                { icon: Globe, label: "Global Clients" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-background text-center"
                >
                  <item.icon size={28} className="text-primary mx-auto mb-3" />
                  <div className="text-sm font-medium text-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-glow">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Let's Grow <span className="text-gradient-gold">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you need to hire your next star employee or scale your brand online, we're ready to help.
          </p>
          <Button size="lg" asChild className="text-base px-8">
            <Link to="/contact">Start a Conversation <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
