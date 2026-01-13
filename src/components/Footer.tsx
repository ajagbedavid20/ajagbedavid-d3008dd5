import { Link } from "react-router-dom";
import { Zap, Mail, Phone, Linkedin, Twitter, Instagram, ArrowUp, Facebook } from "lucide-react";
const footerLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "About",
  path: "/about"
}, {
  name: "Portfolio",
  path: "/portfolio"
}, {
  name: "Testimonials",
  path: "/testimonials"
}];
const socialLinks = [{
  name: "Facebook",
  icon: Facebook,
  url: "#"
}, {
  name: "LinkedIn",
  icon: Linkedin,
  url: "#"
}];
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-orange transition-transform group-hover:scale-105">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">David Ajagbe<span className="text-primary">Ajagbe</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              AI Automation & Voice Agent Specialist helping businesses scale with intelligent automation solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:david@ajagbe.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  <span>ajagbedavid20@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  <span>+2349130919188</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map(social => <a key={social.name} href={social.url} aria-label={social.name} className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} David Ajagbe. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-dark transition-colors duration-200" aria-label="Scroll to top">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;