interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3";
}

const SectionTitle = ({ children, className = "", level = "h2" }: SectionTitleProps) => {
  const baseClasses = "font-heading font-bold text-accent leading-tight";
  
  const levelClasses = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl lg:text-4xl"
  };

  const Component = level;

  return (
    <Component className={`${baseClasses} ${levelClasses[level]} ${className}`}>
      {children}
    </Component>
  );
};

export default SectionTitle;