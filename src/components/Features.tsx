import { motion } from 'framer-motion';
import { Ruler, Crosshair, Sparkles, Clock, Target } from 'lucide-react';

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary">
      <div className="container-default">
        
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primaryText tracking-tight mb-6 leading-tight"
          >
            Everything you need <br />
            <span className="text-mutedText">to measure smarter.</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Large Featured Card (Spans 8 columns on lg) */}
          <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-8 rounded-[24px] bg-surface border border-borderDefault p-8 md:p-10 flex flex-col justify-between group hover:border-borderAccent transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 h-full">
              <div className="max-w-md">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-borderAccent flex items-center justify-center text-accent mb-6">
                  <Crosshair size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primaryText mb-3">Real-Time AR Tracking</h3>
                <p className="text-secondaryText leading-relaxed">
                  Track measurement points directly within the camera view with high precision. The app intelligently anchors points to real-world surfaces, ensuring your measurements stay locked in place as you move.
                </p>
              </div>

              {/* Visual element */}
              <div className="mt-auto md:mt-0 w-full md:w-64 h-40 rounded-xl bg-elevated border border-borderDefault relative overflow-hidden flex-shrink-0 flex items-center justify-center shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent"></div>
                <div className="relative w-3/4 h-px bg-accent/50">
                  <div className="absolute left-0 w-3 h-3 rounded-full border-[2px] border-accent bg-elevated shadow-[0_0_10px_rgba(56,189,248,0.5)] -ml-1.5 -mt-1.5"></div>
                  <div className="absolute right-0 w-3 h-3 rounded-full border-[2px] border-accent bg-elevated shadow-[0_0_10px_rgba(56,189,248,0.5)] -mr-1.5 -mt-1.5"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Card (Spans 4 columns) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4 rounded-[24px] bg-surface border border-borderDefault p-8 flex flex-col group hover:border-borderAccent transition-colors">
            <div className="w-12 h-12 rounded-xl bg-elevated border border-borderDefault flex items-center justify-center text-primaryText mb-6 group-hover:text-accent group-hover:border-borderAccent transition-all">
              <Ruler size={24} />
            </div>
            <h3 className="text-xl font-bold text-primaryText mb-3">AR Distance</h3>
            <p className="text-secondaryText leading-relaxed">
              Measure the exact distance between any two points in the real world simply by tapping on your screen.
            </p>
          </motion.div>

          {/* Medium Card (Spans 4 columns) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4 rounded-[24px] bg-surface border border-borderDefault p-8 flex flex-col group hover:border-borderAccent transition-colors">
            <div className="w-12 h-12 rounded-xl bg-elevated border border-borderDefault flex items-center justify-center text-primaryText mb-6 group-hover:text-accent group-hover:border-borderAccent transition-all">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-primaryText mb-3">Simple & Easy</h3>
            <p className="text-secondaryText leading-relaxed">
              Designed to make spatial measurement accessible to everyone without a complicated interface.
            </p>
          </motion.div>

          {/* Small Feature (Spans 4 columns) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4 rounded-[24px] bg-surface border border-borderDefault p-8 flex flex-col group hover:border-borderAccent transition-colors">
            <div className="w-12 h-12 rounded-xl bg-elevated border border-borderDefault flex items-center justify-center text-primaryText mb-6 group-hover:text-accent group-hover:border-borderAccent transition-all">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-primaryText mb-2">Fast Results</h3>
            <p className="text-secondaryText leading-relaxed">
              Get measurements instantly without unnecessary steps or manual calibrations.
            </p>
          </motion.div>

          {/* Small Feature (Spans 4 columns) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4 rounded-[24px] bg-surface border border-borderDefault p-8 flex flex-col group hover:border-borderAccent transition-colors">
            <div className="w-12 h-12 rounded-xl bg-elevated border border-borderDefault flex items-center justify-center text-primaryText mb-6 group-hover:text-accent group-hover:border-borderAccent transition-all">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-primaryText mb-2">Clean Interface</h3>
            <p className="text-secondaryText leading-relaxed">
              Clear labels, minimal lines, and unobtrusive visual indicators that don't get in your way.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
