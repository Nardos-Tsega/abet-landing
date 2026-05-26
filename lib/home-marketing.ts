/** Homepage marketing copy — aligned with content document (no copy outside this). */

// ─────────────────────────────────────────────────────────────────────────────
// Scale-style narrative sections: Friction → Product → The Edge
// ─────────────────────────────────────────────────────────────────────────────
export const narrativeSections = [
  {
    key: "friction",
    tone: "light" as const,
    headline: "The 90-Day Latency Tax.",
    sublines: [
      "In frontier tech, velocity is your only moat.",
      "While you recruit, your roadmap dies in the waiting room.",
    ],
    body: "Traditional hiring creates a 90-day wall to find, vet, and onboard senior talent. Even if you survive the wait, you're buying a single point of failure. When one engineer leaves, their institutional memory walks out the door—and the 90-day clock restarts.",
    cta: { label: "See the PaaS model", href: "/the-paas-model" },
    stat: { value: "90+", unit: "days", label: "traditional time to first commit" },
  },
  {
    key: "product",
    tone: "dark" as const,
    headline: "We Don't Sell Hours. We Provision Capacity.",
    sublines: [
      "Traditional outsourcing sells loose freelancers and billable hours.",
      "Abet sells guaranteed velocity.",
    ],
    body: "A Sovereign Pod is a standardized engineering unit—1 Lead Architect + 2 Senior Architects—embedded directly into your Jira, Slack, and GitHub. Move the budget of a single local senior headcount into a fully sovereign, 3-person execution engine. Same cost. Zero compromise.",
    cta: { label: "See the PaaS model", href: "/the-paas-model" },
    stat: { value: "21", unit: "days", label: "to first commit" },
  },
  {
    key: "edge",
    tone: "light" as const,
    headline: "Sovereign Execution. Near-Zero Churn.",
    sublines: [
      "Africa's Build-First Economy.",
      "Pure builder DNA. Near-zero churn.",
    ],
    body: "Saturated offshore markets are bleeding from wage inflation and 12-month job hopping. Abet is anchored in Addis Ababa—where our architects have engineered national-scale systems for 10M+ concurrent users from the ground up. Abet guarantees a minimum 50% overlap with US working hours. UTC+3 also delivers 100% overlap with UK/EU cycles.",
    cta: { label: "Sovereign execution", href: "/sovereign-execution" },
    stat: { value: "50%", unit: "+", label: "guaranteed US hours overlap" },
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Active deployments — Section 6 (two instances exactly as in content doc)
// ─────────────────────────────────────────────────────────────────────────────
export const caseStudies = [
  {
    id: "roadmap-acceleration",
    kicker: "Roadmap Acceleration",
    title: "90 → 21 Days",
    outcome:
      "A high-growth tech company needed senior capacity without the 90-day delay. We provisioned a full Sovereign Pod within the 21-Day Protocol.",
    status: "Operational" as const,
    href: "/the-paas-model",
    imageSrc:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=75",
    imageAlt: "Team collaborating at a desk with laptops",
  },
  {
    id: "capacity-expansion",
    kicker: "Capacity Expansion",
    title: "+66% Provisioned Capacity",
    outcome:
      "Sprint output alone triggered an immediate expansion of the deployed Pod footprint.",
    status: "Scaling" as const,
    href: "/the-paas-model",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=75",
    imageAlt: "Engineers reviewing code together",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Three deployment environments — Section 7 (exactly three; no others)
// ─────────────────────────────────────────────────────────────────────────────
export const domainCorridorItems = [
  {
    key: "ai",
    title: "Frontier AI",
    body: "RAG pipelines, vector ETLs, LLM evaluation, training data infrastructure.",
    tint: "rgba(10, 20, 72, 0.45)",
    imageSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=75",
    imageAlt: "Abstract neural network visualization",
  },
  {
    key: "mobile",
    title: "Native Mobile",
    body: "High-performance iOS / Android in Swift, Kotlin, and React Native.",
    tint: "rgba(16, 185, 129, 0.14)",
    imageSrc:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=75",
    imageAlt: "Mobile devices on a desk",
  },
  {
    key: "fintech",
    title: "FinTech & Ledgers",
    body: "Ledger integrity, payment rails, high-concurrency systems in Rust and Go.",
    tint: "rgba(251, 191, 36, 0.12)",
    imageSrc:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=75",
    imageAlt: "Financial charts on a display",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Trust & Security — Section 10 (three pillars: IP, security, hot-swap)
// ─────────────────────────────────────────────────────────────────────────────
export const trustTiles = [
  {
    href: "/security-ip",
    title: "IP Protection",
    body: "US-governed contracts. Your code is strictly your IP—governed by the same legal frameworks as your local hires. Assigned irrevocably on creation.",
    linkLabel: "Read the brief",
  },
  {
    href: "/security-ip",
    title: "Enterprise-Grade Security",
    body: "Encrypted hardware. MDM integration. Zero-trust operating environment. Triple-redundant work facilities. We provision into your perimeter.",
    linkLabel: "Security architecture",
  },
  {
    href: "/security-ip",
    title: "Hot-Swap Ready",
    body: "If an engineer goes dark, Abet provisions a pre-trained replacement with zero sprint disruption. The Pod never stops.",
    linkLabel: "Operational integrity",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Stat strip (used in StatStrip component)
// ─────────────────────────────────────────────────────────────────────────────
export const statStrip = [
  { label: "Time to first commit", value: "21", unit: "days", note: "Under the provisioning protocol" },
  { label: "Pod composition", value: "3", unit: "engineers", note: "1 Lead + 2 Senior Architects" },
  { label: "US hours overlap", value: "50%", unit: "+", note: "Minimum guaranteed sprint coverage" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Benchmark / proof cards — three proofs from Section 10 + Section 9
// ─────────────────────────────────────────────────────────────────────────────
export const benchmarkCards = [
  {
    key: "protocol",
    title: "21 days to first commit",
    body: "Calibration, security provisioning, and sovereign integration on a clock you can plan around—not a hiring funnel.",
    href: "/#protocol",
    linkLabel: "View the protocol",
    imageSrc:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=75",
    imageAlt: "Developer typing on laptop",
  },
  {
    key: "model",
    title: "Same cost. Three times the execution surface.",
    body: "The fully-loaded cost of one senior local hire provisions an entire Sovereign Pod: 1 Lead + 2 Seniors, zero single point of failure.",
    href: "/the-paas-model",
    linkLabel: "Read the PaaS model",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=75",
    imageAlt: "Team meeting in modern office",
  },
  {
    key: "security",
    title: "Zero single points of failure.",
    body: "Dedicated hardware, MDM under your policy, zero-trust via your IdP, and client IP assigned on creation. Engineered for institutional deployment.",
    href: "/security-ip",
    linkLabel: "Security & IP brief",
    imageSrc:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=75",
    imageAlt: "Network security visualization",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Editorial deep links — the three secondary pages
// ─────────────────────────────────────────────────────────────────────────────
export const editorialHighlights = [
  {
    key: "paas",
    kicker: "The model",
    title: "Engineering capacity as a utility",
    description:
      "Stop buying headcount. Provision a standardized Sovereign Pod—one Lead Architect, two Seniors—inside your stack in 21 days.",
    href: "/the-paas-model",
    imageSrc:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=75",
    imageAlt: "Team planning on a whiteboard",
  },
  {
    key: "edge",
    kicker: "The edge",
    title: "Build-First execution",
    description:
      "Why Addis-based Pods carry national-scale systems DNA—and how 50% US overlap and 100% UK/EU coverage works structurally.",
    href: "/sovereign-execution",
    imageSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1d3?auto=format&fit=crop&w=1000&q=75",
    imageAlt: "Modern glass office building facade",
  },
  {
    key: "ip",
    kicker: "The perimeter",
    title: "Contracts, IP, and blast radius",
    description:
      "UAE-governed MSAs, irrevocable IP assignment, dedicated hardware, MDM under your policy—what your security team needs before day zero.",
    href: "/security-ip",
    imageSrc:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=75",
    imageAlt: "Security lock on digital interface",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Model wedges (Applications / Platform) — kept for ModelWedgeSplit if used
// ─────────────────────────────────────────────────────────────────────────────
export const modelWedges = [
  {
    key: "applications",
    eyebrow: "Applications",
    title: "Pods that ship inside your toolchain.",
    body: "A sovereign 3-person unit embedded in your repos, ceremonies, and release train—not a side channel. First PR in 21 days.",
    cta: "See the PaaS model",
    href: "/the-paas-model",
    panelGradient:
      "linear-gradient(145deg, rgba(10, 20, 72, 0.28), rgba(255,255,255,0.04) 45%, transparent 70%)",
    imageSrc:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=75",
    imageAlt: "Code on a monitor",
  },
  {
    key: "platform",
    eyebrow: "Platform & trust",
    title: "The protocol that provisions capacity.",
    body: "The 21-day boot sequence, enterprise MSAs, dedicated hardware, and zero-trust through your IdP—the operating system behind every Pod.",
    cta: "Security & IP brief",
    href: "/security-ip",
    panelGradient:
      "linear-gradient(145deg, rgba(16, 185, 129, 0.14), rgba(255,255,255,0.04) 45%, transparent 70%)",
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=75",
    imageAlt: "Server racks in a data center",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Pillar cards — three secondary page entry points
// ─────────────────────────────────────────────────────────────────────────────
export const pillarCards = [
  {
    href: "/the-paas-model",
    eyebrow: "The model",
    title: "The PaaS model",
    description:
      "Engineering capacity as a utility—standardized Pods, elastic scaling, and the 21-day provisioning protocol.",
    panelGradient: "linear-gradient(to bottom right, rgba(10, 20, 72, 0.22), transparent 58%)",
  },
  {
    href: "/sovereign-execution",
    eyebrow: "The edge",
    title: "Sovereign execution",
    description:
      "Build-First Economy talent—national-scale systems experience, near-zero churn, and US/EU-friendly hours.",
    panelGradient: "linear-gradient(to bottom right, rgba(16, 185, 129, 0.12), transparent 58%)",
  },
  {
    href: "/security-ip",
    eyebrow: "The perimeter",
    title: "Security & IP",
    description:
      "Dedicated hardware, MDM under your policy, zero-trust via your IdP—and client IP assigned on creation.",
    panelGradient: "linear-gradient(to bottom right, rgba(251, 191, 36, 0.1), transparent 58%)",
  },
] as const;
