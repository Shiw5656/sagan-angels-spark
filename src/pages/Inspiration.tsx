import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { inspirations } from "@/data/site";
import { Quote } from "lucide-react";

const Inspiration = () => (
  <Layout>
    <PageHero title="Our Inspiration" subtitle="People whose lives and ideals inspire our school community." />
    <section className="container py-20">
      {inspirations.length === 0 ? (
        <p className="text-center text-muted-foreground">Inspiring figures will be added soon.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {inspirations.map((p, i) => (
            <article key={p.name} style={{ animationDelay: `${i * 60}ms` }}
              className="bg-card rounded-3xl overflow-hidden shadow-card border border-border hover-lift animate-fade-in-up">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-smooth duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg">{p.name}</h3>
                {p.role && <p className="text-primary text-sm font-medium mb-3">{p.role}</p>}
                {p.msg && (
                  <>
                    <Quote className="h-5 w-5 text-accent mb-2" />
                    <p className="text-sm text-muted-foreground italic leading-relaxed">"{p.msg}"</p>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  </Layout>
);

export default Inspiration;
