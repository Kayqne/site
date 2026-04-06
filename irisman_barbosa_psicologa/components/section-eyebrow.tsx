interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className = '' }: SectionEyebrowProps) {
  return (
    <p className={`flex items-center gap-4 text-[0.62rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-4 ${className}`}>
      <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
      {children}
    </p>
  );
}
