import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { PlayCircle } from "lucide-react";
import { videos, classes } from "@/data/site";
import { cn } from "@/lib/utils";

const Videos = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? videos : videos.filter((v) => v.cls === filter);

  return (
    <Layout>
      <PageHero title="Training Videos" subtitle="Curated lessons organised by class." />
      <section className="container py-16">
        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {classes.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-smooth",
                filter === c
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Videos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => (
            <a
              key={v.id}
              href={v.yt}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={v.thumb}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-foreground/30 grid place-items-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <PlayCircle className="h-14 w-14 text-white" />
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  {v.cls}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold line-clamp-2">{v.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">No videos for {filter} yet.</p>
        )}
      </section>
    </Layout>
  );
};

export default Videos;
