import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Videos = () => {
  return (
    <Layout>
      <PageHero title="Training Videos" subtitle="Curated lessons organised by class." />
      <section className="container py-20">
        <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-3xl shadow-elegant p-10 md:p-14 animate-fade-in-up">
          <div className="mx-auto h-20 w-20 rounded-2xl gradient-primary grid place-items-center shadow-card mb-6 animate-float">
            <Clock className="h-10 w-10 text-primary-foreground" />
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Training Videos Coming Soon
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We are working hard to bring you a curated library of class-wise training videos
            from Class 1 to Class 5. Stay tuned — exciting lessons are on the way!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact#enquiry">Notify Me</Link>
            </Button>
            <Button asChild variant="soft" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
