interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle = ({ children, className = "" }: SubtitleProps) => {
  return (
    <p className={`font-body text-lg md:text-xl text-foreground opacity-90 ${className}`}>
      {children}
    </p>
  );
};

export default Subtitle;