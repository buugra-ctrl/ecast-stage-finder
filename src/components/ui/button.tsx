import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[44px] text-xs font-light ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#001f3d]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-[#002b54] text-[#002b54] bg-transparent hover:border-[#eef1f4] hover:text-[#002b54] active:border-[#eef1f4] active:text-[#002b54]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#002b54] border-b border-[#002b54] hover:bg-transparent",
        contrastLight: "bg-[#002b54] text-white hover:bg-[#00579e] active:bg-[#004884] disabled:bg-[rgba(0,43,84,0.1)]",
        contrastDark: "bg-[#FCFEFF] text-[#002b54] border border-[#002b54] hover:bg-[#EEF1F4] hover:border-[rgba(114,130,143,0.2)] active:bg-[rgba(0,43,84,0.1)] active:border-[rgba(0,43,84,0.1)] disabled:bg-[#FCFEFF] disabled:border-[rgba(0,43,84,0.1)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[44px] px-3",
        lg: "h-10 px-6 py-6",
        xl: "h-14 px-8 py-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
