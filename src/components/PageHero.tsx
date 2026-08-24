import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-section-alt">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-accent sm:w-2"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
              {breadcrumbs.map((item, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <span aria-hidden>/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-body">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
