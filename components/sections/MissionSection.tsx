export function MissionContent() {
  return (
    <div className="mission-scroll-panel mx-auto w-full max-w-[min(100%,40rem)] lg:max-w-[44rem]">
      <h2
        id="mission-heading"
        className="font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl"
      >
        Mission.
      </h2>

      <blockquote className="mt-10 border-l-2 border-[#3C4DFB]/50 pl-6 font-serif text-2xl font-medium leading-snug text-stone-800 sm:mt-12 sm:pl-8 sm:text-3xl sm:leading-snug">
        &ldquo;To eliminate the latency between human ambition and technical
        execution.&rdquo;
      </blockquote>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-stone-600 sm:mt-12 sm:text-lg">
        <p>
          Global innovation is held hostage by a broken hiring market. Abet is
          built to break that. We deploy the world&apos;s best frontier
          engineers, anchored in the Build-First Economy of Addis Ababa, directly
          into the stacks of companies that cannot afford to wait.
        </p>
        <p className="font-medium text-stone-800">
          Your roadmap cannot wait 90 days. Your Pod is 21 days out.
        </p>
      </div>
    </div>
  );
}

export function MissionSection() {
  return (
    <section
      className="relative z-10 flex min-h-svh flex-col justify-center bg-[var(--page-canvas)] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="mission-heading"
    >
      <MissionContent />
    </section>
  );
}
