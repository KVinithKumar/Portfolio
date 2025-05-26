import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'three/src/math/MathUtils';

const HeroBackground = () => {
  function Stars(props: any) {
    const ref = useRef<any>();
    const sphere = random.randFloatSpread;
    const positions = Array.from({ length: 3000 }, () => sphere(100));
    
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    });
    
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color="#4F46E5"
            size={0.2}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  }

  return (
    <div className="absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <HeroBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-3/5 text-center md:text-left mt-8 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-indigo-600 dark:text-indigo-400 text-lg font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Vinith Kumar
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Full Stack Developer & AI Enthusiast
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Crafting innovative web solutions and AI applications. Passionate about creating impactful digital experiences through code.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a 
                href="#projects" 
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-center"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-60 h-60 md:w-80 md:h-80 relative">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-100 opacity-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <img 
                src="/vinith-profile.jpg" 
                alt="Vinith Kumar" 
                className="w-full h-full object-cover rounded-full p-2 bg-white dark:bg-gray-800"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;