import type { WorkMode } from "../schemas/workExperience";
import type { Location } from "../schemas/location";

export function formatLocation(
  location: Location,
  workMode?: WorkMode,
  suffix?: string
): string {
  const parts = [location.city, location.state, location.country].filter(Boolean);
  const base = parts.join(", ");
  const modeLabel = workMode
    ? workMode === "remote" ? "Remote" : workMode === "hybrid" ? "Hybrid" : "On-site"
    : undefined;
  return [base, modeLabel, suffix].filter(Boolean).join(" · ");
}
