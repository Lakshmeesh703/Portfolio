import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/portfolio";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Representative feedback themes from collaborative work."
          description="These short quotes summarize the kind of feedback that comes up around the portfolio: clarity, polish, and a strong product mindset."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const Icon = testimonial.icon;
            return (
              <figure key={testimonial.author} className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-sm sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <blockquote className="mt-6 text-base leading-8 text-foreground">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-5">
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
