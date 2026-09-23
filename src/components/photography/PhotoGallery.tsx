"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Photo } from "@/lib/photos";

const gradients = [
  "from-accent/25 to-accent-2/25",
  "from-accent-2/25 to-accent/25",
  "from-accent/20 to-surface-2",
  "from-accent-2/20 to-surface-2",
];

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const cities = useMemo(
    () => ["All", ...Array.from(new Set(photos.map((p) => p.city))).sort()],
    [photos],
  );
  const [city, setCity] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (city === "All" ? photos : photos.filter((p) => p.city === city)),
    [photos, city],
  );

  // Only photos with a real src can open in the lightbox.
  const openable = useMemo(
    () => filtered.map((p, i) => (p.src ? i : -1)).filter((i) => i >= 0),
    [filtered],
  );

  const showAt = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= openable.length) return;
      setLightbox(openable[idx]);
    },
    [openable],
  );

  const currentOpenPos = useMemo(
    () => (lightbox === null ? -1 : openable.indexOf(lightbox)),
    [lightbox, openable],
  );

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") showAt(currentOpenPos + 1);
      if (e.key === "ArrowLeft") showAt(currentOpenPos - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, currentOpenPos, showAt]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {cities.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCity(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              city === c
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-surface text-muted hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((photo, i) => (
          <PhotoTile
            key={i}
            photo={photo}
            gradient={gradients[i % gradients.length]}
            onOpen={photo.src ? () => setLightbox(i) : undefined}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox]?.src && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <FiX size={20} />
          </button>

          {currentOpenPos > 0 && (
            <button
              type="button"
              aria-label="Previous"
              className="absolute left-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                showAt(currentOpenPos - 1);
              }}
            >
              <FiChevronLeft size={22} />
            </button>
          )}
          {currentOpenPos < openable.length - 1 && (
            <button
              type="button"
              aria-label="Next"
              className="absolute right-4 bottom-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4 sm:top-1/2"
              onClick={(e) => {
                e.stopPropagation();
                showAt(currentOpenPos + 1);
              }}
            >
              <FiChevronRight size={22} />
            </button>
          )}

          <figure className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src!}
              alt={filtered[lightbox].alt}
              width={filtered[lightbox].width ?? 1600}
              height={filtered[lightbox].height ?? 1200}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {filtered[lightbox].alt} · {filtered[lightbox].city}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

function PhotoTile({
  photo,
  gradient,
  onOpen,
}: {
  photo: Photo;
  gradient: string;
  onOpen?: () => void;
}) {
  if (photo.src) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width ?? 800}
          height={photo.height ?? 1000}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </button>
    );
  }

  // Placeholder tile
  return (
    <div
      className={`mb-4 flex break-inside-avoid flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-gradient-to-br ${gradient} text-muted`}
      style={{ aspectRatio: photo.aspect ?? "4/5" }}
    >
      <FiCamera size={22} />
      <span className="text-xs font-medium uppercase tracking-wider">
        {photo.city}
      </span>
    </div>
  );
}
