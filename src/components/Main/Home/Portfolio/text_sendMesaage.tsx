import React from 'react';

interface GradientButtonProps {
  href?: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const GradientButton = ({
  href,
  children,
  icon: Icon,
  onClick,
  type = 'button',
  className = '',
}: GradientButtonProps) => {
  const baseStyles =
    'relative h-9 px-4 rounded-lg text-white bg-[#1e1e1f] cursor-pointer border-none z-[1] group inline-flex items-center justify-center gap-1.5 text-xs';

  const buttonContent = (
    <>
      {/* Default gradient border */}
      <span
        className="absolute inset-0 rounded-lg -z-10 transition-all opacity-100 group-hover:opacity-0"
        style={{
          content: '""',
          padding: '1px',
          background:
            'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          transition: '0.25s ease-in',
          zIndex: -1,
        }}
      />
      {/* Yellow gradient border on hover */}
      <span
        className="absolute inset-0 rounded-lg -z-10 transition-all opacity-0 group-hover:opacity-100"
        style={{
          content: '""',
          padding: '1px',
          background:
            'linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          transition: '0.25s ease-in',
          zIndex: -1,
        }}
      />
      {/* Inner background default */}
      <span
        className="absolute rounded-lg -z-10 transition-all"
        style={{
          content: '""',
          inset: '1px',
          background: '#1e1e1f',
          transition: '0.25s ease-in',
          zIndex: -1,
        }}
      />
      {/* Yellow tinted background on hover */}
      <span
        className="absolute rounded-lg -z-10 transition-all opacity-0 group-hover:opacity-100"
        style={{
          content: '""',
          inset: '1px',
          background:
            'linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)',
          transition: '0.25s ease-in',
          zIndex: -1,
        }}
      />
      {/* Button content */}
      <span className="flex items-center gap-1.5 relative z-10">
        {Icon && <Icon size={14} />}
        {children}
      </span>
    </>
  );

  const commonStyles = {
    boxShadow: '0 2px 5px #00000040',
    transition: '0.25s ease-in',
  };

  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
        style={commonStyles}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button otherwise
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      style={commonStyles}
    >
      {buttonContent}
    </button>
  );
};

// Large variant for forms (like your Send Message button)
export const GradientButtonLarge = ({
  children,
  icon: Icon,
  onClick,
  type = 'submit',
  className = '',
}: Omit<GradientButtonProps, 'href'>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative w-full h-12 md:w-auto px-5 rounded-xl text-white bg-[#1e1e1f] cursor-pointer border-none z-[1] group ${className}`}
      style={{
        boxShadow: '0 2px 5px #00000040',
        transition: '0.25s ease-in',
      }}
    >
      {/* Default gradient border */}
      <span
        className="absolute inset-0 rounded-xl -z-10 transition-all opacity-100 group-hover:opacity-0"
        style={{
          content: '""',
          padding: '1px',
          background:
            'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          transition: '0.25s ease-in',
          zIndex: -1,
        }}
      />
      {/* Yellow gradient border on hover */}
      <span
        className="absolute inset-0 rounded-xl -z-10 transition-all opacity-0 group-hover:opacity-100"
        style={{
          content: '""',
          padding: '1px',
          background:
            'linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          transition: '0.25s ease-in',
          zIndex: -1,
        }}
      />
      {/* Inner background default */}
      <span
        className="absolute rounded-xl -z-10 transition-all"
        style={{
          content: '""',
          inset: '1px',
          background: '#1e1e1f',
          transition: '0.25s ease-in',
          zIndex: -1,
        }}
      />
      {/* Yellow tinted background on hover */}
      <span
        className="absolute rounded-xl -z-10 transition-all opacity-0 group-hover:opacity-100"
        style={{
          content: '""',
          inset: '1px',
          background:
            'linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)',
          transition: '0.25s ease-in',
          zIndex: -1,
        }}
      />
      {/* Button text */}
      <span className="flex gap-2 justify-center items-center relative z-10">
        {Icon && <Icon />}
        {children}
      </span>
    </button>
  );
};
