import type { PlaceCategoryGroup } from "@/data/places";

/**
 * One small monoline icon per PlaceCategoryGroup — same visual weight as
 * TrainIcon in Railway.tsx (24x24 viewBox, stroke currentColor, no fill).
 */
export function CategoryIcon({
  group,
  className = "h-4 w-4",
}: {
  group: PlaceCategoryGroup;
  className?: string;
}) {
  const props = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (group) {
    case "food":
      return (
        <svg {...props}>
          <path d="M7 3v7a1.5 1.5 0 0 0 3 0V3M8.5 10v11M17 3c-1.4 0-2.5 2-2.5 5s1.1 5 2.5 5 2.5-2 2.5-5-1.1-5-2.5-5Zm0 10v8" />
        </svg>
      );
    case "cafe":
      return (
        <svg {...props}>
          <path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
          <path d="M16 10.5h1.5a2 2 0 0 1 0 4H16" />
          <path d="M8 4.5c0 1-1 1-1 2s1 1 1 2M12 4.5c0 1-1 1-1 2s1 1 1 2" />
        </svg>
      );
    case "omiyage":
      return (
        <svg {...props}>
          <rect x="4" y="9" width="16" height="10" />
          <path d="M4 9h16M12 9v10M8.5 9c-1.5 0-2.5-1-2.5-2.5S7 4 8.5 4c2 0 3.5 2.5 3.5 5M15.5 9c1.5 0 2.5-1 2.5-2.5S16.5 4 15.5 4c-2 0-3.5 2.5-3.5 5" />
        </svg>
      );
    case "nature":
      return (
        <svg {...props}>
          <path d="M12 21c-4-2-7-5.5-7-10a7 7 0 0 1 14 0c0 4.5-3 8-7 10Z" />
          <path d="M12 21V9" />
        </svg>
      );
    case "attraction":
      return (
        <svg {...props}>
          <path d="M4 9.5 12 5l8 4.5M5.5 9.5V19h13V9.5" />
          <path d="M9.5 19v-5h5v5M4 19h16" />
        </svg>
      );
    case "onsen":
      return (
        <svg {...props}>
          <circle cx="12" cy="16.5" r="4" />
          <path d="M9 5.5c1 1.2.3 2-.2 2.8-.6 1-.4 2 .4 2.6M13 4.5c1 1.2.3 2-.2 2.8-.6 1-.4 2 .4 2.6M17 6.5c.8 1 .2 1.7-.2 2.4-.5.8-.3 1.6.3 2.1" />
        </svg>
      );
    case "outdoor":
      return (
        <svg {...props}>
          <path d="M4 19 10 6l3 6.5L15.5 9 20 19Z" />
          <path d="M4 19h16" />
        </svg>
      );
    default:
      return null;
  }
}
