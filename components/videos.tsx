"use client"

import { useRef, useState } from "react"
import { Film, Volume2, VolumeX } from "lucide-react"

// To add your own clips: drop video files into `public/videos/`
// (use .mp4 or .webm), then add an entry here for each one.
const videos: { src: string; caption: string }[] = [
  // { src: "/videos/clip-1.mp4", caption: "Our first dance" },
  // { src: "/videos/clip-2.mp4", caption: "Laughing until it hurt" },
]

export function Videos() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function handlePlayWithSound(index: number) {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        video.muted = false
        video.volume = 1
        void video.play()
      } else {
        video.muted = true
      }
    })
    setActiveIndex(index)
  }

  return (
    <section id="videos" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent-foreground">
          Moments in motion
        </p>
        <h2 className="text-balance font-serif text-4xl font-semibold text-foreground sm:text-5xl">
          Our memories, alive
        </h2>
        {videos.length > 0 ? (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Tap any clip to turn its sound on.
          </p>
        ) : null}
      </div>

      {videos.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {videos.map((video, index) => {
            const isActive = activeIndex === index
            return (
              <figure
                key={video.src}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => handlePlayWithSound(index)}
                  className="block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={
                    isActive
                      ? `${video.caption} — playing with sound`
                      : `Play ${video.caption} with sound`
                  }
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el
                    }}
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/55 text-background backdrop-blur-sm transition-colors group-hover:bg-foreground/70">
                    {isActive ? (
                      <Volume2 className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <VolumeX className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </button>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 font-serif text-lg text-background">
                  {video.caption}
                </figcaption>
              </figure>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/60 px-6 py-16 text-center">
          <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
            <Film className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="font-serif text-2xl text-foreground">Your clips will live here</p>
          <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Send me your video clips and I&apos;ll add them to this section as
            softly looping memories. Once they&apos;re in, a tap will turn on the
            sound.
          </p>
        </div>
      )}
    </section>
  )
}
