import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  Users, Search, ShieldCheck, Wallet, Award, Briefcase,
  ArrowRight, CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    description: "End-to-end recruitment solutions to find the perfect candidates for your growing team.",
    benefits: ["Reduced time-to-hire", "Quality candidate pipeline", "Cultural fit assessment", "Scalable hiring process"],
    whoFor: "Startups, SMEs, and enterprises looking to build high-performing teams.",
    process: ["Requirement analysis", "Candidate sourcing", "Screening & shortlisting", "Interview coordination", "Offer management"],
  },
  {
    icon: Search,
    title: "Executive Search",
    description: "Discreet, targeted search for C-suite and senior leadership positions.",
    benefits: ["Access to passive candidates", "Confidential search process", "Industry-specific expertise", "Leadership assessment"],
    whoFor: "Companies seeking board members, CXOs, VPs, and directors.",
    process: ["Role profiling", "Market mapping", "Candidate engagement", "Assessment & evaluation", "Placement & onboarding"],
  },
  {
    icon: ShieldCheck,
    title: "HR Compliance",
    description: "Stay compliant with Indian labor laws and regulations with expert guidance.",
    benefits: ["Risk mitigation", "Regulatory compliance", "Policy development", "Audit readiness"],
    whoFor: "Businesses expanding in India or needing compliance updates.",
    process: ["Compliance audit", "Gap analysis", "Policy drafting", "Implementation", "Ongoing monitoring"],
  },
  {
    icon: Wallet,
    title: "Payroll Management",
    description: "Accurate, timely payroll processing with full statutory compliance.",
    benefits: ["Error-free processing", "Tax compliance", "Employee self-service", "Cost savings"],
    whoFor: "Companies of all sizes looking to outsource payroll operations.",
    process: ["Setup & configuration", "Monthly processing", "Tax filing", "Reporting", "Year-end compliance"],
  },
  {
    icon: Award,
    title: "Employer Branding",
    description: "Build a compelling employer brand that attracts top talent organically.",
    benefits: ["Talent attraction", "Lower recruitment costs", "Employee retention", "Brand reputation"],
    whoFor: "Companies wanting to become employers of choice.",
    process: ["Brand audit", "EVP development", "Content strategy", "Channel activation", "Measurement"],
  },
  {
    icon: Briefcase,
    title: "HR Consulting",
    description: "Strategic HR consulting to optimize your people operations and drive business results.",
    benefits: ["Operational efficiency", "Strategic alignment", "Employee engagement", "Change management"],
    whoFor: "Organizations undergoing growth, restructuring, or transformation.",
    process: ["Diagnostic assessment", "Strategy development", "Implementation planning", "Execution support", "Impact measurement"],
  },
];

const HRConsultancy = () => {
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
              HR Consultancy Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Build World-Class <span className="text-gradient-gold">Teams That Deliver</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              From talent acquisition to HR strategy, we help you hire smarter, stay compliant, and build a winning workplace culture.
            </p>
            <Button size="lg" asChild className="text-base px-8">
              <Link to="/contact">Get HR Consultation <ArrowRight className="ml-2" size={18} /></Link>
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
                <p className="text-lg text-muted-foreground mb-4">{service.description}</p>
                <p className="text-sm text-primary font-medium mb-8">Best for: {service.whoFor}</p>
                <Button asChild className="px-6">
                  <Link to="/contact">Enquire Now <ArrowRight className="ml-2" size={16} /></Link>
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
            Ready to Build Your <span className="text-gradient-gold">Dream Team?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss how our HR solutions can transform your hiring and people operations.
          </p>
          <Button size="lg" asChild className="text-base px-8">
            <Link to="/contact">Book Free HR Consultation <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HRConsultancy;
