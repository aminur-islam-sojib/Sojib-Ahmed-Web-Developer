import { motion } from 'framer-motion';
import { Eye, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import HeaderGenerator from '../HeaderGenerator';
import PortfolioBanner from '/SojibAhmedPortfolio.png';
import ClubSphereBanner from '/ClubSphere.png';
import SkillZenBanner from '/SkillGen.png';
import AAbhawaX from '/AAbhawaX.png';

// Skeleton Components
const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-700 ${className}`} />
);

const SkeletonCard = () => (
  <div className="border border-[#383838] rounded-2xl overflow-hidden">
    <Skeleton className="w-full h-40" />
    <div className="p-3 space-y-2">
      <Skeleton className="h-5 w-3/4 rounded" />
      <Skeleton className="h-4 w-1/2 rounded" />
      <div className="flex gap-1.5 mt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>
    </div>
  </div>
);

interface DataProps {
  id?: number;
  name?: string;
  avatar?: string;
  webLink?: string;
  category?: string;
  techStack?: string[];
  githubClient?: string;
  githubServer?: string;
}

const portfolioData: DataProps[] = [
  {
    id: 1,
    name: 'Personal Portfolio',
    webLink: 'https://sojib-ahmed.netlify.app/',
    avatar: PortfolioBanner,
    category: 'Web Development',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    githubClient:
      'https://github.com/aminur-islam-sojib/Sojib-Ahmed-Web-Developer',
  },
  {
    id: 2,
    name: 'ClubSphere – Full-Stack MERN Web Application',
    webLink: 'https://clubsphere-sojib.netlify.app/',
    avatar: ClubSphereBanner,
    category: 'Web Design',
    techStack: ['TypeScript', 'React', 'Stripe', 'MongoDB'],
    githubClient: 'https://github.com/aminur-islam-sojib/cloudshpere-client',
    githubServer: 'https://github.com/aminur-islam-sojib/clubsphere-backend',
  },
  {
    id: 3,
    name: 'SkillZen – Online Learning & Teaching Platform',
    webLink: 'https://skill-zen.vercel.app/',
    avatar: SkillZenBanner,
    category: 'Full Stack',
    techStack: ['Next.Js', 'TypeScrip', 'MongoDB', 'Node.Js'],
    githubClient: 'https://github.com/aminur-islam-sojib/skill-zen',
    githubServer: 'https://github.com/aminur-islam-sojib/skill-zen-server',
  },
  {
    id: 4,
    name: 'AabhawaX – Weather Information App',
    webLink: 'https://aabohawax.netlify.app/',
    avatar: AAbhawaX,
    category: 'Frontend',
    techStack: ['React', 'TypeScript', 'TanstackQuery'],
    githubClient: 'https://github.com/username/weather-dashboard',
  },
];

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>(
    {}
  );

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Initialize image loading state
  useEffect(() => {
    if (!loading) {
      const initialLoadingState = portfolioData.reduce(
        (acc, data) => {
          if (data.id) acc[data.id] = true;
          return acc;
        },
        {} as { [key: number]: boolean }
      );
      setImageLoading(initialLoadingState);
    }
  }, [loading]);

  // Handle image load
  const handleImageLoad = (id: number) => {
    setImageLoading((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="min-h-screen ">
      <HeaderGenerator children={'Portfolio'} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
      >
        {loading
          ? // Show skeletons while initially loading
            Array.from({ length: 7 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : // Show portfolio cards with individual image loading states
            portfolioData.map((data) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (data.id || 0) * 0.1 }}
                className="border border-[#383838] rounded-2xl  backdrop-blur-sm hover:border-[#FFDB70]/30 transition-all duration-300"
              >
                <div className="relative group w-auto h-40 rounded-t-xl overflow-hidden shadow-lg">
                  {/* Show skeleton while image is loading */}
                  {imageLoading[data.id!] && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}

                  <img
                    src={data.avatar}
                    alt={data.name}
                    onLoad={() => handleImageLoad(data.id!)}
                    className={`w-full h-full object-cover transition-all group-hover:scale-110 duration-300 group-hover:brightness-50 ${
                      imageLoading[data.id!] ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      target="_blank"
                      href={data.webLink}
                      rel="noopener noreferrer"
                      className="p-3 bg-[#383838] shadow-md hover:bg-[#4a4a4a] transition rounded-xl"
                      title="View Live Site"
                    >
                      <Eye color="#FFDB70" size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h1 className="font-medium text-white text-lg">
                    {data.name}
                  </h1>
                  <h2 className="text-sm text-gray-300 mt-1">
                    {data.category}
                  </h2>

                  {/* Tech Stack Badges */}
                  {data.techStack && data.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {data.techStack.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-2.5 py-1 bg-[#383838] text-[#FFDB70] rounded-full border border-[#4a4a4a] hover:border-[#FFDB70] transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {data.techStack.length > 3 && (
                        <span className="text-xs px-2.5 py-1 bg-[#383838]/50 text-gray-400 rounded-full border border-[#4a4a4a]">
                          +{data.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* GitHub Links */}
                  {(data.githubClient || data.githubServer) && (
                    <div className="flex gap-2 mt-4 pt-3 border-t border-[#383838]">
                      {data.githubClient && (
                        <a
                          href={data.githubClient}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#383838] hover:bg-[#4a4a4a] text-white text-xs rounded-lg border border-[#4a4a4a] hover:border-[#FFDB70] transition-all duration-200 group"
                        >
                          <Github
                            size={14}
                            className="group-hover:text-[#FFDB70] transition-colors"
                          />
                          <span>{data.githubServer ? 'Client' : 'Code'}</span>
                        </a>
                      )}
                      {data.githubServer && (
                        <a
                          href={data.githubServer}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#383838] hover:bg-[#4a4a4a] text-white text-xs rounded-lg border border-[#4a4a4a] hover:border-[#FFDB70] transition-all duration-200 group"
                        >
                          <Github
                            size={14}
                            className="group-hover:text-[#FFDB70] transition-colors"
                          />
                          <span>Server</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
