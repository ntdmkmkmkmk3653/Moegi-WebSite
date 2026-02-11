"use client";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: keyof typeof buttonStyle;
};

const buttonStyle = {
  "moegi_1-fill": "bg-[#12523c] text-white",
  "moegi_2-fill": "bg-[#94ab29] text-white",
  "kuchinashi-fill": "bg-[#ffd068] text-black",
} as const;

export const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button
      className={`${buttonStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
