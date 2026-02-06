import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider, useLanguage, type Language } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Imprint from '@/pages/Imprint';
import './App.css';

// Wrapper component to extract language from URL and set it
function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();
  
  // Set language based on URL parameter
  if (lang && (lang === 'en' || lang === 'de')) {
    setLanguage(lang as Language);
  }
  
  return <>{children}</>;
}

// Language route wrapper that ensures language is set
function LanguageRoute({ children }: { children: React.ReactNode }) {
  return (
    <LanguageWrapper>
      {children}
    </LanguageWrapper>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root to /en */}
      <Route path="/" element={<Navigate to="/en" replace />} />
      
      {/* English routes */}
      <Route path="/en" element={<LanguageRoute><Home /></LanguageRoute>} />
      <Route path="/en/services" element={<LanguageRoute><Services /></LanguageRoute>} />
      <Route path="/en/services/cloud-devops" element={<LanguageRoute><ServiceDetail service="cloud" /></LanguageRoute>} />
      <Route path="/en/services/on-prem-devops" element={<LanguageRoute><ServiceDetail service="onprem" /></LanguageRoute>} />
      <Route path="/en/services/ci-cd-automation" element={<LanguageRoute><ServiceDetail service="cicd" /></LanguageRoute>} />
      <Route path="/en/services/observability-sre" element={<LanguageRoute><ServiceDetail service="observability" /></LanguageRoute>} />
      <Route path="/en/about" element={<LanguageRoute><About /></LanguageRoute>} />
      <Route path="/en/contact" element={<LanguageRoute><Contact /></LanguageRoute>} />
      <Route path="/en/privacy" element={<LanguageRoute><Privacy /></LanguageRoute>} />
      <Route path="/en/imprint" element={<LanguageRoute><Imprint /></LanguageRoute>} />
      
      {/* German routes */}
      <Route path="/de" element={<LanguageRoute><Home /></LanguageRoute>} />
      <Route path="/de/services" element={<LanguageRoute><Services /></LanguageRoute>} />
      <Route path="/de/services/cloud-devops" element={<LanguageRoute><ServiceDetail service="cloud" /></LanguageRoute>} />
      <Route path="/de/services/on-prem-devops" element={<LanguageRoute><ServiceDetail service="onprem" /></LanguageRoute>} />
      <Route path="/de/services/ci-cd-automation" element={<LanguageRoute><ServiceDetail service="cicd" /></LanguageRoute>} />
      <Route path="/de/services/observability-sre" element={<LanguageRoute><ServiceDetail service="observability" /></LanguageRoute>} />
      <Route path="/de/about" element={<LanguageRoute><About /></LanguageRoute>} />
      <Route path="/de/contact" element={<LanguageRoute><Contact /></LanguageRoute>} />
      <Route path="/de/privacy" element={<LanguageRoute><Privacy /></LanguageRoute>} />
      <Route path="/de/imprint" element={<LanguageRoute><Imprint /></LanguageRoute>} />
      
      {/* Catch all - redirect to English */}
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-background text-foreground">
            {/* Grain overlay */}
            <div className="grain-overlay" />
            
            {/* Navigation */}
            <Navbar />
            
            {/* Main content */}
            <main>
              <AppRoutes />
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Toast notifications */}
            <Toaster position="top-right" />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
