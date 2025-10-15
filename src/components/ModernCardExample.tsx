import { ModernCard } from "@/components/ui/modern-card"
import { Layers } from "lucide-react"

export function ModernCardExample() {
  return (
    <div className="flex flex-wrap gap-4 p-8">
      {/* Example with Next.js icon and Expert badge */}
      <ModernCard
        icon={<Layers className="w-5 h-5" />}
        title="Next.js"
        badge={{ text: "Expert", variant: "success" }}
        onClick={() => console.log("Next.js card clicked")}
      />
      
      {/* Example with different badge variant */}
      <ModernCard
        icon={<Layers className="w-5 h-5" />}
        title="React"
        badge={{ text: "Advanced", variant: "default" }}
        onClick={() => console.log("React card clicked")}
      />
      
      {/* Example without badge */}
      <ModernCard
        icon={<Layers className="w-5 h-5" />}
        title="TypeScript"
        onClick={() => console.log("TypeScript card clicked")}
      />
    </div>
  )
}
