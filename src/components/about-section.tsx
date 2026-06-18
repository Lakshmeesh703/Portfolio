import { SectionHeading } from "@/components/section-heading";
import { courseWork, education } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A practical builder with a strong eye for product quality and AI."
          description="I focus on full-stack systems, interactive data products, and machine learning workflows that are not just technically correct, but clear, usable, and maintainable. My major domain is AI/ML, so I like building products that blend intelligence with good UX."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-muted-foreground">
              My work spans frontend interfaces, backend services, databases, analytics, and model experimentation. I like projects where the user experience, data model, and deployment story all matter at the same time. I am especially interested in AI/ML, including model evaluation, intelligent automation, and AI-assisted product design. That mix shows up in the event system, e-commerce platform, campus map, and prediction model on this site.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Full-stack application design",
                "Model evaluation, feature engineering, and AI prototyping",
                "Responsive UX and motion polish",
                "Analytics dashboards, charting, and AI-driven insights",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
              <div className="mt-5 space-y-4">
                {education.map((item) => (
                  <div key={item.school} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-medium text-foreground">{item.school}</p>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
                    <p className="mt-1 text-sm text-primary">{item.grade}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.place}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">Relevant Coursework</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {courseWork.map((item) => (
                  <span key={item} className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
