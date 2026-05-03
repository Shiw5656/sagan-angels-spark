const SectionHeading = ({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) => (
  <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12 animate-fade-in`}>
    {eyebrow && (
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-3">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeading;
