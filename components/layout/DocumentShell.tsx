import { SiteFooter } from "@/components/layout/SiteFooter";

type DocumentShellProps = {
  children: React.ReactNode;
};

/** Inner marketing pages: navbar lives in root layout; spacer prevents overlap. */
export function DocumentShell({ children }: DocumentShellProps) {
  return (
    <div className="flex min-h-svh flex-col bg-[var(--page-canvas)] font-sans text-[var(--foreground)]">
      {/* Spacer so fixed navbar doesn't overlap content */}
      <div className="h-14 shrink-0 sm:h-[3.75rem] md:h-16" aria-hidden />
      {children}
      <SiteFooter />
    </div>
  );
}
