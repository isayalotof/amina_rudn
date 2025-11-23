import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import VectorsSection from './components/sections/VectorsSection';
import TimelineSection from './components/sections/TimelineSection';
import MentorsSection from './components/sections/MentorsSection';
import FAQSection from './components/sections/FAQSection';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle dark mode based on system preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Set initial dark mode
    handleDarkModeChange(darkModeMediaQuery);

    // Listen for changes
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VectorsSection />
        <TimelineSection />
        <MentorsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
