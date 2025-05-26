import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/KVinithKumar" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/kvinithkumar/" },
    { icon: <Twitter size={20} />, href: "https://x.com/VinithKumar30" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/vinith_kairamkonda" }
  ];
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              Vinith Kumar
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-5">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Vinith Kumar. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;