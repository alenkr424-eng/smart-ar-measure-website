import { motion } from 'framer-motion';
import { Camera, MapPin, Ruler } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Point your camera',
    desc: 'Open the app and scan the environment to detect surfaces.',
    icon: <Camera size={20} />,
  },
  {
    num: '02',
    title: 'Place points',
    desc: 'Tap to place the starting point, then move to place the end point.',
    icon: <MapPin size={20} />,
  },
  {
    num: '03',
    title: 'Get result',
    desc: 'Instantly view the precise distance right on your screen.',
    icon: <Ruler size={20} />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background relative">
      <div className="container-default">
        
        <div className="text-center mb-20 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primaryText tracking-tight mb-6"
          >
            Three steps. <br />
            <span className="text-mutedText">One simple measurement.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-borderDefault -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="relative w-[88px] h-[88px] rounded-full bg-elevated border border-borderDefault flex flex-col items-center justify-center shrink-0 shadow-lg mb-8 transition-transform group-hover:-translate-y-1">
                  <div className="text-accent mb-1">{step.icon}</div>
                  <span className="text-[10px] font-bold text-secondaryText tracking-widest uppercase">Step {step.num}</span>
                  {/* Subtle outer glow */}
                  <div className="absolute inset-0 rounded-full border border-borderAccent scale-110 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Step Content */}
                <div>
                  <h3 className="text-xl font-bold text-primaryText mb-3">{step.title}</h3>
                  <p className="text-secondaryText leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
