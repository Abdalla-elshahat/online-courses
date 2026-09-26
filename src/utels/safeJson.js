// JSON.parse that never throws: returns `fallback` for missing/invalid input
// (e.g. the backend storing the literal string "undefined").
export function safeParse(value, fallback = {}) {
  if (value === null || value === undefined || value === "" || value === "undefined" || value === "null") {
    return fallback;
  }
  if (typeof value !== "string") return value;
  try {
    const parsed = JSON.parse(value);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}
