import { motion } from 'framer-motion';
import { ArrowRight, Scan } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center pt-32 pb-16 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface/20 to-transparent pointer-events-none" />
      
      <div className="container-default relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left: Text Content */}
        <div className="max-w-[700px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-borderDefault text-accent text-xs font-bold tracking-[0.15em] uppercase mb-8 shadow-lg"
          >
            <Scan size={14} />
            <span>AR Measurement, Reimagined</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-extrabold tracking-tight text-primaryText leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)' }}
          >
            Measure the <br /> Real World. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentBright">
              With Augmented Reality.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-secondaryText mb-10 max-w-lg leading-relaxed font-medium"
          >
            Smart AR Measure transforms your smartphone camera into a powerful measurement tool, helping you measure real-world objects and spaces with precision.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="#features"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-surface text-primaryText font-semibold text-lg border border-borderDefault hover:bg-elevated transition-all"
            >
              Explore Features
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[650px] flex justify-center items-center mt-12 lg:mt-0"
        >
          {/* Detailed Smartphone Mockup */}
          <div className="relative w-full max-w-[320px] aspect-[9/19.5] bg-[#000] rounded-[48px] border-[8px] border-[#1f2937] shadow-2xl overflow-hidden shadow-accent/10">
            
            {/* Screen Content */}
            <div className="absolute inset-0 bg-background overflow-hidden flex justify-center items-center">
              <img 
                src="/app-home-screen.jpg" 
                alt="Smart AR Measure app home screen showing AR measurement interface" 
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
            
            {/* Device Frame Reflection/Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
            {/* Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1f2937] rounded-b-3xl"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
