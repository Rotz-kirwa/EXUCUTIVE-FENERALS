import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageShellFallback from "@/components/PageShellFallback";
import { AdaptiveExperienceProvider } from "@/providers/AdaptiveExperienceProvider";
import Index from "./pages/Index.tsx";

const MpesaCheckout = lazy(() => import("./pages/MpesaCheckout.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const App = () => (
  <AdaptiveExperienceProvider>
    <BrowserRouter>
      <Suspense fallback={<PageShellFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/checkout/mpesa" element={<MpesaCheckout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </AdaptiveExperienceProvider>
);

export default App;
