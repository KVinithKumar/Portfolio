import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { experiences } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in the tech industry and the positions I've held.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 ml-3 md:ml-6 pl-8 pb-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-11 md:-left-14 bg-white dark:bg-gray-900 p-1">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                    <Calendar size={16} className="text-white" />
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {experience.position}
                  </h3>
                  <div className="flex justify-between items-start flex-wrap mb-3">
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {experience.company}
                    </p>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {experience.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>
                  {experience.link && (
                    <a 
                      href={experience.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors w-fit"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>View Details</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;