interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg";
}

const BodyText = ({ children, className = "", size = "base" }: BodyTextProps) => {
  const sizeClasses = {
    sm: "text-sm md:text-base",
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl"
  };

  return (
    <p className={`font-body text-foreground leading-relaxed ${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  );
};

export default BodyText;