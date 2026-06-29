import Image from "next/image"

const photos = [
  { src: "/photos/photo-1.png", caption: "Coffee and endless laughter" },
  { src: "/photos/photo-2.png", caption: "Our kind of sunset" },
  { src: "/photos/photo-3.png", caption: "A promise in every touch" },
  { src: "/photos/photo-4.png", caption: "Dancing in the living room" },
  { src: "/photos/photo-5.png", caption: "Even the rain felt warm" },
  { src: "/photos/photo-6.png", caption: "Slow afternoons together" },
  { src: "/photos/photo-7.png", caption: "Watching the world go by" },
  { src: "/photos/photo-8.png", caption: "Just you and me" },
  { src: "/photos/photo-9.png", caption: "Flowers, always for you" },
]

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent-foreground">
          Moments we keep
        </p>
        <h2 className="text-balance font-serif text-4xl font-semibold text-foreground sm:text-5xl">
          Our favorite memories
        </h2>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.caption}
              width={600}
              height={i % 2 === 0 ? 800 : 600}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-foreground/70 to-transparent p-4 font-serif text-lg text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
