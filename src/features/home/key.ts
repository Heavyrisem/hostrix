export const keys = {
  root: () => ["home"] as const,
  ping: () => [...keys.root(), "ping"] as const,
  getRawHosts: () => [...keys.root(), "getRawHosts"] as const,
};
