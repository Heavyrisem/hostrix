export const sectionKeys = {
  root: () => ["section"] as const,
  list: () => [sectionKeys.root(), "list"] as const,
};
