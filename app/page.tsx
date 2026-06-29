import { Hero } from "@/components/hero"
import { LoveCounter } from "@/components/love-counter"
import { Gallery } from "@/components/gallery"
import { Reasons } from "@/components/reasons"
import { Closing } from "@/components/closing"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <LoveCounter />
      <Gallery />
      <Reasons />
      <Closing />
    </main>
  )
}
