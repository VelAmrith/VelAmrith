import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'neutral' | 'primary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  id,
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    neutral: 'bg-neutral-50',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-br from-primary to-primary-dark text-white',
  };
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
  };
  
  return (
    <section 
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section; 