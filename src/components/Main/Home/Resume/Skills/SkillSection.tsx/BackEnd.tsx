import { DatabaseZap } from 'lucide-react';
import { motion } from 'framer-motion';

const backendSkills = [
  { id: 205, name: 'MongoDB', percentage: 80 },
  { id: 204, name: 'Node.js', percentage: 85 },
  { id: 203, name: 'ExpressJS', percentage: 85 },
];

const BackEnd = () => {
  return (
    <div className="px-2">
      <div className="relative border-l border-gray-500 pl-3">
        {/* Icon Section */}
        <motion.section
          className="absolute -left-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 200 }}
        >
          <div className="bgIcon w-fit p-1 rounded">
            <DatabaseZap color="var(--primary)" />
          </div>
        </motion.section>

        {/* Title */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-xl font-medium p-1 pl-5 text-white">Backend</h1>
        </motion.section>

        {/* Skills List */}
        <div className=" pl-5 mt-3 flex flex-col gap-2">
          {backendSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            >
              {/* Dot Indicator */}
              <motion.span
                className="skillsDotIndicator absolute mt-[4px] -left-[37px] w-2 h-2  z-10 shadow-md"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.4,
                  type: 'spring',
                  stiffness: 300,
                }}
              />

              {/* Skill Name */}
              <div className="text-sm text-gray-400">{skill.name}</div>

              {/* Skill Bar Container */}
              <div className="h-1 bg-gray-700 mt-2 rounded overflow-visible relative">
                {/* Animated Skill Bar */}
                <motion.div
                  className="h-full bg-[var(--primary)] rounded relative"
                  initial={{ width: '0%' }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1 + 0.5,
                    ease: 'easeOut',
                  }}
                >
                  {/* Percentage Tooltip */}
                  <motion.div
                    className="absolute -top-8  -right-2.5 z-10 bg-green-400 text-gray-900 font-medium px-1 py-0.5 rounded text-xs whitespace-nowrap"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 1.5,
                    }}
                  >
                    {skill.percentage}%{/* Arrow/Triangle */}
                    <div
                      style={{ zIndex: -1 }}
                      className="absolute  h-3 w-3 -bottom-0.5 right-3 bg-green-400 rotate-45 "
                    ></div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
