import Link from "next/link";
import { getDocPageNeighbors, type DocPageHref } from "@/lib/site-config";

type DocPageNavProps = {
  current: DocPageHref;
};

export function DocPageNav({ current }: DocPageNavProps) {
  const { prev, next } = getDocPageNeighbors(current);

  if (!prev && !next) return null;

  return (
    <nav
      className="mt-16 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-10 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Continue reading"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group inline-flex flex-col text-sm text-stone-600 transition-colors hover:text-stone-900"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400 group-hover:text-stone-500">
            Previous
          </span>
          <span className="mt-1 font-semibold text-stone-900">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group inline-flex flex-col text-right text-sm text-stone-600 transition-colors hover:text-stone-900 sm:items-end"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400 group-hover:text-stone-500">
            Next
          </span>
          <span className="mt-1 font-semibold text-stone-900">
            {next.title} <span aria-hidden>→</span>
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
