/** Site-wide links and contact config — single source for CTAs and doc navigation. */

export const CONTACT_EMAIL = "hello@abet.io";
export const CONTACT_HREF = "/#contact";

export const docPages = [
  {
    href: "/the-paas-model",
    title: "The PaaS Model",
    shortTitle: "PaaS model",
  },
  {
    href: "/sovereign-execution",
    title: "Sovereign Execution",
    shortTitle: "Sovereign execution",
  },
  {
    href: "/security-ip",
    title: "Security & IP",
    shortTitle: "Security & IP",
  },
] as const;

export type DocPageHref = (typeof docPages)[number]["href"];

export function getDocPageNeighbors(pathname: DocPageHref) {
  const index = docPages.findIndex((page) => page.href === pathname);
  return {
    prev: index > 0 ? docPages[index - 1] : null,
    next: index >= 0 && index < docPages.length - 1 ? docPages[index + 1] : null,
  };
}
