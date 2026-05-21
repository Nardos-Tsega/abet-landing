"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  '> abet provision --env "Frontier AI"',
  "> unit: [1 Lead Architect + 2 Senior Architects]",
  "> status: [DEPLOYING... 21-DAY BOOT SEQUENCE INITIATED]",
] as const;

const TYPE_MS = 28;
const LINE_PAUSE_MS = 380;
const LOOP_GAP_MS = 1400;

const TITLEBAR_H = 52;
const BODY_H = 200;

/**
 * Characters used for the scramble pool on the DEPLOYING status line.
 * Skewing toward uppercase + symbols keeps the "terminal output" feel.
 */
const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*[]{}/<>?_-=+|";

/**
 * Returns the correctly typed portion of `line` up to `charIdx`,
 * then appends a scrambled lookahead (2-4 chars ahead of the cursor)
 * so the line looks like it's resolving from noise.
 * Only applied to the last (status) line.
 */
function buildScrambleLine(
  line: string,
  charIdx: number,
  tick: number
): string {
  const settled = line.slice(0, charIdx);
  // 2-char noise window ahead of cursor
  const lookaheadCount = Math.min(3, line.length - charIdx);
  let noise = "";
  for (let i = 0; i < lookaheadCount; i++) {
    noise += SCRAMBLE_CHARS[(tick * (i + 7) + i * 13) % SCRAMBLE_CHARS.length];
  }
  return settled + noise;
}

export function ProvisionTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  // Tick increments ~every 40 ms while on the last line to cycle scramble chars
  const [scrambleTick, setScrambleTick] = useState(0);
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Start / stop scramble ticker when on the DEPLOYING line
  useEffect(() => {
    const isStatusLine = lineIdx === 2 && charIdx < LINES[2].length;
    if (isStatusLine) {
      if (!scrambleRef.current) {
        scrambleRef.current = setInterval(
          () => setScrambleTick((t) => t + 1),
          38
        );
      }
    } else {
      if (scrambleRef.current) {
        clearInterval(scrambleRef.current);
        scrambleRef.current = null;
      }
    }
    return () => {
      if (scrambleRef.current) {
        clearInterval(scrambleRef.current);
        scrambleRef.current = null;
      }
    };
  }, [lineIdx, charIdx]);

  // Typewriter driver
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

  const done = lineIdx >= LINES.length;
  const activeLine = done ? LINES.length - 1 : lineIdx;

  const visible = LINES.map((line, i) => {
    if (i < lineIdx) return line;
    if (i === lineIdx) {
      // Apply scramble lookahead only on the DEPLOYING status line
      return i === 2
        ? buildScrambleLine(line, charIdx, scrambleTick)
        : line.slice(0, charIdx);
    }
    return "";
  });

  return (
    <div
      className="box-border mx-auto w-full max-w-[24rem] shrink-0 grow-0 overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c]/95 shadow-2xl shadow-black/50 ring-1 ring-white/5 backdrop-blur-sm sm:rounded-[1.25rem]"
      style={{ height: TITLEBAR_H + BODY_H }}
    >
      <div
        className="flex min-w-0 shrink-0 items-center gap-2 border-b border-white/10 px-3 sm:px-5"
        style={{ height: TITLEBAR_H }}
      >
        <span className="h-3 w-3 rounded-full bg-red-500/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
        <span className="min-w-0 truncate pl-1 font-mono text-[10px] text-stone-500 sm:pl-0 sm:text-xs">
          abet-provision — zsh
        </span>
      </div>
      <div
        className="box-border shrink-0 space-y-3 overflow-y-auto px-4 py-4 font-mono text-[11px] leading-relaxed sm:space-y-3.5 sm:px-5 sm:py-4 sm:text-xs sm:leading-relaxed"
        style={{ height: BODY_H }}
      >
        {visible.map((text, i) => {
          const isStatusLine = i === 2;
          return (
            <p key={i} className={`break-words ${isStatusLine ? "text-amber-300/90" : "text-emerald-400/95"}`}>
              {text}
              {i === activeLine && !done && (
                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-400/80 align-middle" />
              )}
              {i === LINES.length - 1 && done && (
                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-400/60 align-middle" />
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}
