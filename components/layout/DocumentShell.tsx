import { SiteHeader } from "@/components/layout/SiteHeader";

type DocumentShellProps = {
  children: React.ReactNode;
};

/** Inner marketing pages: same chrome as home, CTA targets protocol on `/`. */
export function DocumentShell({ children }: DocumentShellProps) {
  return (
    <div className="flex min-h-svh flex-col bg-[var(--page-canvas)] font-sans text-[var(--foreground)]">
      <SiteHeader />
      {/* Spacer so fixed navbar doesn't overlap content */}
      <div className="h-14 shrink-0 sm:h-[3.75rem] md:h-16" aria-hidden />
      {children}
    </div>
  );
}
