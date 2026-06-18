import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Collaborative, competitive, and delivery-driven work."
          description="A mix of hackathons, student projects, and focus-group participation that shows both technical breadth and execution under time pressure."
        />

        <div className="mt-12 grid gap-4">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <article key={experience.title} className="relative rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-sm sm:p-8">
                {index < experiences.length - 1 ? <span className="absolute left-10 top-full h-6 w-px bg-border/70" /> : null}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{experience.organization}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {experience.period}
                  </span>
                </div>
                <p className="mt-5 max-w-4xl text-base leading-7 text-muted-foreground">{experience.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {(experience.href || experience.demoVideo) ? (
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-border/60 pt-5">
                    {experience.href ? (
                      <a
                        href={experience.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:opacity-80"
                      >
                        View on GitHub
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                    {experience.demoVideo ? (
                      <a
                        href={experience.demoVideo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-500 transition hover:opacity-80"
                      >
                        Watch Demo Video
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
