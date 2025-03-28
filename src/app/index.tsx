import { AppProvider } from "./AppProvider";
import { RoutesProvider } from "./RoutesProvider";

export function App() {
  return (
    <AppProvider>
      <RoutesProvider />
    </AppProvider>
  );
}
