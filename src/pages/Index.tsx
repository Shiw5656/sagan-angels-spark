import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, GraduationCap, Users, Calendar, PlayCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import { teachers, videos, events } from "@/data/site";
import hero from "@/assets/hero-students.jpg";

const Home = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative container grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="space-y-7 animate-slide-in-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" /> Established 2016 • Neknamepur, Bihar
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
              <span className="text-gradient">Sagan Aangels</span><br />
              <span className="text-foreground">School</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium">Shaping Future Since 2016</p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              A nurturing space where young minds blossom through quality education, creativity, and values that last a lifetime.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/about">Explore More <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact#enquiry">Enquire Now</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 gradient-primary rounded-3xl blur-2xl opacity-30" />
            <img src={hero} alt="Sagan Aangels School students smiling in classroom" width={1280} height={960}
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-card shadow-card rounded-2xl px-5 py-4 flex items-center gap-3 animate-float">
              <div className="h-12 w-12 rounded-xl gradient-accent grid place-items-center text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="font-heading font-bold">Top-Rated</div>
                <div className="text-xs text-muted-foreground">Local School</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container -mt-6 md:-mt-10 relative z-10">
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 bg-card rounded-3xl shadow-card border border-border p-6 md:p-10">
          {[
            { num: 350, label: "Students", icon: Users },
            { num: 14, label: "Teachers", icon: GraduationCap },
            { num: 8, label: "Years of Excellence", icon: Sparkles },
          ].map((s) => (
            <div key={s.label} className="text-center group">
              <div className="mx-auto h-14 w-14 rounded-2xl gradient-primary text-white grid place-items-center mb-3 transition-bounce group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-gradient">
                <Counter end={s.num} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
              <img src={hero} alt="Students learning" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700" />
            </div>
          </div>
          <div>
            <SectionHeading center={false} eyebrow="About Us" title="A Place Where Children Love to Learn"
              subtitle="Since 2016, Sagan Aangels School has been a beacon of quality education in Neknamepur, Bihar. We blend modern teaching methods with strong moral values to nurture confident, compassionate learners ready for tomorrow." />
            <Button asChild variant="hero">
              <Link to="/about">Read More <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TEACHERS PREVIEW */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <SectionHeading eyebrow="Our Educators" title="Meet Our Dedicated Teachers"
            subtitle="Passionate professionals committed to inspiring every child." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.slice(0, 4).map((t) => (
              <div key={t.name} className="bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border">
                <div className="aspect-square overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-smooth duration-500" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading font-semibold">{t.name}</h3>
                  <p className="text-sm text-primary">{t.subject}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="soft"><Link to="/teachers">View All Teachers <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* VIDEOS PREVIEW */}
      <section className="container py-20">
        <SectionHeading eyebrow="Training Videos" title="Learn at Your Own Pace"
          subtitle="Curated YouTube lessons for every class." />
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {videos.slice(0, 6).map((v) => (
            <a key={v.id} href={v.yt} target="_blank" rel="noopener noreferrer"
              className="group min-w-[280px] sm:min-w-[320px] snap-start bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border">
              <div className="relative aspect-video overflow-hidden">
                <img src={v.thumb} alt={v.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500" />
                <div className="absolute inset-0 bg-foreground/30 grid place-items-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <PlayCircle className="h-14 w-14 text-white" />
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">{v.cls}</span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold line-clamp-2">{v.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="soft"><Link to="/videos">Browse All Videos <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <SectionHeading eyebrow="Events & Gallery" title="Moments from Our School"
            subtitle="Celebrating learning, creativity, and community." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {events.slice(0, 8).map((e, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl shadow-soft group ${i % 5 === 0 ? "row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <span className="text-white font-semibold">{e.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="soft"><Link to="/events"><Calendar className="h-4 w-4" /> View Full Gallery</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
