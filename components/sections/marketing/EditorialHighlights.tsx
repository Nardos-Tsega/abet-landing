import Image from "next/image";
import Link from "next/link";
import {
  MarketingSection,
  SectionEyebrow,
  SectionTitle,
} from "@/components/layout/MarketingSection";
import { editorialHighlights } from "@/lib/home-marketing";

/** Scale “From the Lab” analogue — depth cards with photography. */
export function EditorialHighlights() {
  return (
    <MarketingSection aria-labelledby="editorial-heading">
      <SectionEyebrow>From the model</SectionEyebrow>
      <SectionTitle id="editorial-heading" className="max-w-[24ch] text-3xl sm:text-4xl">
        The latest on how Abet provisions Pods.
      </SectionTitle>

      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        {editorialHighlights.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-white/80 shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-stone-300/80 hover:shadow-[0_20px_50px_-28px_rgba(0,6,38,0.14)]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-800">
                {item.kicker}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-stone-950 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{item.description}</p>
              <span className="mt-5 text-sm font-semibold text-stone-900 after:ml-1 after:content-['→'] after:text-stone-400 group-hover:after:translate-x-0.5">
                Read more
              </span>
            </div>
          </Link>
        ))}
      </div>
    </MarketingSection>
  );
}
