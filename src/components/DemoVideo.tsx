import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function DemoVideo() {
  return (
    <section id="demo" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container-default relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-elevated border border-borderAccent text-accent text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm"
          >
            <Play size={12} strokeWidth={2.5} aria-hidden="true" />
            Live Demo
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold text-primaryText tracking-tight mb-4"
          >
            See it in action.{' '}
            <span className="text-mutedText">Instantly.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-secondaryText text-lg leading-relaxed max-w-lg mx-auto"
          >
            Watch Smart AR Measure detect surfaces and deliver precise measurements in real time.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full max-w-3xl mx-auto"
        >
          {/* Glow border effect */}
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-accent/20 via-transparent to-accent/10 pointer-events-none z-10" />

          {/* Video wrapper */}
          <div className="relative rounded-[26px] overflow-hidden border border-borderDefault bg-background shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
            {/* Inner accent line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent z-20" />

            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
              style={{ maxHeight: '70vh' }}
              aria-label="Smart AR Measure app demo video showing real-time AR distance measurement"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
