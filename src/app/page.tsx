export default function Home() {
  const projects = [
    {
      title: "Project One",
      description:
        "A short description of what you built, the problem it solves, and the impact.",
      tags: ["TypeScript", "Next.js", "Tailwind"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Project Two",
      description:
        "Highlight the interesting technical challenge here and what you learned.",
      tags: ["React", "Design Systems", "Accessibility"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Project Three",
      description:
        "Another project with a crisp one-liner and a few concrete technologies.",
      tags: ["Node.js", "APIs", "Testing"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 blur-3xl dark:from-indigo-400/10 dark:via-fuchsia-400/10 dark:to-amber-300/10" />
        <div className="absolute bottom-[-14rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-cyan-400/20 via-emerald-400/20 to-indigo-400/20 blur-3xl dark:from-cyan-300/10 dark:via-emerald-300/10 dark:to-indigo-300/10" />
      </div>

      <header className="sticky top-0 z-20 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            Christof Hammel
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300 sm:flex">
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        <section className="relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-black/30 dark:text-zinc-300">
              Building thoughtful products with clean engineering
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-fuchsia-400 dark:to-amber-300">
                Christof Hammel
              </span>
              .
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              I am a <span className="font-medium">...</span>. I craft modern web
              experiences with a focus on clarity, performance, and delightful UX.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white/60 px-5 text-sm font-medium text-zinc-900 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-black/20 dark:text-zinc-50 dark:hover:bg-black/30"
              >
                View projects
              </a>
              <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                  GitHub
                </a>
                <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                  LinkedIn
                </a>
                <a
                  className="hover:text-zinc-950 dark:hover:text-white"
                  href="mailto:hello@example.com"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Engineering
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                TypeScript, React, Next.js, Node.js, APIs, testing.
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Product
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                UX-first thinking, fast iteration, measurable outcomes.
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Design
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Minimal, modern UI with accessibility and detail.
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-zinc-200/70 py-16 dark:border-white/10">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">About</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                A quick snapshot of who you are and what you care about.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                <p>
                  I’m Christof Hammel, a builder who enjoys turning complex ideas
                  into simple, beautiful products.
                </p>
                <p>
                  I care about pragmatic engineering, clean interfaces, and
                  creating experiences that feel fast and intentional.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["TypeScript", "React", "Next.js", "Node.js", "Tailwind", "UX"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-black/20 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-t border-zinc-200/70 py-16 dark:border-white/10"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                A few things I’m proud of. Swap these placeholders with real work.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              >
                <h3 className="text-base font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm font-medium">
                  <a
                    className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 transition hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-white/20 dark:hover:decoration-white"
                    href={p.links.demo}
                  >
                    Live
                  </a>
                  <a
                    className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 transition hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-white/20 dark:hover:decoration-white"
                    href={p.links.github}
                  >
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-zinc-200/70 py-16 dark:border-white/10"
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Want to collaborate or just say hi? Email is best.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-black/20">
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  Email
                </div>
                <a
                  className="mt-2 inline-flex text-base font-semibold text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-white/20 dark:hover:decoration-white"
                  href="mailto:hello@example.com"
                >
                  hello@example.com
                </a>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Replace this with your real email and add any other preferred
                  contact method.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-200/70 py-10 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} Christof Hammel</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                GitHub
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                LinkedIn
              </a>
              <a
                className="hover:text-zinc-950 dark:hover:text-white"
                href="#top"
              >
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
