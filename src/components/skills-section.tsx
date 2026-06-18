import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A broad technical toolkit, organized for real delivery."
          description="The stack spans frontend systems, backend APIs, databases, analytics, and machine learning work. Each area is represented in the way I actually use it: to ship useful applications."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article key={skill.title} className="group rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition group-hover:border-primary/30 group-hover:text-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
