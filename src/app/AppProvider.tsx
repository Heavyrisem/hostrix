import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { queryClient } from "@/shared/query/client";

import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={<div>Error Boundary Fallback</div>}>
      <Suspense fallback={<div>Suspense Fallback</div>}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
