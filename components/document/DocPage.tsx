import { DocumentShell } from "@/components/layout/DocumentShell";
import { DocPageNav } from "@/components/document/DocPageNav";
import type { DocPageHref } from "@/lib/site-config";

type DocPageProps = {
  title: string;
  description?: string;
  current?: DocPageHref;
  children: React.ReactNode;
};

export function DocPage({ title, description, current, children }: DocPageProps) {
  return (
    <DocumentShell>
      <main id="main">
        <article className="mx-auto w-full max-w-[40rem] px-5 py-14 sm:px-8 sm:py-20 lg:max-w-[42rem] lg:py-24">
        <header className="border-b border-[var(--border-subtle)] pb-10">
          <h1 className="text-[clamp(1.75rem,4vw+0.5rem,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-stone-900">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-stone-600">{description}</p>
          ) : null}
        </header>
        <div className="doc-prose mt-14 space-y-14 text-base leading-relaxed text-stone-700 sm:text-[1.05rem] sm:leading-relaxed [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-stone-900 [&_h3]:mt-8 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:tracking-[0.14em] [&_h3]:text-stone-500 [&_p+p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
          {current ? <DocPageNav current={current} /> : null}
        </div>
        </article>
      </main>
    </DocumentShell>
  );
}
