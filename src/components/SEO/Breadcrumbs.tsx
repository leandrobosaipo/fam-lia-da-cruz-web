import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/site-config";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
            aria-label="Ir para página inicial"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Início</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            {index === items.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

