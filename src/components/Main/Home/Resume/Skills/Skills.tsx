import { motion } from 'motion/react';
import { lazy, Suspense } from 'react';
import { BrainCircuit } from 'lucide-react';

const BackEnd = lazy(() => import('./SkillSection.tsx/BackEnd'));
const FrontEnd = lazy(() => import('./SkillSection.tsx/FrontEnd'));
const SoftSkills = lazy(() => import('./SkillSection.tsx/SoftSkills'));
const VersionControls = lazy(
  () => import('./SkillSection.tsx/VersionControls')
);

const datas = [
  { id: 1, components: FrontEnd },
  { id: 2, components: BackEnd },
  { id: 3, components: VersionControls },
  // { id: 3, components: DesignTools },
  // { id: 3, components: ToolsAndOthers },
  { id: 3, components: SoftSkills },
];

const Skills = () => {
  return (
    <div className="px-3  md:px-10">
      <div className="relative border-l border-gray-500 pl-6  space-y-4">
        <section className="absolute -left-6">
          <div className="bgIcon w-fit p-3 rounded-xl">
            <BrainCircuit color="var(--primary)" />
          </div>
        </section>
        <section>
          <h1 className=" text-2xl font-medium p-3">Skills</h1>
        </section>

        {datas.length > 0
          ? datas.map((exp, index) => {
              const Component = exp.components;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative mb-10 md:mb-20"
                >
                  {/* Dot indicator */}
                  <span className="dotIndicator absolute mt-2 -left-[33px] w-4 h-4 rounded-full z-10 shadow-md"></span>

                  <div className=" rounded-xl pl-3">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Component />
                    </Suspense>
                  </div>
                </motion.div>
              );
            })
          : 'not added yet'}
      </div>
    </div>
  );
};

export default Skills;
