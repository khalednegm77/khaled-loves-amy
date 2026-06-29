"use client"

import { useEffect, useState } from "react"

// Anniversary: 20 October 2025
const ANNIVERSARY = new Date("2025-10-20T00:00:00")

type Duration = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getDuration(): Duration {
  const now = new Date()
  let diff = Math.max(0, now.getTime() - ANNIVERSARY.getTime())

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff -= days * (1000 * 60 * 60 * 24)
  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff -= hours * (1000 * 60 * 60)
  const minutes = Math.floor(diff / (1000 * 60))
  diff -= minutes * (1000 * 60)
  const seconds = Math.floor(diff / 1000)

  return { days, hours, minutes, seconds }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-20 flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-6 shadow-sm sm:min-w-28 sm:px-6">
      <span className="font-serif text-4xl font-semibold tabular-nums text-primary sm:text-5xl">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function LoveCounter() {
  const [duration, setDuration] = useState<Duration | null>(null)

  useEffect(() => {
    setDuration(getDuration())
    const interval = setInterval(() => setDuration(getDuration()), 1000)
    return () => clearInterval(interval)
  }, [])

  const d = duration ?? { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return (
    <section
      id="counter"
      className="mx-auto w-full max-w-4xl px-6 py-20 text-center sm:py-28"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent-foreground">
        Together since 20 October 2025
      </p>
      <h2 className="mb-10 text-balance font-serif text-4xl font-semibold text-foreground sm:text-5xl">
        Every second has been ours
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <Unit value={d.days} label="Days" />
        <Unit value={d.hours} label="Hours" />
        <Unit value={d.minutes} label="Minutes" />
        <Unit value={d.seconds} label="Seconds" />
      </div>
      <p className="mx-auto mt-10 max-w-md text-pretty leading-relaxed text-muted-foreground">
        And the count keeps climbing &mdash; just like the way I fall for you a
        little more with each passing day.
      </p>
    </section>
  )
}
