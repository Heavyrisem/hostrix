export const keys = {
  root: () => ["hosts"] as const,
  getRawHosts: () => [...keys.root(), "getRawHosts"] as const,
  getHosts: () => [...keys.root(), "getHosts"] as const,
  getSectionByName: () => [...keys.root(), "getSectionByName"] as const,
};
