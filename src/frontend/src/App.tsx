import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import FloatingButtons from "./components/FloatingButtons";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import ContactSection from "./pages/ContactSection";
import CoursesSection from "./pages/CoursesSection";
import FAQSection from "./pages/FAQSection";
import FooterSection from "./pages/FooterSection";
import HeroSection from "./pages/HeroSection";
import LocationSection from "./pages/LocationSection";
import StatsSection from "./pages/StatsSection";
import TestimonialsSection from "./pages/TestimonialsSection";
import WhyChooseUs from "./pages/WhyChooseUs";

function AcademyApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Layout>
      <HeroSection />
      <WhyChooseUs />
      <CoursesSection />
      <StatsSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
      <FloatingButtons />
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="aim-chess-theme"
      enableSystem={false}
    >
      <AcademyApp />
    </ThemeProvider>
  );
}
