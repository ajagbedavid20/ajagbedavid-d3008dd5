import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";

const testimonialSections = [
  {
    title: "Business Automation Success",
    testimonials: [
      {
        quote: "David transformed our entire operations. What used to take our team 40 hours a week now happens automatically. The ROI was incredible—we saw results within the first month.",
        name: "Sarah Johnson",
        role: "CEO, TechFlow Solutions",
        avatar: "SJ",
      },
      {
        quote: "The AI voice agent David built for us handles 70% of our customer calls now. Our customers can't tell the difference, and our support team finally has time for complex issues.",
        name: "Michael Chen",
        role: "Operations Director, CloudServe Inc",
        avatar: "MC",
      },
    ],
  },
  {
    title: "Sales & Lead Generation",
    testimonials: [
      {
        quote: "Our lead qualification process was a mess before David stepped in. Now, AI handles the initial outreach and scheduling, and our sales team closes 3x more deals.",
        name: "Amanda Williams",
        role: "Sales VP, GrowthMax",
        avatar: "AW",
      },
      {
        quote: "The automation David implemented connects our CRM, email marketing, and sales tools seamlessly. We've doubled our conversion rate with the same team size.",
        name: "Robert Taylor",
        role: "Marketing Director, ScaleUp Co",
        avatar: "RT",
      },
    ],
  },
  {
    title: "Customer Support Excellence",
    testimonials: [
      {
        quote: "We were drowning in support tickets. David's AI solution now resolves 60% of inquiries automatically, and our response time dropped from hours to seconds.",
        name: "Jennifer Martinez",
        role: "Customer Success Manager, HelpDesk Pro",
        avatar: "JM",
      },
      {
        quote: "The multilingual AI voice agent has been a game-changer for our global customer base. We now provide 24/7 support in 5 languages without hiring additional staff.",
        name: "David Kim",
        role: "COO, GlobalTech Solutions",
        avatar: "DK",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Hear from businesses that have transformed their operations with AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Sections */}
      {testimonialSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`section-padding ${sectionIndex % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}
        >
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="p-8 rounded-2xl bg-background border border-border hover-lift"
                >
                  <div className="flex items-start gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                        {testimonial.avatar}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      <p className="text-foreground leading-relaxed mb-6 text-lg">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
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
            Join My <span className="text-primary">Happy Clients</span>
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Ready to experience the same transformation? Let's build your AI solution together.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href="https://calendar.app.google/7WstUGCADkFWkKg57" target="_blank" rel="noopener noreferrer">
              Let's Build Your AI Solution
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
