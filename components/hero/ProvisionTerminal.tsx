"use client";

import { useEffect, useState } from "react";

const LINES = [
  '> abet provision --env "Frontier AI"',
  "> unit: [1 Lead Architect + 2 Senior Architects]",
  "> status: [DEPLOYING... 21-DAY BOOT SEQUENCE INITIATED]",
] as const;

const TYPE_MS = 28;
const LINE_PAUSE_MS = 380;
/** Pause with full output visible before the sequence restarts */
const LOOP_GAP_MS = 1400;

/** Fixed layout: 24rem × 252px total — does not grow/shrink with viewport. */
const TERMINAL_W = "24rem";
const TERMINAL_W_MAX = "24rem";
const TITLEBAR_H = 52;
const BODY_H = 200;

export function ProvisionTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      const t = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
      }, LOOP_GAP_MS);
      return () => clearTimeout(t);
    }

    const line = LINES[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const visible = LINES.map((line, i) => {
    if (i < lineIdx) return line;
    if (i === lineIdx) return line.slice(0, charIdx);
    return "";
  });

  const done = lineIdx >= LINES.length;
  const activeLine = done ? LINES.length - 1 : lineIdx;

  return (
    <div
      className="box-border shrink-0 grow-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]/95 shadow-2xl shadow-black/50 ring-1 ring-white/5 backdrop-blur-sm sm:rounded-[1.25rem]"
      style={{
        width: TERMINAL_W,
        maxWidth: `min(100%, ${TERMINAL_W_MAX})`,
        height: TITLEBAR_H + BODY_H,
      }}
    >
      <div
        className="flex shrink-0 items-center gap-2 border-b border-white/10 px-4 sm:px-5"
        style={{ height: TITLEBAR_H }}
      >
        <span className="h-3 w-3 rounded-full bg-red-500/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
        <span className="ml-2 font-mono text-[11px] text-stone-500 sm:text-xs">
          abet-provision — zsh
        </span>
      </div>
      <div
        className="box-border shrink-0 space-y-3 overflow-y-auto px-4 py-4 font-mono text-[11px] leading-relaxed text-emerald-400/95 sm:space-y-3.5 sm:px-5 sm:py-4 sm:text-xs sm:leading-relaxed"
        style={{ height: BODY_H }}
      >
        {visible.map((text, i) => (
          <p key={i} className="break-words">
            {text}
            {i === activeLine && !done && (
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-400/80 align-middle" />
            )}
            {i === LINES.length - 1 && done && (
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-400/60 align-middle" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
