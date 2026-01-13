import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";


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

      {/* AI Automation Projects Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              AI Automation Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end workflow automation solutions that transform business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-1.jpg" alt="E-commerce Order Automation" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">E-commerce Order Automation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Automated order processing, inventory updates, and shipping notifications for a major online retailer.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">85% reduction in processing time</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-2.jpg" alt="Lead Generation Pipeline" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Lead Generation Pipeline</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">AI-powered lead scoring and automatic CRM updates with personalized follow-up sequences.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">3x increase in qualified leads</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-3.jpg" alt="Document Processing System" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Document Processing System</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Intelligent document extraction and classification for a financial services firm.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">60% cost savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Voice Agent Solutions Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              AI Voice Agent Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Conversational AI agents that handle customer interactions with human-like precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 4 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-4.jpg" alt="Customer Support Voice Bot" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Customer Support Voice Bot</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">24/7 AI voice agent handling customer inquiries, troubleshooting, and ticket creation.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">70% call resolution rate</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-5.jpg" alt="Appointment Booking Agent" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Appointment Booking Agent</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Voice-enabled scheduling system for a healthcare provider with calendar integration.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">40% reduction in no-shows</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-6.jpg" alt="Sales Qualification Agent" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Sales Qualification Agent</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">AI agent that qualifies inbound leads and schedules demos with sales representatives.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">50% more demos booked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Workflow Integrations Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Business Workflow Integrations
            </h2>
            <p className="text-lg text-muted-foreground">
              Seamless integrations connecting your favorite tools for maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 7 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-7.jpg" alt="CRM-Marketing Automation" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">CRM-Marketing Automation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Bi-directional sync between Salesforce and marketing platforms with automated campaigns.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">2x marketing efficiency</span>
                </div>
              </div>
            </div>

            {/* Project 8 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-8.jpg" alt="Finance & Accounting Sync" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Finance & Accounting Sync</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Automated invoicing, payment tracking, and financial reporting integration.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">90% time saved on bookkeeping</span>
                </div>
              </div>
            </div>

            {/* Project 9 */}
            <div className="group rounded-2xl bg-background border border-border hover-lift overflow-hidden">
              <img src="/portfolio/project-9.jpg" alt="HR Onboarding Automation" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">HR Onboarding Automation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Complete employee onboarding workflow with document management and training assignment.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">75% faster onboarding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
