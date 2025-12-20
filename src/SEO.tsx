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
  title = 'Sojib Ahmed - Full Stack Web Developer | React, Node.js & TypeScript Expert',
  description = "I'm Sojib Ahmed, a passionate Full Stack Web Developer from Dhaka, Bangladesh. I specialize in React, Node.js, JavaScript, TypeScript, MongoDB, and Tailwind CSS, building modern, scalable, and user-friendly full-stack web applications. Explore my portfolio to see my latest projects.",
  image = 'https://sojib-ahmed.netlify.app/sojib-ahmed.dev.webp',
  url = 'https://sojib-ahmed.netlify.app',
  keywords = 'Sojib Ahmed, sojib-ahmed, Sojib Ahmed developer, Ahmed Sojib, Ahmed Sojib, Sojib-Ahmed,  full stack developer, full stack web developer, MERN stack developer, React developer, Node.js developer, JavaScript developer, TypeScript developer, MongoDB developer, Express.js developer, Tailwind CSS developer, web development, modern web apps, responsive design, full stack applications, Bangladesh web developer, Dhaka developer, portfolio, full stack portfolio, freelance developer, Sojib Ahmed portfolio',
  socialLinks = [
    'https://www.facebook.com/sojibahmed.connect',
    'https://www.instagram.com/sojibahmed.dev',
    'https://github.com/aminur-islam-sojib',
    'https://www.linkedin.com/in/sojib-ahmed-ai',
    'https://medium.com/@sojibahmed.dev',
    'https://dev.to/sojibahmed',
    'https://x.com/AminurSojib',
  ],
}: SEOProps) => {
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
      <meta property="og:type" content="profile" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Sojib Ahmed Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="profile:first_name" content="Sojib" />
      <meta property="profile:last_name" content="Ahmed" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@AminurSojib" />
      <meta name="twitter:site" content="@AminurSojib" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Additional Meta Tags */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* JSON-LD Structured Data - Person Schema (Enhanced for Photo) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Sojib Ahmed',
          givenName: 'Sojib',
          familyName: 'Ahmed',
          alternateName: ['sojib-ahmed', 'Sojib Ahmed Dev', 'Ahmed Sojib'],
          url: url,
          image: {
            '@type': 'ImageObject',
            url: image,
            contentUrl: image,
            width: '800',
            height: '800',
            caption: 'Sojib Ahmed - Full Stack Web Developer',
          },
          jobTitle: 'Full Stack Web Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dhaka',
            addressRegion: 'Dhaka Division',
            addressCountry: 'BD',
          },
          description: description,
          sameAs: socialLinks,
          knowsAbout: [
            'React',
            'Node.js',
            'JavaScript',
            'TypeScript',
            'MongoDB',
            'Express.js',
            'Tailwind CSS',
            'Full Stack Development',
            'MERN Stack',
            'Web Development',
            'Frontend Development',
            'Backend Development',
            'Responsive Design',
            'UI/UX',
            'RESTful APIs',
            'Database Design',
          ],
          email: 'mailto:contact@sojibahmed.dev',
          nationality: {
            '@type': 'Country',
            name: 'Bangladesh',
          },
          brand: {
            '@type': 'Brand',
            name: 'Sojib Ahmed',
          },
          mainEntityOfPage: {
            '@type': 'ProfilePage',
            '@id': url,
          },
        })}
      </script>

      {/* JSON-LD Structured Data - Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Sojib Ahmed Portfolio',
          alternateName: 'Sojib Ahmed',
          url: url,
          description: description,
          author: {
            '@type': 'Person',
            name: 'Sojib Ahmed',
          },
          inLanguage: 'en-US',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${url}?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        })}
      </script>

      {/* JSON-LD Structured Data - ProfilePage */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: 'Sojib Ahmed',
            image: image,
            url: url,
            sameAs: socialLinks,
          },
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
