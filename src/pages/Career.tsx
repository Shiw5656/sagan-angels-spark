import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";

const Career = () => (
  <Layout>
    <PageHero
      title="Careers at Sagan Aangels"
      subtitle="Join our passionate team and help shape the future of young minds."
    />

    <section className="container py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Current Openings */}
        <div className="lg:col-span-1 space-y-6">
          <SectionHeading center={false} eyebrow="Open Positions" title="We Are Hiring" />

          <div className="space-y-4">
            {[
              { title: "Primary Teacher (Math / Science)", type: "Full Time" },
              { title: "English Teacher (Class 3–5)", type: "Full Time" },
              { title: "Art & Craft Instructor", type: "Part Time" },
              { title: "Office Assistant", type: "Full Time" },
            ].map((job) => (
              <div
                key={job.title}
                className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-soft border border-border hover-lift"
              >
                <div className="h-10 w-10 rounded-xl gradient-primary text-white grid place-items-center shrink-0">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm leading-snug">{job.title}</h3>
                  <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-muted/60 rounded-2xl border border-border space-y-3">
            <h4 className="font-heading font-semibold text-sm">Have a question?</h4>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span>info@saganangels.edu.in</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>Neknamepur, Bihar, India</span>
            </div>
          </div>
        </div>

        {/* Google Form Embed */}
        <div className="lg:col-span-2">
          <SectionHeading
            center={false}
            eyebrow="Apply Now"
            title="Application Form"
            subtitle="Fill out the form below and our team will get back to you."
          />
          <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card">
            {/* TODO: Replace the src below with your Google Form embed URL.
                 1. Open your Google Form → click "Send" → choose the embed (</>) icon.
                 2. Copy the iframe src URL (looks like https://docs.google.com/forms/d/e/.../viewform?embedded=true)
                 3. Paste it in the src attribute below. */
            }
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScP_j1jp4iW6wK2dOJ9z9z9z9z9z9z9z9z9z9z9z9z9z9z9/viewform?embedded=true"
              title="Job Application Form"
              width="100%"
              height="800"
              style={{ border: 0, minHeight: 800 }}
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            If the form does not load, please email your CV directly to{" "}
            <a href="mailto:info@saganangels.edu.in" className="text-primary underline">
              info@saganangels.edu.in
            </a>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Career;
