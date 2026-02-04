import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import CaseStudies from '@/pages/CaseStudies';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Imprint from '@/pages/Imprint';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          {/* Grain overlay */}
          <div className="grain-overlay" />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/cloud-devops" element={<ServiceDetail service="cloud" />} />
              <Route path="/services/on-prem-devops" element={<ServiceDetail service="onprem" />} />
              <Route path="/services/ci-cd-automation" element={<ServiceDetail service="cicd" />} />
              <Route path="/services/observability-sre" element={<ServiceDetail service="observability" />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/imprint" element={<Imprint />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Toast notifications */}
          <Toaster position="top-right" />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
