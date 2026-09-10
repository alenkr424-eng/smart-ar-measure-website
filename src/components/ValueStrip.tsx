import { Cpu, Zap, Maximize, Smartphone } from 'lucide-react';

const values = [
  { icon: <Cpu size={18} />, text: 'AR Powered' },
  { icon: <Zap size={18} />, text: 'Fast Measurements' },
  { icon: <Maximize size={18} />, text: 'Simple Interface' },
  { icon: <Smartphone size={18} />, text: 'Android Ready' },
];

export default function ValueStrip() {
  return (
    <div className="w-full bg-secondary py-8 border-y border-borderDefault">
      <div className="container-default">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-6">
          {values.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-secondaryText hover:text-primaryText transition-colors">
              <div className="text-accent">
                {item.icon}
              </div>
              <span className="font-bold text-xs tracking-[0.1em] uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
