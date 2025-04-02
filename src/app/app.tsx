import { AppProvider } from "./providers/app.provider";
import { RouteProvider } from "./providers/route.provider";

export function App() {
  return (
    <AppProvider>
      <RouteProvider />
    </AppProvider>
  );
}
