import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";

const testimonialSections = [
  {
    title: "Email Marketing Success",
    testimonials: [
      {
        quote: "David transformed our email marketing completely. Our open rates jumped from 15% to 45%, and our automated sequences now generate leads while we sleep. The ROI was incredible—we saw results within the first month.",
        name: "Sarah Johnson",
        role: "CEO, TechFlow Solutions",
        avatar: "SJ",
      },
      {
        quote: "The email automation David built handles our entire lead nurturing process. Our welcome sequence alone converts 30% of new subscribers into paying customers. Best investment we've made.",
        name: "Michael Chen",
        role: "Marketing Director, CloudServe Inc",
        avatar: "MC",
      },
    ],
  },
  {
    title: "CRM Automation Results",
    testimonials: [
      {
        quote: "Our CRM was a mess before David stepped in. He set up GoHighLevel automation that now handles lead scoring, follow-ups, and pipeline management automatically. Our sales team closes 3x more deals.",
        name: "Amanda Williams",
        role: "Sales VP, GrowthMax",
        avatar: "AW",
      },
      {
        quote: "David's HubSpot automation connects our marketing and sales seamlessly. We've doubled our conversion rate with the same team size. His CRM virtual assistant service keeps everything running smoothly.",
        name: "Robert Taylor",
        role: "Founder, ScaleUp Co",
        avatar: "RT",
      },
    ],
  },
  {
    title: "Lead Generation & Funnels",
    testimonials: [
      {
        quote: "David built our entire lead generation funnel from scratch. Landing pages, email sequences, CRM integration—everything works together perfectly. We went from 50 leads a month to over 300.",
        name: "Jennifer Martinez",
        role: "Agency Owner, GrowthPro Marketing",
        avatar: "JM",
      },
      {
        quote: "The Klaviyo automation David set up for our ecommerce store is a game-changer. Abandoned cart recovery, post-purchase flows, and win-back campaigns all run on autopilot. Revenue is up 40%.",
        name: "David Kim",
        role: "COO, ShopElite",
        avatar: "DK",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Hear from businesses that have transformed their marketing with email automation and CRM systems.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Sections */}
      {testimonialSections.map((section, sectionIndex) => (
        <section key={section.title} className={`section-padding ${sectionIndex % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}>
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">{section.title}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.testimonials.map((testimonial) => (
                <div key={testimonial.name} className="p-8 rounded-2xl bg-background border border-border hover-lift">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                        {testimonial.avatar}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      <p className="text-foreground leading-relaxed mb-6 text-lg">"{testimonial.quote}"</p>
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

      {/* CTA */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-background mb-6">
            Join My <span className="text-primary">Happy Clients</span>
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
            Ready to experience the same marketing transformation? Let's build your email and CRM automation system together.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href="https://calendar.google.com/appointments/schedules/AcZssZ0RpEq1seLDQndjXeGvlgq1zCHPylkBtTGm8M1LgZiVY1p3QjJetzUVT1BhVE8l89eUs9SOdP_L" target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;