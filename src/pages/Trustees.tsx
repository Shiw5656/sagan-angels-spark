import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Quote } from "lucide-react";
import { trustees } from "@/data/site";

const Trustees = () => (
  <Layout>
    <PageHero title="Our Trustees" subtitle="Meet the visionaries guiding Sagan Angels School." />
    <section className="container py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {trustees.map((t) => (
          <article key={t.name} className="bg-card rounded-3xl shadow-card border border-border overflow-hidden hover-lift">
            <div className="grid sm:grid-cols-5">
              <div className="sm:col-span-2 aspect-square sm:aspect-auto overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-smooth duration-500" />
              </div>
              <div className="sm:col-span-3 p-6 flex flex-col justify-center">
                <Quote className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{t.msg}"</p>
                <h3 className="font-heading font-bold text-lg">{t.name}</h3>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Trustees;
