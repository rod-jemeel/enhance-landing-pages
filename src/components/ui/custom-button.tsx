import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "circle-arrow" | "outline" | "link" | "glass"
  size?: "sm" | "default" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    switch (variant) {
      case "circle-arrow":
        return (
          <button
            ref={ref}
            className={cn(
              "group inline-flex items-center gap-3 bg-black text-white rounded-full hover:bg-gray-900 transition-all",
              size === "sm" ? "h-10 pl-5 pr-2" : size === "lg" ? "h-14 pl-8 pr-3" : "h-12 pl-6 pr-2",
              className
            )}
            {...props}
          >
            <span className={cn(size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base")}>{children}</span>
            <span className={cn(
              "flex items-center justify-center bg-white text-black rounded-full group-hover:bg-gray-200 transition-all flex-shrink-0",
              size === "sm" ? "w-6 h-6 text-sm" : size === "lg" ? "w-10 h-10 text-lg" : "w-8 h-8"
            )}>
              →
            </span>
          </button>
        )
      
      case "outline":
        return (
          <button
            ref={ref}
            className={cn(
              "glass-button glass-button-secondary border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all",
              size === "sm" ? "h-10 px-6 text-sm" : size === "lg" ? "h-14 px-10 text-lg" : "h-12 px-8",
              className
            )}
            {...props}
          >
            {children}
          </button>
        )
      
      case "link":
        return (
          <button
            ref={ref}
            className={cn(
              "text-base font-medium text-gray-500 hover:text-gray-700 transition-colors",
              className
            )}
            {...props}
          >
            {children}
          </button>
        )
      
      case "glass":
        return (
          <button
            ref={ref}
            className={cn(
              "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-transparent hover:scale-105 duration-300 transition",
              size === "sm" ? "h-10 px-6 text-sm" : size === "lg" ? "h-14 px-10 text-lg" : "h-12 px-8",
              "text-gray-900",
              className
            )}
            {...props}
          >
            <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full 
                shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
            transition-all" />
            <div
              className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-full"
              style={{ backdropFilter: 'blur(4px)' }}
            />
            <span className="pointer-events-none z-10">{children}</span>
          </button>
        )
      
      default:
        return (
          <button
            ref={ref}
            className={cn(
              "glass-button glass-button-primary-visible",
              size === "sm" ? "h-10 px-6 text-sm" : size === "lg" ? "h-14 px-10 text-lg" : "h-12 px-8",
              className
            )}
            {...props}
          >
            {children}
          </button>
        )
    }
  }
)

Button.displayName = "Button"

export { Button }