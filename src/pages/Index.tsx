import { Button } from "@/components/ui/button";
import { Zap, Bot, Workflow, Settings, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import davidProfile from "@/assets/david-profile.png";
const valueProps = [{
  icon: Workflow,
  title: "AI Workflow Automation",
  description: "Streamline repetitive tasks and business processes with intelligent automation that works 24/7."
}, {
  icon: Bot,
  title: "AI Voice Agents",
  description: "Deploy conversational AI agents that handle calls, support, and sales with human-like interactions."
}, {
  icon: Zap,
  title: "Instant Efficiency",
  description: "Reduce operational costs by up to 70% while increasing response times and customer satisfaction."
}, {
  icon: Settings,
  title: "Custom Solutions",
  description: "Tailored AI systems designed specifically for your business needs and growth objectives."
}];
const services = [{
  title: "AI Workflow Automation",
  description: "Automate data entry, document processing, scheduling, and complex multi-step workflows.",
  features: ["Process Automation", "Data Integration", "Smart Routing"]
}, {
  title: "AI Voice Agents",
  description: "24/7 intelligent voice assistants for customer support, sales calls, and appointment booking.",
  features: ["Natural Conversations", "Multi-language", "CRM Integration"]
}, {
  title: "CRM Automation",
  description: "Supercharge your CRM with AI-powered lead scoring, follow-ups, and customer insights.",
  features: ["Lead Scoring", "Auto Follow-ups", "Analytics"]
}, {
  title: "Custom AI Solutions",
  description: "Bespoke AI systems tailored to your unique business challenges and opportunities.",
  features: ["Custom Models", "API Integration", "Scalable"]
}];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary font-medium text-sm mb-6">
                <Zap className="w-4 h-4" />
                <span>AI Automation Expert</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                DAVID <span className="text-gradient">AJAGBE</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4">
                AI Automation & AI Voice Agent Specialist
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                I help businesses automate workflows, customer support, and sales processes using AI automation and intelligent AI voice agents—saving time, reducing costs, and increasing efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl">
                  Book a Free Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/portfolio">View My Work</Link>
                </Button>
              </div>
              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-10">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">50+ Projects</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">100% Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="David Ajagbe - AI Automation Specialist" className="w-full h-auto object-cover" src="/lovable-uploads/906a7f96-6f62-448e-82ea-228782788314.png" />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Bot className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">AI Voice Agents</p>
                      <p className="text-sm text-muted-foreground">24/7 Automation</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background Decoration */}
              <div className="absolute top-8 right-8 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">AI Automation?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Transform your business operations with intelligent automation that scales with your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => <div key={prop.title} className="group p-6 rounded-2xl bg-gradient-card border border-border hover-lift" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Services <span className="text-gradient">Snapshot</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI automation solutions tailored for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => <div key={service.title} className="group p-8 rounded-2xl bg-background border border-border hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map(feature => <span key={feature} className="px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium">
                      {feature}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
            Ready to <span className="text-primary">Automate</span> Your Business?
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Let's discuss how AI automation can transform your operations, reduce costs, and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="border-background text-background hover:bg-background hover:text-foreground">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;