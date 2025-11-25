import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import AsideBar from './components/AsideBar/AsideBar';
import MainBar from './components/Main/MainBar';
import type { RootState } from './store/store';
import { Toaster, toast } from 'sonner';
// Using `react-helmet` instead of `react-helmet-async` for React 19 compatibility
import SEO from './SEO';
import { initGA, trackPageView } from './analytics'; // Import analytics

function App() {
  const isToast = useSelector(
    (state: RootState) => state.clickStateR.toastActive
  );

  // Initialize Google Analytics on app load
  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname);
  }, []);

  // SEO Data for SPA
  const seoData = {
    title: 'Sojib Ahmed | Frontend Web Developer',
    description:
      "Hi, I'm Sojib Ahmed — a passionate Frontend Web Developer from Natore, Bangladesh, specializing in React, JavaScript, TypeScript, and Tailwind CSS. I build modern, responsive, and user-friendly web applications. Explore my portfolio to see my latest projects and work.",
    image: 'https://sojib-ahmed.netlify.app/sojib-ahmed.dev.webp',
    url: 'https://sojib-ahmed.netlify.app',
    keywords:
      'Sojib Ahmed, sojib-ahmed, Sojib Ahmed developer, web developer, frontend developer, frontend web developer, React developer, JavaScript developer, TypeScript developer, Tailwind CSS, web development, modern web apps, responsive design, UI developer, Bangladesh web developer, Natore developer, Rajshahi developer, portfolio, React portfolio, freelance developer, full stack developer',
    socialLinks: [
      'https://facebook.com/sojibahmed.dev',
      'https://instagram.com/sojibahmed.dev',
      'https://github.com/aminur-islam-sojib',
      'https://linkedin.com/in/ahmedsojib',
    ],
  };

  return (
    <>
      {/* SEO Component */}
      <SEO
        title={seoData.title}
        description={seoData.description}
        image={seoData.image}
        url={seoData.url}
        keywords={seoData.keywords}
        socialLinks={seoData.socialLinks}
      />

      {/* Main SPA Layout */}
      <section className="bg-[#121212]">
        <section className="grid grid-cols-4 py-5 pb-12 md:pb-0 sm:py-12 px-5 sm:px-5 md:px-10 gap-5 sm:gap-10">
          <div className="col-span-4 lg:col-span-1">
            <div className="sticky top-12 overflow-y-auto">
              <AsideBar />
            </div>
          </div>

          <div className="col-span-4 lg:col-span-3">
            <MainBar />
          </div>

          {/* Toast Notifications */}
          <div className="z-50">
            {isToast &&
              toast.success('CV Downloaded Successfully!', { duration: 2000 })}
          </div>
    
        </section>

        {/* Global Toaster */}
        <Toaster
          position="top-center"
          richColors={true}
          expand={false}
          visibleToasts={1}
        />
      </section>
    </>
  );
}

export default App;
