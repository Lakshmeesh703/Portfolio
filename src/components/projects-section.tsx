"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { projectFilters, projects, type ProjectCategory } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured builds with clear product thinking."
          description="Filter the portfolio by area of focus to inspect the underlying scope, stack, and outcomes behind each project."
        />

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-[1.5rem] border border-border/70 bg-card/70 p-3 shadow-sm">
          <div className="flex items-center gap-2 px-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Filter by
          </div>
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="mt-8 grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="group flex h-full flex-col rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.period}</span>
                </div>

                <p className="mt-5 text-base leading-7 text-muted-foreground">{project.description}</p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:opacity-80"
                  >
                    View on GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Portfolio highlight</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
