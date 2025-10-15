import * as React from "react"
import { cn } from "@/lib/utils"

export interface ModernCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  badge?: {
    text: string
    variant?: "default" | "success" | "warning" | "error"
  }
  onClick?: () => void
}

const ModernCard = React.forwardRef<HTMLDivElement, ModernCardProps>(
  ({ className, icon, title, badge, onClick, ...props }, ref) => {
    const getBadgeStyles = (variant: string = "default") => {
      switch (variant) {
        case "success":
          return "bg-green-500 text-white"
        case "warning":
          return "bg-yellow-500 text-white"
        case "error":
          return "bg-red-500 text-white"
        default:
          return "bg-primary text-primary-foreground"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "group h-32 w-40 sm:w-44 md:w-48 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-border/50 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {icon && (
          <div className="mb-2 p-2 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary">
            {icon}
          </div>
        )}
        
        <h4 className="text-xs font-semibold mb-2 text-foreground/90 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
        
        {badge && (
          <div className={cn(
            "inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs px-2 py-0.5",
            getBadgeStyles(badge.variant)
          )}>
            {badge.text}
          </div>
        )}
      </div>
    )
  }
)

ModernCard.displayName = "ModernCard"

export { ModernCard }
