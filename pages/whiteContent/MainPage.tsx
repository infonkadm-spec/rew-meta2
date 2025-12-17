import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top gradient banner */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-neutral-50">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              The Attention Economy · Insights
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              The Quiet Evolution of YouTube — and How Everyday People Are Taking Part
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              What truly makes a video hold our attention? Platforms increasingly rely on real people to refine that answer — and it’s reshaping the creative economy.
            </p>
            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Avatar initials="RD" />
                <span>By Research Desk</span>
              </div>
              <Dot />
              <time dateTime="2025-10-29">October 29, 2025</time>
              <Dot />
              <span>6 min read</span>
            </div>
          </div>
        </div>

        {/* Decorative background blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-6rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-[-6rem] h-[26rem] w-[26rem] rounded-full bg-indigo-200/40 blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <ContentHeader />
        <PrologueCard />
        <Section
          kicker="Why This Matters"
          title="Short videos changed our habits. Participation is changing the rules."
        >
          <p>
            Short-form video has become part of everyday life. Some clips hook us in seconds, others keep us watching to the end. Behind the scenes, platforms are racing to understand what truly engages people — and that requires input from real viewers.
          </p>
          <p>
            That shift opens space for everyday participants to help shape what rises to the top. The result is a smarter, more enjoyable feed for millions.
          </p>
        </Section>

        <Divider />

        <Section kicker="How Participation Works" title="A simple loop with outsized impact">
          <OrderedList
            items={[
              {
                title: "Watch thoughtfully",
                body:
                  "View selected short videos with attention to pacing, hooks, and clarity.",
              },
              {
                title: "Share your take",
                body:
                  "Offer an honest signal about your experience — not a review, just a pulse on attention.",
              },
              {
                title: "Improve the feed",
                body:
                  "Your input helps the system surface what deserves more reach and refine what doesn’t.",
              },
            ]}
          />
          <InfoNote>
            There are no promises here — just a growing role for real audience signals in how modern video ecosystems evolve.
          </InfoNote>
        </Section>

        <Divider />

        <Section kicker="Bigger Picture" title="The rising power of the attention economy">
          <p>
            For years, only creators influenced distribution. Now, audiences also play an active role. That doesn’t require editing skills, equipment, or a public persona — only the ability to pay attention and signal what feels meaningful.
          </p>
          <StatsRow
            stats={[
              { label: "Role", value: "Audience-as-Participant" },
              { label: "Skill", value: "Attention & Honest Signals" },
              { label: "Effect", value: "Smarter Distribution" },
            ]}
          />
        </Section>

        <Divider />

        <Section kicker="What You Actually Do" title="Three focus points that matter">
          <Cards3
            items={[
              {
                title: "Notice the hook",
                body:
                  "Does the first second spark curiosity? Do you instantly understand what’s happening?",
              },
              {
                title: "Feel the pacing",
                body:
                  "Is there forward motion? Does it avoid stalls, fillers, or confusing cuts?",
              },
              {
                title: "Gauge clarity",
                body:
                  "Is the point obvious without captions? Would most people get it the first time?",
              },
            ]}
          />
        </Section>

        <Divider />

        <PullQuote>
          “In phase one, platforms rewarded creation. Next, they’re recognizing participation. The audience is no longer passive — it’s part of the engine.”
        </PullQuote>

        <Divider />

        <Section kicker="FAQ" title="Common questions (without the hype)">
          <FAQ
            items={[
              {
                q: "Do I need to make or publish videos?",
                a: "No. This role focuses on watching with intention and signaling what holds attention.",
              },
              {
                q: "Is this about ratings or reviews?",
                a: "Not exactly. It’s more like a lightweight attention signal, not a public critique.",
              },
              {
                q: "What’s the benefit of participating?",
                a: "You help shape a better feed, learn how attention really works, and be part of how modern platforms evolve.",
              },
              {
                q: "Are there guarantees?",
                a: "No. This is an emerging ecosystem. Treat it as participation, learning, and contribution — without assumptions.",
              },
            ]}
          />
        </Section>

        <Divider />

        <Section kicker="Perspective" title="A shift that rewards being observant">
          <p>
            You don’t need a studio or a spotlight. You only need the most human skill of all: paying attention. As platforms embrace authentic audience signals, thoughtful participation becomes a quiet advantage.
          </p>
        </Section>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://pay.mycheckoutt.com/019ada55-17e9-7319-bb0e-2b61b337a943?ref="
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Buy now for $27
          </a>
        </div>

        <FooterNote />
      </article>
    </main>
  );
}

/* ——— UI Primitives ——— */
function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white">
      {initials}
    </div>
  );
}

function Dot() {
  return <span className="mx-1 select-none text-neutral-400">•</span>;
}

function Divider() {
  return <div className="my-12 h-px w-full bg-neutral-200" />;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 inline-block text-[11px] font-semibold uppercase tracking-wider text-blue-700">
      {children}
    </span>
  );
}

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="prose prose-neutral mt-4 max-w-none text-neutral-800 prose-p:leading-relaxed prose-headings:scroll-mt-20">
        {children}
      </div>
    </section>
  );
}

function ContentHeader() {
  return (
    <div className="mx-auto mb-10 mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:col-span-2">
        <h3 className="text-lg font-semibold">What this article covers</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
          <li>Why real audience participation is shaping YouTube’s next chapter</li>
          <li>How attention signals improve what surfaces in the feed</li>
          <li>Simple ways to participate — with no production required</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold">At a glance</h3>
        <p className="mt-2 text-sm text-neutral-700">
          No courses, no gear, no public profiles. Just thoughtful viewing and honest signals about what truly holds attention.
        </p>
      </div>
    </div>
  );
}

function PrologueCard() {
  return (
    <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-neutral-700">
        Until recently, the story was simple: create good content and platforms will distribute it. Today, something quieter is unfolding — distribution increasingly listens to <em>audience signals</em>. That includes yours.
      </p>
    </div>
  );
}

function OrderedList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <ol className="mt-4 space-y-4">
      {items.map((it, i) => (
        <li key={i} className="flex gap-4">
          <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-semibold text-neutral-700">
            {i + 1}
          </span>
          <div>
            <p className="font-medium">{it.title}</p>
            <p className="text-neutral-700">{it.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function InfoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[15px] text-amber-900">
      {children}
    </div>
  );
}

function StatsRow({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((s, i) => (
        <div
          key={i}
          className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {s.label}
          </div>
          <div className="mt-1 text-lg font-bold text-neutral-900">{s.value}</div>
        </div>
      ))}
    </div>
  );
}

function Cards3({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map((card, i) => (
        <div
          key={i}
          className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="text-sm font-semibold text-blue-700">{card.title}</div>
          <p className="mt-2 text-sm text-neutral-700">{card.body}</p>
        </div>
      ))}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <figure className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <blockquote>
        <p className="text-lg font-medium italic text-neutral-800">{children}</p>
      </blockquote>
    </figure>
  );
}

function FAQ({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <ul className="mt-4 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {items.map((item, i) => (
        <li key={i} className="p-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-neutral-900">
              <span>{item.q}</span>
              <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">{item.a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

function FooterNote() {
  return (
    <footer className="mx-auto mt-12 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-600">
      This article is for educational and informational purposes about the evolving role of audience participation in modern video platforms. It does not make promises, guarantees, or offers.
    </footer>
  );
}
