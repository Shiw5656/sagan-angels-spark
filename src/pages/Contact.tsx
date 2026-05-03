import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => (
  <Layout>
    <PageHero title="Get in Touch" subtitle="We'd love to hear from you. Reach out anytime." />

    <section className="container py-16 grid lg:grid-cols-2 gap-10">
      <div className="space-y-6">
        <SectionHeading center={false} eyebrow="Contact" title="Visit or Call Us" />
        {[
          { icon: MapPin, title: "Address", lines: ["Sagan Aangels School", "Neknamepur, Bihar, India"] },
          { icon: Phone, title: "Phone", lines: ["+91 98765 43210"] },
          { icon: Mail, title: "Email", lines: ["info@saganangels.edu.in"] },
          { icon: Clock, title: "School Hours", lines: ["Mon – Sat : 8:00 AM – 2:00 PM"] },
        ].map((c) => (
          <div key={c.title} className="flex gap-4 p-5 bg-card rounded-2xl shadow-soft border border-border hover-lift">
            <div className="h-12 w-12 rounded-xl gradient-primary text-white grid place-items-center shrink-0">
              <c.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading font-semibold">{c.title}</h3>
              {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl overflow-hidden shadow-card border border-border min-h-[400px]">
        <iframe
          title="School location map"
          src="https://www.google.com/maps?q=Neknamepur+Bihar+India&output=embed"
          width="100%" height="100%" style={{ border: 0, minHeight: 400 }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>

    <section id="enquiry" className="bg-muted/40 py-20 scroll-mt-24">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="Enquiry Form" title="Student / Parent Query"
          subtitle="Fill out the form and our team will get back to you within 24 hours." />
        <EnquiryForm />
      </div>
    </section>
  </Layout>
);

export default Contact;
