"use client";

import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: typeof errors = {};

    if (formData.name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = "Please enter a valid email address.";
    if (formData.message.trim().length < 12) nextErrors.message = "Please add a little more detail.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something clear, fast, and useful."
          description="Send a note if you want to discuss internships, collaborations, freelance work, or an interesting product idea."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-sm sm:p-8">
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="text-base leading-8 text-foreground">
                I usually respond best to project ideas that have a concrete goal, a timeline, and a clear outcome. If you have that, send the details here.
              </p>

              <a className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 p-4 transition hover:bg-accent hover:text-accent-foreground" href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4 text-primary" />
                <span>{siteConfig.email}</span>
              </a>

              <a className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 p-4 transition hover:bg-accent hover:text-accent-foreground" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
                <Phone className="h-4 w-4 text-primary" />
                <span>{siteConfig.phone}</span>
              </a>

              <div className="flex flex-wrap gap-3 pt-2">
                {siteConfig.socialLinks.map((link) => {
                  const Icon = link.label === "GitHub" ? Github : link.label === "LinkedIn" ? Linkedin : Mail;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-foreground">Name</span>
                <input
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
                  placeholder="Your name"
                />
                {errors.name ? <span className="text-sm text-red-500">{errors.name}</span> : null}
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-foreground">Email</span>
                <input
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  type="email"
                  className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
                  placeholder="you@example.com"
                />
                {errors.email ? <span className="text-sm text-red-500">{errors.email}</span> : null}
              </label>
            </div>

            <label className="mt-4 grid gap-2">
              <span className="text-sm font-medium text-foreground">Message</span>
              <textarea
                value={formData.message}
                onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                rows={6}
                className="rounded-3xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
                placeholder="Tell me about the project, timeline, and goals."
              />
              {errors.message ? <span className="text-sm text-red-500">{errors.message}</span> : null}
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Send message
                <ArrowUpRight className="h-4 w-4" />
              </button>
              {submitted ? (
                <span className="inline-flex items-center gap-2 text-sm text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                  Your email app should open now.
                </span>
              ) : (
                <span className="text-sm text-muted-foreground">This form opens your email client with a prefilled draft.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
