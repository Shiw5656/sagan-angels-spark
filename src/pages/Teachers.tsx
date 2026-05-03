import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { teachers } from "@/data/site";
import { Briefcase } from "lucide-react";

const Teachers = () => (
  <Layout>
    <PageHero title="Our Teachers" subtitle="Inspiring educators committed to every learner's growth." />
    <section className="container py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {teachers.map((t, i) => (
          <article key={t.name} style={{ animationDelay: `${i * 60}ms` }}
            className="bg-card rounded-3xl overflow-hidden shadow-soft border border-border hover-lift animate-fade-in-up">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-smooth duration-700" />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-lg">{t.name}</h3>
              <p className="text-primary text-sm font-medium">{t.subject}</p>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" /> {t.experience} experience
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Teachers;
