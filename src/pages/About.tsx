import { Button } from "@/components/ui/button";
import { Target, Lightbulb, TrendingUp, Users, Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import davidProfile from "@/assets/david-profile.png";
const milestones = [{
  number: "50+",
  label: "Projects Completed"
}, {
  number: "30+",
  label: "Happy Clients"
}, {
  number: "70%",
  label: "Cost Reduction"
}, {
  number: "24/7",
  label: "AI Availability"
}];
const approach = [{
  icon: Lightbulb,
  title: "Strategy",
  description: "Deep dive into your business processes to identify automation opportunities."
}, {
  icon: Target,
  title: "Automation",
  description: "Design and implement custom AI solutions tailored to your needs."
}, {
  icon: TrendingUp,
  title: "Optimization",
  description: "Continuously refine and improve automation for maximum efficiency."
}, {
  icon: Users,
  title: "Results",
  description: "Measurable outcomes that drive growth and operational excellence."
}];
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">David Ajagbe</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Passionate about transforming businesses through intelligent automation and AI innovation.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative animate-fade-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img alt="David Ajagbe" className="w-full h-auto object-cover" src="/lovable-uploads/0ce0f213-9c79-43bd-9de5-7084dc138f53.png" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-right">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Journey Into <span className="text-gradient">AI Automation</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into AI automation began with a simple observation: businesses were spending countless hours on repetitive tasks that could be automated. This sparked a passion for finding intelligent solutions that free people to focus on what truly matters—strategy, creativity, and growth.
                </p>
                <p>
                  Over the years, I've dedicated myself to mastering the art of AI automation and voice agent technology. From building custom workflow automation systems to deploying intelligent voice agents that handle customer interactions with human-like precision, I've helped businesses across various industries transform their operations.
                </p>
                <p>
                  What sets my approach apart is the focus on practical, scalable solutions. I don't just implement technology—I partner with businesses to understand their unique challenges and create automation strategies that deliver measurable results. Every project is an opportunity to push the boundaries of what's possible with AI.
                </p>
                <p>
                  Today, I continue to explore the cutting edge of AI technology, always seeking new ways to help businesses automate smarter, operate leaner, and grow faster. My mission is simple: to make intelligent automation accessible to every business ready to embrace the future.
                </p>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {milestones.map((milestone, index) => <div key={milestone.label} className="text-center p-6 rounded-2xl bg-gradient-card border border-border">
                <p className="font-display text-4xl font-bold text-primary mb-2">
                  {milestone.number}
                </p>
                <p className="text-muted-foreground font-medium">{milestone.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Mission & <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Helping businesses grow through smart automation with a proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, index) => <div key={step.title} className="relative p-6 rounded-2xl bg-background border border-border text-center hover-lift">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mx-auto mt-4 mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to discuss your automation needs? Reach out anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="mailto:ajagbedavid20@gmail.com" className="flex flex-col items-center p-6 rounded-2xl bg-gradient-card border border-border hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="font-semibold text-foreground mb-1">Email</p>
                <p className="text-muted-foreground text-sm">ajagbedavid20@gmail.com</p>
              </a>

              <a href="https://wa.me/2349130919188" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-gradient-card border border-border hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="font-semibold text-foreground mb-1">Phone / WhatsApp</p>
                <p className="text-muted-foreground text-sm">+2349130919188</p>
              </a>

              <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="font-semibold text-foreground mb-1">Location</p>
                <p className="text-muted-foreground text-sm">Remote / Global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-background mb-6">
            Let's <span className="text-primary">Automate</span> Your Business
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Ready to transform your operations? Schedule a free consultation to explore the possibilities.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href="https://calendar.app.google/7WstUGCADkFWkKg57" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default About;