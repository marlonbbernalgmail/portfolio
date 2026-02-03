import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all cursor-pointer';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:shadow-xl hover:translate-y-[-1px]',
    secondary: 'bg-white text-primary border border-primary/10 shadow-sm hover:shadow-md',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-8 h-14 text-base tracking-tight',
    lg: 'px-8 h-14 text-base tracking-tight min-w-[180px]',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyles} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

