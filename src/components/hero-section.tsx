"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { highlights, siteConfig, stats } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { generateResumePdf } from "@/components/resume-download";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const [imageExpanded, setImageExpanded] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:32px_32px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[1.3fr_0.9fr] lg:px-8 lg:pb-20">
        <div className="flex flex-col justify-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.09 } } }} className="space-y-6">
            <motion.div variants={fadeUp} className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              Available for internships, freelance, and collaborative product work
            </motion.div>

            <motion.h1 variants={fadeUp} className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Designing fast, thoughtful digital products for the web, AI, and data.
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {siteConfig.summary} I build portfolio-ready interfaces, analytics-heavy systems, and machine learning demos that feel polished from first click to final deployment.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px] hover:opacity-95">
                Explore projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <button type="button" onClick={() => generateResumePdf()} className={cn("inline-flex items-center justify-center gap-2 rounded-full border border-border/70 px-6 py-3.5 text-sm font-semibold text-foreground transition", "bg-card/80 hover:bg-accent hover:text-accent-foreground")}>
                <Download className="h-4 w-4" />
                Download resume
              </button>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground">
                <Mail className="h-4 w-4" />
                Contact me
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur">
                  <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.aside initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-card to-cyan-500/10 blur-2xl" />
          <div className="rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Profile</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">Lakshmeesh Shet</h2>
                <p className="mt-2 text-sm text-muted-foreground">{siteConfig.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setImageExpanded(true)}
                className="relative h-16 w-16 overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary to-cyan-500 shadow-glow animate-float-slow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background sm:h-20 sm:w-20"
                aria-label="Open profile picture in a larger view"
              >
                {!imageFailed ? (
                  <Image
                    src={siteConfig.profileImage}
                    alt="Profile picture of Lakshmeesh Shet"
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority
                    onError={() => setImageFailed(true)}
                  />
                ) : null}
                {imageFailed ? (
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-primary-foreground">
                    LS
                  </div>
                ) : null}
              </button>
            </div>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-border/70 bg-background/70 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Currently focused on</p>
              <p className="mt-2 text-base leading-7 text-foreground">AI-assisted products, ML-focused prototypes, data-rich dashboards, and elegant portfolio systems that are fast on mobile and easy to maintain.</p>
            </div>
          </div>
        </motion.aside>
      </div>

      {imageExpanded ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Large profile picture"
          className="fixed inset-0 z-50 flex items-stretch justify-stretch bg-black/80 backdrop-blur-sm md:items-center md:justify-center md:px-4 md:py-8"
          onClick={() => setImageExpanded(false)}
        >
          <div
            className="relative flex h-full w-full flex-col overflow-hidden bg-card shadow-2xl md:h-auto md:max-w-md md:rounded-[2rem] md:border md:border-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setImageExpanded(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/90 px-3 py-1 text-sm font-medium text-foreground shadow-md"
            >
              Close
            </button>
            <div className="relative flex-1 bg-gradient-to-br from-primary/15 via-card to-cyan-500/10 md:aspect-square md:flex-none md:w-full">
              <Image
                src={siteConfig.profileImage}
                alt="Large profile picture of Lakshmeesh Shet"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
