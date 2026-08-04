import { useEffect, useState } from 'react';
import { X, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NewPortfolioNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    // Check if user has already dismissed the notice in this session
    try {
      const dismissed = sessionStorage.getItem('new_portfolio_notice_dismissed');
      if (dismissed === 'true') {
        return;
      }
    } catch {
      // Fallback for restricted storage environments
    }

    setIsDismissed(false);

    // Delay popup by 4.5 seconds to avoid Google intrusive interstitial penalty
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem('new_portfolio_notice_dismissed', 'true');
    } catch {
      // Ignore storage errors
    }
  };

  if (isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm p-4 rounded-2xl bg-[#2b2b2c]/95 border border-[#383838] shadow-2xl backdrop-blur-md text-white"
          role="region"
          aria-label="New Portfolio Notification"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Sparkles className="w-4 h-4 text-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                New Portfolio
              </span>
            </div>

            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2 text-sm text-gray-200 leading-snug">
            I&apos;ve launched a brand new portfolio! Check it out for updated projects and design.
          </p>

          <div className="mt-3.5 flex items-center justify-end gap-2">
            <button
              onClick={handleDismiss}
              className="text-xs px-3 py-1.5 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              Dismiss
            </button>
            <a
              href="https://sojibahmed.vercel.app/"
              target="_blank"
              rel="noopener"
              onClick={handleDismiss}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg bg-primary text-[#1a1a1a] hover:bg-primary/90 transition-all shadow-md font-semibold"
            >
              <span>Visit New Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
