import { motion } from 'framer-motion';

export default function AppShowcase() {
  return (
    <section id="screenshots" className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="container-default">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primaryText tracking-tight mb-4"
          >
            Designed around <br className="md:hidden" />
            <span className="text-mutedText">the measurement.</span>
          </motion.h2>
        </div>

        <div className="relative flex justify-center items-center mt-12">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 w-full max-w-5xl flex justify-center">
            
            {/* Center Mockup (Hero) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[340px] aspect-[9/19.5] bg-[#000] rounded-[48px] border-[8px] border-[#1f2937] shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden z-20 shadow-accent/10"
            >
              {/* Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1f2937] rounded-b-3xl z-30"></div>
              
              <div className="absolute inset-0 bg-background overflow-hidden flex justify-center items-center">
                <img 
                  src="/app-screenshot.jpg" 
                  alt="Smart AR Measure app showing AR distance measurement overlay on a real-world surface" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-[40px] z-20"></div>
            </motion.div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
