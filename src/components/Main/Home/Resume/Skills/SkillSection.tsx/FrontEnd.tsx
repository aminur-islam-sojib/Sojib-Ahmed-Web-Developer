import { FolderCode } from 'lucide-react';
import { motion } from 'framer-motion';

const frontendSkills = [
  { id: 104, name: 'React', percentage: 75 },
  { id: 107, name: 'NextJS', percentage: 75 },
  { id: 105, name: 'TypeScript', percentage: 70 },
  { id: 103, name: 'JavaScript', percentage: 80 },
  { id: 106, name: 'Tailwind CSS', percentage: 80 },
];

const FrontEnd = () => {
  return (
    <div className="px-2">
      <div className="relative border-l border-gray-500 pl-3">
        {/* Icon Section */}
        <motion.section
          className="absolute -left-4"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring', stiffness: 200 }}
        >
          <div className="bgIcon w-fit p-1 rounded">
            <FolderCode color="var(--primary)" />
          </div>
        </motion.section>

        {/* Title */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-xl font-medium p-1 pl-5 text-white">Frontend</h1>
        </motion.section>

        {/* Skills List */}
        <div className="pl-5 mt-3 flex flex-col gap-2">
          {frontendSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Dot Indicator */}
              <motion.span
                className="skillsDotIndicator absolute mt-[4px] -left-[37px] w-2 h-2 z-10 shadow-md"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 45 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.2,
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
                  className="h-full bg-primary rounded relative"
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1 + 0.3,
                    ease: 'easeOut',
                  }}
                >
                  {/* Percentage Tooltip */}
                  <motion.div
                    className="absolute -top-8 -right-2.5 z-10 bg-green-400 text-gray-900 font-medium px-1 py-0.5 rounded text-xs whitespace-nowrap"
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 1,
                    }}
                  >
                    {skill.percentage}%{/* Arrow/Triangle */}
                    <div
                      style={{ zIndex: -1 }}
                      className="absolute h-3 w-3 -bottom-0.5 right-3 bg-green-400 rotate-45"
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

export default FrontEnd;
