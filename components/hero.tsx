import Image from "next/image"
import { Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/photos/hero.png"
        alt="khaled and amyy walking hand in hand at golden hour"
        fill
        priority
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/85"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
          <Heart className="size-3.5 fill-primary" />
          Our Love Story
        </span>
        <h1 className="text-balance font-serif text-6xl font-semibold leading-none text-foreground drop-shadow-sm sm:text-8xl">
          khaled <span className="text-primary">&amp;</span> amyy
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/80">
          Two hearts, one beautiful story &mdash; written one ordinary,
          extraordinary day at a time.
        </p>
        <a
          href="#counter"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
        >
          See how long we&apos;ve loved
        </a>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  )
}
