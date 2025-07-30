interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

const PageTitle = ({ children, className = "" }: PageTitleProps) => {
  return (
    <h1 className={`font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-accent leading-tight ${className}`}>
      {children}
    </h1>
  );
};

export default PageTitle;