"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { locations } from "@/lib/locations";

const GEO_URL = "/geo/countries-110m.json";

export function WorldMap() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Render client-only: react-simple-maps computes marker transforms with
  // sub-pixel float differences between server and client, causing hydration
  // mismatches. Reserving the space avoids layout shift.
  if (!mounted) {
    return (
      <div
        className="rounded-2xl border border-border bg-surface"
        style={{ aspectRatio: "800 / 450" }}
        aria-hidden
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [-100, 44], scale: 340 }}
        width={800}
        height={420}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup minZoom={1} maxZoom={6}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "var(--surface-2)",
                      stroke: "var(--border)",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "var(--surface-2)",
                      stroke: "var(--border)",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    pressed: { fill: "var(--surface-2)", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {locations.map((loc) => {
            const active = hovered === loc.slug;
            return (
              <Marker
                key={loc.slug}
                coordinates={loc.coordinates}
                onMouseEnter={() => setHovered(loc.slug)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(`/personal/exploration/${loc.slug}`)}
                style={{ default: { cursor: "pointer" }, hover: { cursor: "pointer" } }}
              >
                {/* pulse */}
                <circle
                  r={active ? 9 : 6}
                  fill="var(--accent-2)"
                  fillOpacity={0.25}
                  style={{ transition: "all 0.2s" }}
                />
                <circle
                  r={active ? 4.5 : 3.5}
                  fill="var(--accent-2)"
                  stroke="#fff"
                  strokeWidth={1}
                  style={{ transition: "all 0.2s" }}
                />
                <text
                  textAnchor="middle"
                  y={-12}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: active ? 12 : 10,
                    fontWeight: 600,
                    fill: "var(--foreground)",
                    paintOrder: "stroke",
                    stroke: "var(--background)",
                    strokeWidth: 3,
                    pointerEvents: "none",
                    transition: "all 0.2s",
                  }}
                >
                  {loc.name}
                </text>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      <p className="border-t border-border px-4 py-2.5 text-center text-xs text-muted">
        Tap a pin to explore a place · scroll or pinch to zoom · drag to pan
      </p>
    </div>
  );
}
