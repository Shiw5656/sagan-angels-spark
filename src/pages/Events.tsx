import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { events } from "@/data/site";
import { X } from "lucide-react";

const Events = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Layout>
      <PageHero title="Events & Gallery" subtitle="A glimpse into life at Sagan Angels School." />
      <section className="container py-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {events.map((e, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="mb-4 break-inside-avoid w-full block group relative overflow-hidden rounded-2xl shadow-soft hover-lift">
              <img src={e.img} alt={e.title} loading="lazy" className="w-full h-auto object-cover group-hover:scale-110 transition-smooth duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                <span className="text-white font-heading font-semibold">{e.title}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[60] bg-foreground/90 backdrop-blur-sm grid place-items-center p-4 animate-fade-in">
          <button className="absolute top-5 right-5 h-10 w-10 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
          <img src={events[active].img} alt={events[active].title} className="max-h-[85vh] max-w-full rounded-2xl shadow-elegant animate-scale-in" />
          <p className="absolute bottom-6 inset-x-0 text-center text-white font-heading">{events[active].title}</p>
        </div>
      )}
    </Layout>
  );
};

export default Events;
