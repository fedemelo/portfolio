import type { WorkMode } from "../schemas/workExperience";
import type { Location } from "../schemas/location";

// On-site is the assumed default, so only the exceptions are worth printing.
const WORK_MODE_LABELS: Record<WorkMode, string | undefined> = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: undefined,
};

export function formatLocation(
  location: Location,
  workMode?: WorkMode,
  employment?: string
): string {
  const place = [location.city, location.state, location.country].filter(Boolean).join(", ");
  const conditions = [workMode && WORK_MODE_LABELS[workMode], employment].filter(Boolean);
  return conditions.length > 0 ? `${place} (${conditions.join(", ")})` : place;
}
