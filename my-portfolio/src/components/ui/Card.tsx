import { cn } from "../../lib/utils.ts";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[#191919] border border-[#333] rounded-lg p-6 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
