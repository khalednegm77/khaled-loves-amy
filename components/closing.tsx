import { Heart } from "lucide-react"

export function Closing() {
  return (
    <footer className="relative overflow-hidden px-6 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-2xl">
        <Heart className="mx-auto mb-6 size-8 fill-primary text-primary" />
        <blockquote className="text-balance font-serif text-3xl font-medium leading-snug text-foreground sm:text-4xl">
          &ldquo;In a sea of people, my eyes will always search for you.&rdquo;
        </blockquote>
        <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
          Thank you for every laugh, every hug, and every quiet moment in
          between. Here&apos;s to us &mdash; today, on our anniversary, and for
          all the years still to come.
        </p>
        <p className="mt-10 font-serif text-2xl text-primary">
          khaled &amp; amyy
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Forever &amp; always &middot; 20.10.2025
        </p>
      </div>
    </footer>
  )
}
