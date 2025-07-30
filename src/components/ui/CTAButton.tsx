import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

const CTAButton = ({ to, children, className = "", variant = "primary" }: CTAButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-full font-body font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group";
  
  const variantClasses = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-border"
  };

  return (
    <Link 
      to={to} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
};

export default CTAButton;