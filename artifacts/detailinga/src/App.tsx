import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { ServicePage } from '@/pages/ServicePage';
import { Personal } from '@/pages/Personal';
import { Reviews } from '@/pages/Reviews';

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/personal" component={Personal} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/:slug" component={ServicePage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
