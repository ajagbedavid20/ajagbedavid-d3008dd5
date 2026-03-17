import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Mail, Users, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";

const emailProjects = [
  { title: "Welcome Sequence Automation", description: "Built a 7-email welcome sequence for an ecommerce brand that onboards new subscribers and drives first purchases automatically.", result: "45% open rate achieved", image: "/lovable-uploads/1782a8b1-4355-49f7-9af6-86e783a35b10.jpg" },
  { title: "Lead Nurturing Campaign", description: "Designed a multi-touch lead nurturing campaign for a SaaS company, delivering personalized content based on user behavior and engagement.", result: "3x increase in qualified leads", image: "/lovable-uploads/fb07003f-dc52-4404-a22c-1aefae65a77b.jpg" },
  { title: "Abandoned Cart Flow", description: "Implemented automated abandoned cart recovery emails for an online store using Klaviyo, recovering lost revenue with timely reminders.", result: "25% cart recovery rate", image: "/lovable-uploads/ef988307-751a-40a2-b583-61ca8846b8e6.png" },
  { title: "Sales Follow-up Automation", description: "Created an automated sales follow-up sequence in GoHighLevel that nurtures leads after initial consultation bookings.", result: "60% more demos booked", image: "/lovable-uploads/68cd0816-5cc5-4100-a5a4-97d79b1ec53c.png" },
];

const crmProjects = [
  { title: "Automated Sales Pipeline", description: "Set up a fully automated sales pipeline in HubSpot with lead scoring, deal tracking, and automated task assignment for a coaching business.", result: "2x sales efficiency", image: "/lovable-uploads/a931b3cf-50de-494f-bba5-0c0b2e01c1bb.webp" },
  { title: "Lead Scoring System", description: "Implemented an intelligent lead scoring system in GoHighLevel that automatically prioritizes high-value prospects based on engagement data.", result: "40% faster lead response", image: "/lovable-uploads/4e4b2ea3-c456-4c25-8b0a-874aa62dddf7.png" },
  { title: "Customer Lifecycle Workflows", description: "Designed end-to-end customer lifecycle automation for an agency, from onboarding to renewal reminders and upsell campaigns.", result: "35% improved retention", image: "/lovable-uploads/f874789d-c4d1-4b14-bee1-6637aa8c207a.png" },
];

const marketingProjects = [
  { title: "Funnel Automation System", description: "Built a complete marketing funnel with landing pages, lead magnets, email sequences, and CRM integration for a service-based business.", result: "300% lead increase", image: "/lovable-uploads/76624c0c-6fcf-4543-975d-5bdc43a6a608.png" },
  { title: "Email Segmentation System", description: "Created an advanced email segmentation system in Klaviyo that delivers hyper-personalized content based on purchase history and behavior.", result: "50% higher click rates", image: "/lovable-uploads/d0f2d07b-b2e7-4cd8-9e72-1f836cef06e7.png" },
];

const ProjectCard = ({ project }: { project: { title: string; description: string; result: string; image: string } }) => (
  <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
    <img alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" src={project.image} />
    <div className="p-6">
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">{project.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="text-primary font-semibold text-sm">{project.result}</span>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              My <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore email marketing automation, CRM automation, and lead generation projects that have delivered real results for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Email Automation */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary font-medium text-sm mb-4">
              <Mail className="w-4 h-4" />
              <span>Email Automation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Email Automation Systems
            </h2>
            <p className="text-lg text-muted-foreground">
              Automated email campaigns and sequences that nurture leads and drive conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emailProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      {/* CRM Automation */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary font-medium text-sm mb-4">
              <Users className="w-4 h-4" />
              <span>CRM Automation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              CRM Automation Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Automated pipelines, lead scoring, and customer lifecycle workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {crmProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      {/* Marketing Automation */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary font-medium text-sm mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Marketing Automation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Marketing Automation Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Funnel automation, email segmentation, and campaign analytics dashboards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-background mb-6">
            Ready to <span className="text-primary">Automate</span> Your Marketing?
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Let's discuss your email marketing and CRM automation needs and create a custom solution for your business.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href="https://calendar.app.google/7WstUGCADkFWkKg57" target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;