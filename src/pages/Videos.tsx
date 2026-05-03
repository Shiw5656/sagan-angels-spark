import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { videos, classes } from "@/data/site";
import { PlayCircle } from "lucide-react";

const Videos = () => {
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => filter === "All" ? videos : videos.filter((v) => v.cls === filter), [filter]);

  return (
    <Layout>
      <PageHero title="Training Videos" subtitle="Curated YouTube lessons organised by class." />
      <section className="container py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {classes.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth border ${
                filter === c
                  ? "gradient-primary text-primary-foreground border-transparent shadow-card"
                  : "bg-card border-border text-foreground hover:border-primary hover:text-primary"
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {list.map((v, i) => (
            <a key={v.id} href={v.yt} target="_blank" rel="noopener noreferrer"
              style={{ animationDelay: `${i * 50}ms` }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover-lift animate-fade-in-up">
              <div className="relative aspect-video overflow-hidden">
                <img src={v.thumb} alt={v.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500" />
                <div className="absolute inset-0 bg-foreground/30 grid place-items-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">{v.cls}</span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold group-hover:text-primary transition-smooth">{v.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">Tap to watch on YouTube</p>
              </div>
            </a>
          ))}
        </div>
        {list.length === 0 && <p className="text-center text-muted-foreground py-10">No videos for this class yet.</p>}
      </section>
    </Layout>
  );
};

export default Videos;
