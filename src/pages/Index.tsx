import { Button } from "@/components/ui/button";
import { Mail, BarChart3, Users, Workflow, ArrowRight, CheckCircle, Target, TrendingUp, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const benefits = [
  { icon: Mail, title: "Automated Lead Nurturing", description: "Convert prospects into customers with intelligent email sequences that deliver the right message at the right time." },
  { icon: TrendingUp, title: "Higher Conversion Rates", description: "Optimize every touchpoint in your sales funnel with data-driven automation that maximizes conversions." },
  { icon: Users, title: "Better Customer Retention", description: "Keep customers engaged with personalized communication and automated lifecycle campaigns." },
  { icon: Target, title: "Personalized Communication", description: "Deliver targeted messages based on behavior, preferences, and engagement history." },
  { icon: BarChart3, title: "Scalable Sales Systems", description: "Build automation that grows with your business without adding headcount." },
];

const services = [
  {
    title: "Email Marketing Automation",
    description: "Design and implement automated email campaigns, sequences, and lead nurturing systems that drive engagement and revenue.",
    features: ["Drip Campaigns", "Welcome Sequences", "Behavioral Triggers", "A/B Testing"],
  },
  {
    title: "CRM Automation",
    description: "Set up and optimize CRM systems to automate sales pipelines, lead tracking, and customer management for maximum efficiency.",
    features: ["Pipeline Automation", "Lead Scoring", "Contact Management", "Deal Tracking"],
  },
  {
    title: "Lead Generation Systems",
    description: "Build funnels and automated follow-up sequences that convert website visitors into paying customers consistently.",
    features: ["Landing Pages", "Lead Magnets", "Follow-up Sequences", "Conversion Tracking"],
  },
  {
    title: "CRM Virtual Assistant",
    description: "Provide ongoing CRM management, automation setup, workflow optimization, and campaign monitoring to keep your systems running smoothly.",
    features: ["Workflow Optimization", "Campaign Monitoring", "Data Cleanup", "Reporting"],
  },
];

const platforms = [
  { name: "GoHighLevel", description: "All-in-one marketing & CRM platform" },
  { name: "HubSpot", description: "Inbound marketing & sales CRM" },
  { name: "Klaviyo", description: "E-commerce email & SMS marketing" },
];

const results = [
  { metric: "300%", label: "Increase in Lead Generation" },
  { metric: "45%", label: "Higher Email Open Rates" },
  { metric: "10x", label: "Automated Follow-ups Sent" },
  { metric: "80%", label: "Improved Customer Engagement" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary font-medium text-sm mb-6">
                <Mail className="w-4 h-4" />
                <span>Email Marketing & CRM Automation</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Email Marketing & <span className="text-gradient">CRM Automation</span> Expert
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4">
                David Ajagbe
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                I help businesses generate more leads, nurture prospects, and increase revenue using powerful email marketing and CRM automation systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://calendar.app.google/7WstUGCADkFWkKg57" target="_blank" rel="noopener noreferrer">
                    Book a Free Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
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

            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="David Ajagbe - Email Marketing & CRM Automation Expert" className="w-full h-auto object-cover" src="/lovable-uploads/906a7f96-6f62-448e-82ea-228782788314.png" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email & CRM</p>
                      <p className="text-sm text-muted-foreground">Automation Expert</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Expert Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trusted <span className="text-gradient">Automation Expert</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience building email marketing and CRM automation systems, I help businesses save time, improve conversions, and scale operations. From startups to established brands, I deliver automation solutions that produce measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Email Marketing & CRM Automation */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why <span className="text-gradient">Email Marketing & CRM Automation?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Transform your marketing operations with intelligent automation that scales with your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="group p-6 rounded-2xl bg-background border border-border hover-lift">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Services <span className="text-gradient">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive email marketing and CRM automation services tailored for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group p-8 rounded-2xl bg-gradient-card border border-border hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{service.title}</h3>
                  <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms I Work With */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Platforms I <span className="text-gradient">Work With</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert-level proficiency in the leading email marketing and CRM platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="text-center p-8 rounded-2xl bg-background border border-border hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5">
                  <Settings className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{platform.name}</h3>
                <p className="text-muted-foreground">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Proven <span className="text-gradient">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real outcomes delivered for businesses through email marketing and CRM automation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result) => (
              <div key={result.label} className="text-center p-6 rounded-2xl bg-gradient-card border border-border hover-lift">
                <p className="font-display text-4xl font-bold text-primary mb-2">{result.metric}</p>
                <p className="text-muted-foreground font-medium text-sm">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
            Ready to <span className="text-primary">Automate</span> Your Marketing?
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Let's discuss how email marketing and CRM automation can transform your operations, reduce costs, and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="https://calendar.app.google/7WstUGCADkFWkKg57" target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-background text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;