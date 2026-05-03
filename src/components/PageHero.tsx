const PageHero = ({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 gradient-hero opacity-95" />
    {image && <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" />}
    <div className="relative container py-20 md:py-28 text-center text-primary-foreground">
      <h1 className="text-4xl md:text-5xl font-heading font-bold animate-fade-in-up">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90 animate-fade-in">{subtitle}</p>}
    </div>
    <div className="absolute -bottom-px inset-x-0 h-12 bg-gradient-to-b from-transparent to-background" />
  </section>
);

export default PageHero;
