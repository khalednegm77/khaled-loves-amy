import { Heart } from "lucide-react"

const reasons = [
  {
    title: "Your smile",
    text: "It turns the most ordinary moments into the ones I never want to forget.",
  },
  {
    title: "The way you listen",
    text: "You make me feel heard, understood, and completely at home.",
  },
  {
    title: "Your kindness",
    text: "The gentle way you treat the world reminds me how lucky I am to be yours.",
  },
  {
    title: "Our inside jokes",
    text: "A whole language only we understand, built from a thousand little moments.",
  },
  {
    title: "How you dream",
    text: "Every plan we make for the future feels brighter because you're in it.",
  },
  {
    title: "Just being you",
    text: "I could list a thousand reasons, but really it all comes down to this.",
  },
]

export function Reasons() {
  return (
    <section
      id="reasons"
      className="bg-secondary/50 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent-foreground">
            From me to you
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            Reasons I love you
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="size-5 fill-primary" />
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
