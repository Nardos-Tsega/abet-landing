import { SiteHeader } from "@/components/layout/SiteHeader";

type DocumentShellProps = {
  children: React.ReactNode;
};

/** Inner marketing pages: same chrome as home, CTA targets protocol on `/`. */
export function DocumentShell({ children }: DocumentShellProps) {
  return (
    <div className="flex min-h-svh flex-col bg-[var(--page-canvas)] font-sans text-[var(--foreground)]">
      <SiteHeader />
      {children}
    </div>
  );
}
