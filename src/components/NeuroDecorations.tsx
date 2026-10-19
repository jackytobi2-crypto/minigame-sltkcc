import React from 'react';

export const NeuroDecorations: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden select-none z-0">
      {/* Background radial crimson wash */}
      <div 
        className="absolute top-0 right-0 w-[580px] h-[580px] rounded-full blur-3xl opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(225, 29, 72, 0.15) 0%, rgba(254, 205, 211, 0.08) 50%, transparent 70%)'
        }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-[620px] h-[620px] rounded-full blur-3xl opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(185, 28, 28, 0.12) 0%, rgba(254, 226, 226, 0.08) 50%, transparent 70%)'
        }}
      />

      {/* Top-Right: Anatomical Cerebral Cortex & Synaptic Node Linework */}
      <svg
        className="absolute -top-12 -right-12 w-[440px] h-[440px] text-red-600 opacity-20"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain hemisphere silhouette with cortical convolutions */}
        <path
          d="M200 60 C 260 55, 340 90, 360 160 C 375 210, 350 270, 310 310 C 280 340, 230 355, 180 345 C 130 335, 80 295, 75 230 C 70 170, 110 90, 170 65 Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeDasharray="4 3"
        />
        {/* Frontal & Parietal Sulci / Convolutions */}
        <path d="M190 70 Q 220 120 180 160 T 230 220" stroke="currentColor" strokeWidth="1.5" />
        <path d="M250 85 Q 280 130 240 180 T 290 240" stroke="currentColor" strokeWidth="1.5" />
        <path d="M140 100 Q 170 150 130 200 T 160 270" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 160 Q 150 180 120 240 T 180 300" stroke="currentColor" strokeWidth="1.5" />
        <path d="M300 130 Q 330 180 290 220 T 320 290" stroke="currentColor" strokeWidth="1.5" />

        {/* Central Sulcus division line */}
        <path d="M210 65 Q 240 140 190 230" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

        {/* Synapse transmitter nodes */}
        <circle cx="210" cy="65" r="4" fill="currentColor" />
        <circle cx="240" cy="140" r="3.5" fill="currentColor" />
        <circle cx="190" cy="230" r="4.5" fill="currentColor" />
        <circle cx="270" cy="180" r="3" fill="currentColor" />
        <circle cx="150" cy="130" r="3.5" fill="currentColor" />
        <line x1="210" y1="65" x2="270" y2="180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="150" y1="130" x2="190" y2="230" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      </svg>

      {/* Top-Left: Psychology Psi Symbol (Ψ) & Scientific coordinate frame */}
      <div className="absolute top-16 left-6 md:left-12 flex items-center gap-4 opacity-25">
        <svg className="w-24 h-24 text-red-700" viewBox="0 0 100 100" fill="none">
          {/* Psychology Greek letter Psi (Ψ) */}
          <path
            d="M50 15 V 85 M50 85 L 42 85 M50 85 L 58 85"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M22 28 C 22 55, 38 68, 50 68 C 62 68, 78 55, 78 28"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path d="M16 28 H 28 M72 28 H 84" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="15" r="3" fill="currentColor" />
        </svg>
        <div className="hidden lg:block text-xs font-mono text-red-900/60 leading-tight">
          <div className="font-bold tracking-wider text-red-800">PSYCHOLOGIA // Ψ</div>
          <div>Cortex Cerebri</div>
          <div>Reflexus Condicionalis</div>
        </div>
      </div>

      {/* Bottom-Left: Action Potential Graph (+40mV to -70mV) */}
      <div className="absolute bottom-6 left-6 md:left-12 max-w-xs opacity-25 hidden sm:block">
        <svg className="w-56 h-28 text-red-600" viewBox="0 0 200 100" fill="none">
          {/* Baseline axes */}
          <line x1="20" y1="80" x2="190" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="20" y1="10" x2="20" y2="90" stroke="currentColor" strokeWidth="1" />
          {/* Threshold marker -55mV */}
          <line x1="20" y1="65" x2="190" y2="65" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.5" />
          {/* Action Potential Spike curve */}
          <path
            d="M20 80 L 50 80 Q 60 80 68 65 L 85 18 Q 90 12 95 24 L 115 86 Q 125 94 140 80 L 190 80"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="25" y="24" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">+40mV (Na+)</text>
          <text x="25" y="62" fill="currentColor" fontSize="7" fontFamily="monospace">-55mV (Ngưỡng)</text>
          <text x="25" y="88" fill="currentColor" fontSize="7" fontFamily="monospace">-70mV (Nghỉ)</text>
        </svg>
        <p className="text-[10px] font-mono text-red-900/50 mt-1 uppercase tracking-wider">
          Điện thế hoạt động nơ-ron (Action Potential)
        </p>
      </div>

      {/* Bottom-Right: Synaptic Cleft & Vesicles Motif */}
      <div className="absolute -bottom-8 right-8 md:right-16 opacity-20 hidden md:block">
        <svg className="w-64 h-48 text-rose-700" viewBox="0 0 240 180" fill="none">
          {/* Pre-synaptic button */}
          <path
            d="M40 20 C 60 70, 70 100, 110 110 C 140 115, 180 115, 210 90"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Post-synaptic membrane */}
          <path
            d="M30 60 C 50 110, 80 140, 130 145 C 170 148, 200 135, 230 115"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Neurotransmitter vesicles inside presynaptic terminal */}
          <circle cx="85" cy="55" r="7" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="85" cy="55" r="2.5" fill="currentColor" />
          <circle cx="115" cy="65" r="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="115" cy="65" r="3" fill="currentColor" />
          <circle cx="140" cy="50" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="140" cy="50" r="2" fill="currentColor" />

          {/* Neurotransmitter molecules in synaptic cleft */}
          <circle cx="95" cy="118" r="2" fill="currentColor" />
          <circle cx="110" cy="122" r="2.5" fill="currentColor" />
          <circle cx="125" cy="120" r="2" fill="currentColor" />
          <circle cx="145" cy="125" r="2" fill="currentColor" />
          <circle cx="160" cy="120" r="2.5" fill="currentColor" />

          {/* Receptor channels on postsynaptic membrane */}
          <rect x="75" y="128" width="6" height="8" rx="1.5" fill="currentColor" />
          <rect x="110" y="136" width="6" height="8" rx="1.5" fill="currentColor" />
          <rect x="150" y="137" width="6" height="8" rx="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Subtle brainwave continuous ribbon at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-8 text-rose-500 opacity-15"
        preserveAspectRatio="none"
        viewBox="0 0 1200 40"
        fill="none"
      >
        <path
          d="M0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 5 T 230 35 T 260 10 T 300 20 T 350 20 T 400 30 T 450 10 T 500 20 T 550 20 T 600 5 T 630 35 T 660 10 T 700 20 T 750 20 T 800 30 T 850 10 T 900 20 T 950 20 T 1000 5 T 1050 35 T 1100 20 T 1150 20 T 1200 20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
