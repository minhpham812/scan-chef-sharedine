import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#8a7d52] text-white",
        secondary: "border-transparent bg-[#f5f3ee] text-[#2c2a24]",
        destructive: "border-transparent bg-[#fee2e2] text-[#dc2626]",
        outline: "border border-border text-[#2c2a24]",
        success: "border-transparent bg-[#e3f2fd] text-[#1565c0]",
        warning: "border-transparent bg-[#fff3e0] text-[#e65100]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
