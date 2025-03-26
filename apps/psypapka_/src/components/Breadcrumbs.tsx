import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BreadcrumbsProps {
  items: { label: string; href: string }[]
  onNavigate: (href: string) => void
}

export default function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
            <Button
              variant="link"
              onClick={() => onNavigate(item.href)}
              className={`text-sm font-medium ${
                index === items.length - 1 ? "text-gray-700 hover:text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {item.label}
            </Button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

