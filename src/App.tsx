import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import { FullPageLoader } from "./components/molecules";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageLoader />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
