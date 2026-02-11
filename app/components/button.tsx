"use client";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: keyof typeof buttonStyle;
};

const buttonStyle = {
  "moegi_1-fill": "bg-[#12523c] text-white",
  "moegi_2-fill": "bg-[#94ab29] text-white",
  "kuchinashi-fill": "bg-[#ffd068] text-black",
  "moegi_1-border": "border-1 border-[#12523c] text-[#12523c]",
  "moegi_2-border": "border-1 border-[#94ab29] text-[#94ab29]",
  "kuchinashi-border": "border-1 border-[#ffd068] text-[#ffd068]",
} as const;

export const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button
      className={`${buttonStyle[variant]} ${className} transition-opacity hover:opacity-60 px-4 py-2`}
      {...props}
    >
      {children}
    </button>
  );
};
