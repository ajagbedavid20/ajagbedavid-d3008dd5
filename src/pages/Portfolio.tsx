import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";

// Static portfolio images - replace these paths with your own images
import project1Image from "@/assets/portfolio/project-1.jpg";
import project2Image from "@/assets/portfolio/project-2.jpg";
import project3Image from "@/assets/portfolio/project-3.jpg";
import project4Image from "@/assets/portfolio/project-4.jpg";
import project5Image from "@/assets/portfolio/project-5.jpg";
import project6Image from "@/assets/portfolio/project-6.jpg";
import project7Image from "@/assets/portfolio/project-7.jpg";
import project8Image from "@/assets/portfolio/project-8.jpg";
import project9Image from "@/assets/portfolio/project-9.jpg";

const portfolioSections = [
  {
    title: "AI Automation Projects",
    description: "End-to-end workflow automation solutions that transform business operations.",
    projects: [
      {
        title: "E-commerce Order Automation",
        description: "Automated order processing, inventory updates, and shipping notifications for a major online retailer.",
        result: "85% reduction in processing time",
        image: project1Image,
      },
      {
        title: "Lead Generation Pipeline",
        description: "AI-powered lead scoring and automatic CRM updates with personalized follow-up sequences.",
        result: "3x increase in qualified leads",
        image: project2Image,
      },
      {
        title: "Document Processing System",
        description: "Intelligent document extraction and classification for a financial services firm.",
        result: "60% cost savings",
        image: project3Image,
      },
    ],
  },
  {
    title: "AI Voice Agent Solutions",
    description: "Conversational AI agents that handle customer interactions with human-like precision.",
    projects: [
      {
        title: "Customer Support Voice Bot",
        description: "24/7 AI voice agent handling customer inquiries, troubleshooting, and ticket creation.",
        result: "70% call resolution rate",
        image: project4Image,
      },
      {
        title: "Appointment Booking Agent",
        description: "Voice-enabled scheduling system for a healthcare provider with calendar integration.",
        result: "40% reduction in no-shows",
        image: project5Image,
      },
      {
        title: "Sales Qualification Agent",
        description: "AI agent that qualifies inbound leads and schedules demos with sales representatives.",
        result: "50% more demos booked",
        image: project6Image,
      },
    ],
  },
  {
    title: "Business Workflow Integrations",
    description: "Seamless integrations connecting your favorite tools for maximum efficiency.",
    projects: [
      {
        title: "CRM-Marketing Automation",
        description: "Bi-directional sync between Salesforce and marketing platforms with automated campaigns.",
        result: "2x marketing efficiency",
        image: project7Image,
      },
      {
        title: "Finance & Accounting Sync",
        description: "Automated invoicing, payment tracking, and financial reporting integration.",
        result: "90% time saved on bookkeeping",
        image: project8Image,
      },
      {
        title: "HR Onboarding Automation",
        description: "Complete employee onboarding workflow with document management and training assignment.",
        result: "75% faster onboarding",
        image: project9Image,
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              My <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore a selection of AI automation projects that have delivered real results for businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      {portfolioSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`section-padding ${sectionIndex % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}
        >
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold text-sm">{project.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-background mb-6">
            See How AI Can <span className="text-primary">Transform</span> Your Business
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Ready to achieve similar results? Let's discuss your unique challenges and create a custom solution.
          </p>
          <Button variant="cta" size="xl">
            Start Your AI Project Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
