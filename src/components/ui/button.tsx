import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-medium transition-all focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-[#8a7d52] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#8a7d52] text-white hover:bg-[#8a7d52]/90",
        destructive: "bg-[#dc2626] text-white hover:bg-[#dc2626]/90",
        outline:
          "border border-border bg-white text-[#2c2a24] hover:bg-[#f5f3ee]",
        secondary: "bg-[#f5f3ee] text-[#2c2a24] hover:bg-[#e8e5dc]/40",
        ghost: "text-[#9e9a8f] hover:bg-[#f5f3ee] hover:text-[#2c2a24]",
        link: "text-[#8a7d52] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-[13px]",
        lg: "h-11 px-6 text-[15px]",
        icon: "h-10 w-10",
        action: "w-full rounded-xl py-3.5 text-[15px] font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
