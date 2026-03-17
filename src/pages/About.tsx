import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Target, Lightbulb, TrendingUp, Users, Mail, Phone, MapPin, ArrowRight, CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const milestones = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "300%", label: "Avg Lead Increase" },
  { number: "24/7", label: "Automation Uptime" },
];

const expertise = [
  { icon: Mail, title: "Email Campaign Strategy", description: "Crafting high-converting email sequences, drip campaigns, and automated workflows that nurture leads and drive sales." },
  { icon: Target, title: "CRM Automation", description: "Setting up and optimizing CRM systems like GoHighLevel, HubSpot, and Klaviyo to automate sales pipelines and customer management." },
  { icon: TrendingUp, title: "Sales Funnel Automation", description: "Building automated sales funnels that guide prospects from awareness to purchase with minimal manual intervention." },
  { icon: Users, title: "Lead Nurturing Systems", description: "Creating intelligent lead nurturing workflows that deliver personalized content based on behavior and engagement." },
];

const approach = [
  { icon: Lightbulb, title: "Discovery", description: "Deep dive into your marketing processes to identify automation opportunities and quick wins." },
  { icon: Target, title: "Strategy", description: "Design a custom email marketing and CRM automation plan tailored to your business goals." },
  { icon: TrendingUp, title: "Implementation", description: "Build and deploy automation systems using GoHighLevel, HubSpot, or Klaviyo." },
  { icon: Users, title: "Optimization", description: "Continuously monitor, test, and optimize for maximum marketing ROI and engagement." },
];

const About = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) { toast.error("Please enter your name"); return; }
    if (!formData.email.trim()) { toast.error("Please enter your email"); return; }
    if (!validateEmail(formData.email.trim())) { toast.error("Please enter a valid email address"); return; }
    if (!formData.message.trim()) { toast.error("Please enter your message"); return; }
    if (formData.message.trim().length < 10) { toast.error("Message must be at least 10 characters"); return; }

    setIsSubmitting(true);
    try {
      await fetch("https://alliysen.app.n8n.cloud/webhook/c058b86a-e23a-417d-bb40-79fd0fb30dcb", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim(), timestamp: new Date().toISOString() }),
      });
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">David Ajagbe</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Email Marketing & CRM Automation Specialist helping businesses streamline their marketing operations and increase revenue through intelligent automation systems.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img alt="David Ajagbe - Email Marketing & CRM Automation Expert" className="w-full h-auto object-cover" src="/lovable-uploads/0ce0f213-9c79-43bd-9de5-7084dc138f53.png" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
            </div>

            <div className="animate-fade-in-right">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your Email Marketing & <span className="text-gradient">CRM Automation</span> Partner
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm David Ajagbe, an Email Marketing & CRM Automation Specialist dedicated to helping businesses streamline their marketing operations and increase revenue through intelligent automation systems.
                </p>
                <p>
                  With deep expertise in platforms like GoHighLevel, HubSpot, and Klaviyo, I build automation systems that handle email campaigns, lead nurturing, sales pipelines, and customer lifecycle management—so you can focus on growing your business.
                </p>
                <p>
                  My approach combines strategic email campaign design with powerful CRM automation to create systems that save time, increase efficiency, and dramatically improve your marketing ROI. Whether you're a startup, agency, coach, or ecommerce brand, I deliver solutions that produce measurable results.
                </p>
                <p>
                  From automated welcome sequences and abandoned cart flows to full sales funnel automation and CRM virtual assistant services, I provide end-to-end marketing automation that scales with your business.
                </p>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {milestones.map((milestone) => (
              <div key={milestone.label} className="text-center p-6 rounded-2xl bg-gradient-card border border-border">
                <p className="font-display text-4xl font-bold text-primary mb-2">{milestone.number}</p>
                <p className="text-muted-foreground font-medium">{milestone.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Areas of <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized skills in email marketing, CRM automation, and lead generation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item) => (
              <div key={item.title} className="group p-8 rounded-2xl bg-background border border-border hover-lift">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology for delivering marketing automation that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, index) => (
              <div key={step.title} className="relative p-6 rounded-2xl bg-gradient-card border border-border text-center hover-lift">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mx-auto mt-4 mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to automate your email marketing and CRM? Let's talk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a href="mailto:ajagbedavid20@gmail.com" className="flex flex-col items-center p-6 rounded-2xl bg-background border border-border hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="font-semibold text-foreground mb-1">Email</p>
                <p className="text-muted-foreground text-sm">ajagbedavid20@gmail.com</p>
              </a>

              <a href="https://wa.me/2349130919188" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-background border border-border hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="font-semibold text-foreground mb-1">Phone / WhatsApp</p>
                <p className="text-muted-foreground text-sm">+2349130919188</p>
              </a>

              <div className="flex flex-col items-center p-6 rounded-2xl bg-background border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="font-semibold text-foreground mb-1">Location</p>
                <p className="text-muted-foreground text-sm">Remote / Global</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell me about your email marketing or CRM automation needs..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-background resize-none" />
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-background mb-6">
            Let's <span className="text-primary">Automate</span> Your Marketing
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Ready to transform your email marketing and CRM operations? Schedule a free consultation to explore the possibilities.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href="https://calendar.google.com/appointments/schedules/AcZssZ0RpEq1seLDQndjXeGvlgq1zCHPylkBtTGm8M1LgZiVY1p3QjJetzUVT1BhVE8l89eUs9SOdP_L" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;