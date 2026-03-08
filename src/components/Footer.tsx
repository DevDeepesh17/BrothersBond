import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold font-heading text-gradient-gold">Brothers</span>
              <span className="text-2xl font-bold font-heading text-foreground">Bond</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your hybrid growth partner for hiring the right talent and scaling your brand online.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/digital-marketing" className="hover:text-primary transition-colors">SEO Services</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-primary transition-colors">Google Ads / PPC</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/hr-consultancy" className="hover:text-primary transition-colors">Talent Acquisition</Link></li>
              <li><Link to="/hr-consultancy" className="hover:text-primary transition-colors">HR Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> Hr@brothersbond.in</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 81783 30956</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-1" /> B-07 Ground Floor, Deep Vihar, Rohini Sector-24, New Delhi</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 BrothersBond. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
