import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="container-default">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-widest text-secondaryText uppercase mb-6"
            >
              About Smart AR Measure
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-primaryText leading-[1.1] mb-6 tracking-tight"
            >
              Measurement, <br />
              <span className="text-mutedText">without the guesswork.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-secondaryText leading-relaxed max-w-lg"
            >
              Smart AR Measure uses advanced augmented reality technology to estimate real-world dimensions directly through your smartphone camera. No physical tape, no extra tools—just point, tap, and measure.
            </motion.p>
          </div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full rounded-3xl bg-surface border border-borderDefault overflow-hidden flex items-center justify-center shadow-2xl"
          >
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* AR Elements Simulation */}
            <div className="relative w-full max-w-[320px] h-[240px]">
              {/* Box Wireframe representing a physical object */}
              <div className="absolute inset-0 border border-white/10 rounded-xl transform perspective-1000 rotate-x-12 rotate-y-12 bg-white/[0.02]"></div>
              
              {/* Measurement Vector */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-accent/70 -translate-y-1/2">
                <div className="absolute left-0 w-3 h-3 bg-accent rounded-full -translate-y-1/2 -mt-[1px] shadow-[0_0_15px_rgba(56,189,248,0.8)]"></div>
                <div className="absolute right-0 w-3 h-3 bg-accent rounded-full -translate-y-1/2 -mt-[1px] shadow-[0_0_15px_rgba(56,189,248,0.8)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 bg-elevated px-4 py-1.5 rounded-lg border border-borderDefault text-sm font-bold text-white tracking-widest shadow-lg">
                  85.0 cm
                </div>
              </div>
              
              {/* Tracking dots */}
              <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-accent/60 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
