import React, { useEffect, useState } from 'react';

const DotWebsite = () => {
  const [wingAngle, setWingAngle] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Wing flapping animation
    const wingInterval = setInterval(() => {
      setWingAngle(angle => {
        const newAngle = angle + 2;
        return newAngle >= 10 ? -10 : newAngle;
      });
    }, 50);

    // Floating movement animation
    const floatInterval = setInterval(() => {
      setPosition(pos => ({
        x: pos.x + Math.sin(Date.now() / 1000) * 0.5,
        y: pos.y + Math.cos(Date.now() / 1000) * 0.3
      }));
      setRotation(Math.sin(Date.now() / 1500) * 3);
    }, 50);

    return () => {
      clearInterval(wingInterval);
      clearInterval(floatInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
      {/* Header */}
      <header className="pt-8 pb-6 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-2">
          Meet Dot
        </h1>
        <p className="text-lg text-white drop-shadow">
          The friendly butterfly who loves to dance in the sky
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          {/* Dot's flying area */}
          <div className="aspect-video relative bg-gradient-to-b from-blue-100/50 to-blue-200/50 rounded-xl overflow-hidden">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Decorative clouds */}
              <g className="opacity-50">
                <path d="M50,50 Q70,40 90,50 Q110,60 130,50 Q150,40 170,50" 
                      fill="none" stroke="white" strokeWidth="8" />
                <path d="M250,80 Q270,70 290,80 Q310,90 330,80" 
                      fill="none" stroke="white" strokeWidth="8" />
                <path d="M150,200 Q170,190 190,200 Q210,210 230,200" 
                      fill="none" stroke="white" strokeWidth="8" />
              </g>

              {/* Animated Dot */}
              <g transform={`translate(${200 + position.x} ${150 + position.y}) rotate(${rotation})`}>
                {/* Wings with animation */}
                <g>
                  {/* Left wings */}
                  <g transform={`rotate(${-wingAngle} -10 -30)`}>
                    <path d="M-10 -30 Q-180 -80 -120 -160 Q-60 -180 -20 -90 Q-15 -40 -10 -30" 
                          fill="#FF9ECD" stroke="#D670A0" strokeWidth="2"/>
                    <path d="M-10 -15 Q-140 30 -80 90 Q-30 110 -15 30 Q-10 0 -10 -15" 
                          fill="#FF9ECD" stroke="#D670A0" strokeWidth="2"/>
                    <circle cx="-80" cy="-100" r="10" fill="#D670A0" opacity="0.7"/>
                    <circle cx="-60" cy="40" r="8" fill="#D670A0" opacity="0.7"/>
                    <path d="M-100 -120 Q-90 -110 -80 -120" fill="none" stroke="#D670A0" strokeWidth="2" opacity="0.7"/>
                  </g>

                  {/* Right wings */}
                  <g transform={`rotate(${wingAngle} 10 -30)`}>
                    <path d="M10 -30 Q180 -80 120 -160 Q60 -180 20 -90 Q15 -40 10 -30" 
                          fill="#FF9ECD" stroke="#D670A0" strokeWidth="2"/>
                    <path d="M10 -15 Q140 30 80 90 Q30 110 15 30 Q10 0 10 -15" 
                          fill="#FF9ECD" stroke="#D670A0" strokeWidth="2"/>
                    <circle cx="80" cy="-100" r="10" fill="#D670A0" opacity="0.7"/>
                    <circle cx="60" cy="40" r="8" fill="#D670A0" opacity="0.7"/>
                    <path d="M100 -120 Q90 -110 80 -120" fill="none" stroke="#D670A0" strokeWidth="2" opacity="0.7"/>
                  </g>
                </g>

                {/* Body */}
                <path d="M-10 -35 C-12 -20 -12 20 -10 35 C-5 40 5 40 10 35 C12 20 12 -20 10 -35 C5 -40 -5 -40 -10 -35" 
                      fill="#FFB6E1" stroke="#D670A0" strokeWidth="2"/>
                
                {/* Body segments */}
                <g opacity="0.6">
                  {[-25, -15, -5, 5, 15, 25].map(y => (
                    <path key={y} d={`M-10 ${y} H10`} stroke="#D670A0" strokeWidth="1.5"/>
                  ))}
                </g>
                
                {/* Head */}
                <circle cx="0" cy="-45" r="14" fill="#FFB6E1" stroke="#D670A0" strokeWidth="2"/>
                
                {/* Cheeks */}
                <g>
                  {[-8, 8].map(x => (
                    <g key={x}>
                      <circle cx={x} cy="-43" r="4" fill="#FFB6E1" stroke="#D670A0" strokeWidth="1.5"/>
                      <circle cx={x} cy="-43" r="2" fill="#FFCCE5"/>
                    </g>
                  ))}
                </g>
                
                {/* Eyes */}
                <g transform="translate(0 -48)">
                  <path d="M-6 0 Q-5 -4 -2 0 Q-5 4 -6 0 Z" fill="#333"/>
                  <circle cx="-4" cy="-1" r="1" fill="white"/>
                  <path d="M6 0 Q5 -4 2 0 Q5 4 6 0 Z" fill="#333"/>
                  <circle cx="4" cy="-1" r="1" fill="white"/>
                </g>
                
                {/* Smile */}
                <path d="M-4 -40 Q0 -37 4 -40" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                
                {/* Antennae */}
                <g>
                  {[-8, 8].map((x, i) => (
                    <g key={i}>
                      <path d={`M${x} -55 Q${x*2} -75 ${x*1.25} -90`} fill="none" stroke="#D670A0" strokeWidth="2"/>
                      <circle cx={x*1.25} cy="-90" r="4" fill="#D670A0"/>
                      <circle cx={x*1.25} cy="-90" r="2" fill="#FF9ECD"/>
                    </g>
                  ))}
                </g>
                
                {/* Arms */}
                <path d="M-10 -20 Q-20 -15 -18 -10" fill="none" stroke="#D670A0" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 -20 Q20 -15 18 -10" fill="none" stroke="#D670A0" strokeWidth="2" strokeLinecap="round"/>
                
                {/* Feet */}
                <path d="M-8 30 Q-12 40 -6 40" fill="none" stroke="#D670A0" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 30 Q12 40 6 40" fill="none" stroke="#D670A0" strokeWidth="2" strokeLinecap="round"/>
              </g>
            </svg>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-white/80 text-sm">
        <p>© 2025 Dot the Butterfly • Spreading joy one wing flap at a time</p>
      </footer>
    </div>
  );
};

export default DotWebsite;