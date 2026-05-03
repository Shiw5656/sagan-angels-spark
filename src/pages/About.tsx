import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BookOpen, Beaker, Trophy, Music, Bus, Wifi, Laptop, HeartHandshake, Target, Eye } from "lucide-react";
import about from "@/assets/about-banner.jpg";

const facilities = [
  { icon: BookOpen, title: "Modern Library" },
  { icon: Beaker, title: "Science Lab" },
  { icon: Laptop, title: "Computer Lab" },
  { icon: Trophy, title: "Sports Ground" },
  { icon: Music, title: "Music & Arts" },
  { icon: Bus, title: "Transportation" },
  { icon: Wifi, title: "Smart Classes" },
  { icon: HeartHandshake, title: "Counselling" },
];

const timeline = [
  { y: "2016", t: "School Founded", d: "Sagan Angels School opened its doors in Neknamepur, Bihar." },
  { y: "2018", t: "New Building", d: "Expanded campus with science and computer labs." },
  { y: "2020", t: "Smart Classes", d: "Introduced digital learning across all classes." },
  { y: "2023", t: "200+ Students", d: "Crossed the milestone of 200 happy learners." },
];

const About = () => (
  <Layout>
    <PageHero title="About Our School" subtitle="A journey of learning, growth and excellence since 2016." image={about} />

    <section className="container py-20 grid lg:grid-cols-2 gap-12 items-center">
      <img src={about} alt="School building" loading="lazy" className="rounded-3xl shadow-card w-full h-auto" />
      <div>
        <SectionHeading center={false} eyebrow="Our Story" title="Eight Years of Shaping Bright Futures"
          subtitle="Founded in 2016 in the heart of Neknamepur, Bihar, Sagan Angels School began with a simple mission: to make modern, value-based education accessible to every child in our community. Today we are a thriving community of curious learners, dedicated educators and supportive parents." />
        <p className="text-muted-foreground leading-relaxed">
          We believe a great school is more than buildings and books — it's a place where children feel safe, seen, and inspired to dream big. Every classroom, every activity and every conversation is designed with that belief in mind.
        </p>
      </div>
    </section>

    <section className="bg-muted/40 py-20">
      <div className="container grid md:grid-cols-2 gap-6">
        {[
          { icon: Target, title: "Our Mission", desc: "To deliver holistic, value-based education that empowers students to think critically, act responsibly and lead with empathy." },
          { icon: Eye, title: "Our Vision", desc: "To be a leading school in Bihar known for academic excellence, character building and innovative teaching." },
        ].map((c) => (
          <div key={c.title} className="bg-card p-8 rounded-2xl shadow-soft hover-lift border border-border">
            <div className="h-14 w-14 rounded-2xl gradient-primary text-white grid place-items-center mb-4">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-2">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-20">
      <SectionHeading eyebrow="Facilities" title="Everything Students Need to Thrive" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {facilities.map((f) => (
          <div key={f.title} className="bg-card rounded-2xl p-6 text-center border border-border hover-lift">
            <div className="mx-auto h-14 w-14 rounded-xl bg-primary/10 text-primary grid place-items-center mb-3">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-semibold text-sm">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-muted/40 py-20">
      <div className="container">
        <SectionHeading eyebrow="Our Journey" title="Milestones Since 2016" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 gradient-primary" />
          {timeline.map((m, i) => (
            <div key={m.y} className={`relative mb-10 md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="bg-card p-6 rounded-2xl shadow-soft border border-border hover-lift">
                  <div className="text-accent font-heading font-bold text-2xl">{m.y}</div>
                  <h3 className="font-heading font-semibold mt-1">{m.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{m.d}</p>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-5 w-5 rounded-full gradient-accent border-4 border-background" />
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
