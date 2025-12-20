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

  // SEO Data for SPA - Updated for Full Stack Developer
  const seoData = {
    title:
      'Sojib Ahmed - Full Stack Web Developer | React, Node.js & TypeScript Expert',
    description:
      "I'm Sojib Ahmed, a passionate Full Stack Web Developer from Dhaka, Bangladesh. I specialize in React, Node.js, JavaScript, TypeScript, MongoDB, and Tailwind CSS, building modern, scalable, and user-friendly full-stack web applications. Explore my portfolio to see my latest projects and work.",
    image: 'https://sojib-ahmed.netlify.app/sojib-ahmed.dev.webp',
    url: 'https://sojib-ahmed.netlify.app',
    keywords:
      'Sojib Ahmed, sojib-ahmed, Sojib Ahmed developer, Ahmed Sojib, full stack developer, full stack web developer, MERN stack developer, React developer, Node.js developer, JavaScript developer, TypeScript developer, MongoDB developer, Express.js developer, Tailwind CSS developer, web development, modern web apps, responsive design, full stack applications, Bangladesh web developer, Natore developer, Rajshahi developer, portfolio, full stack portfolio, freelance developer, Sojib Ahmed portfolio',
    socialLinks: [
      'https://www.facebook.com/sojibahmed.connect',
      'https://www.instagram.com/sojibahmed.dev',
      'https://github.com/aminur-islam-sojib',
      'https://www.linkedin.com/in/sojib-ahmed-ai',
      'https://medium.com/@sojibahmed.dev',
      'https://dev.to/sojibahmed',
      'https://x.com/AminurSojib',
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
