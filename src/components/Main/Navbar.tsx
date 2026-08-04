// Navbar.tsx
import { motion } from 'motion/react';
import { type Dispatch, type SetStateAction } from 'react';
import { toast } from 'sonner';

import { ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navLinks = ['about', 'resume', 'portfolio', 'contact', 'download cv'];

  const handleTabClick = (tab: string) => {
    if (tab === 'download cv') {
      // Create a temporary link element
      try {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Path to your file in public folder
        link.download = 'Sojib Ahmed - CV.pdf'; // Name of downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('CV Download Successfully!');
      } catch (error) {
        toast.error(`Something Went Wrong, ${JSON.stringify(error)}`);
      }
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full lg:w-auto flex justify-center lg:justify-end py-3 md:py-5 p-1 md:px-4 rounded-tr-xl rounded-tl-xl sm:rounded-tr-3xl sm:rounded-tl-3xl lg:px-10 lg:rounded-tl-none bg-[#2b2b2cbf] backdrop-blur-[5px] border-t-[1px] lg:border-[1px] border-[#383838] lg:rounded-tr-2xl lg:rounded-bl-2xl"
    >
      <div className="flex gap-2 sm:gap-3 lg:gap-5 flex-wrap justify-center lg:flex-nowrap items-center">
        {navLinks.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab)}
            className={`relative capitalize text-[13px] lg:text-[15px] cursor-pointer font-medium transition-colors duration-300 ease-in-out whitespace-nowrap ${
              activeTab === tab && tab !== 'download cv'
                ? 'text-primary'
                : 'text-white hover:text-gray-400'
            }`}
          >
            {activeTab === tab && tab !== 'download cv' && (
              <motion.span
                layoutId="activeTab"
                className="absolute -bottom-0.5 md:-bottom-1 left-0 right-0 h-[2px] bg-primary"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <motion.span
              initial={false}
              animate={{
                scale: activeTab === tab && tab !== 'download cv' ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {tab}
            </motion.span>
          </button>
        ))}

        <a
          href="https://sojibahmed.vercel.app/"
          target="_blank"
          rel="noopener"
          className="relative text-[13px] lg:text-[15px] cursor-pointer font-medium text-primary hover:text-primary/80 transition-colors duration-300 ease-in-out whitespace-nowrap flex items-center gap-1"
        >
          <span>New Portfolio</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
