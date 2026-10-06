import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Masterclass from "./pages/Masterclass";
import NotFound from "./pages/NotFound";
import RedirectToPrograms from "./components/RedirectToPrograms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/masterclass/speaking" element={<Navigate to="/masterclass#impact" replace />} />
          <Route path="/services" element={<RedirectToPrograms />} />
          <Route path="/leadership-clarity-program" element={<RedirectToPrograms />} />
          <Route path="/leadership-circle-profile" element={<RedirectToPrograms />} />
          <Route path="/career-transition-program" element={<RedirectToPrograms />} />
          <Route path="/collective-leadership-assessment" element={<RedirectToPrograms />} />
          <Route path="/cla" element={<RedirectToPrograms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
