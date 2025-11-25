import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  socialLinks?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Sojib Ahmed | Frontend Web Developer',
  description = "Hi, I'm Sojib Ahmed — a passionate Frontend Web Developer from Natore, Bangladesh, specializing in React, JavaScript, TypeScript, and Tailwind CSS. I build modern, responsive, and user-friendly web applications. Explore my portfolio to see my latest projects and work.",
  image = 'https://sojib-ahmed.netlify.app/sojib-ahmed.dev.webp',
  url = 'https://sojib-ahmed.netlify.app',
  keywords = 'Sojib Ahmed, sojib-ahmed, Sojib Ahmed developer, web developer, frontend developer, frontend web developer, React developer, JavaScript developer, TypeScript developer, Tailwind CSS, web development, modern web apps, responsive design, UI developer, Bangladesh web developer, Natore developer, Rajshahi developer, portfolio, React portfolio, freelance developer, full stack developer',
  socialLinks = [
    'https://facebook.com/sojibahmed.dev',
    'https://instagram.com/sojibahmed.dev',
    'https://github.com/aminur-islam-sojib',
    'https://linkedin.com/in/ahmedsojib',
  ],
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sojib Ahmed" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Google Search Console Verification */}
      <meta
        name="google-site-verification"
        content="5F1Gptr8XpjMHvoEdKrItuM_EP73uKTS9SHyxkocHNk"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Sojib Ahmed Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@sojibahmed" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Additional Meta Tags */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* JSON-LD Structured Data - Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Sojib Ahmed',
          alternateName: ['sojib-ahmed', 'Sojib Ahmed Dev'],
          url: url,
          image: image,
          jobTitle: 'Frontend Web Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Natore',
            addressRegion: 'Rajshahi Division',
            addressCountry: 'BD',
          },
          description: description,
          sameAs: socialLinks,
          knowsAbout: [
            'React',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'Web Development',
            'Frontend Development',
            'Responsive Design',
            'UI/UX',
          ],
          email: 'mailto:contact@sojibahmed.dev',
          nationality: {
            '@type': 'Country',
            name: 'Bangladesh',
          },
        })}
      </script>

      {/* JSON-LD Structured Data - Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Sojib Ahmed Portfolio',
          url: url,
          description: description,
          author: {
            '@type': 'Person',
            name: 'Sojib Ahmed',
          },
          inLanguage: 'en-US',
        })}
      </script>

      {/* JSON-LD Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: url,
            },
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
