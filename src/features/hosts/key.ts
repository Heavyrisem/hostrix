export const keys = {
  root: () => ["hosts"] as const,
  getRawHosts: () => [...keys.root(), "getRawHosts"] as const,
};
