import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Info, Calendar } from 'lucide-react';

const items = [
  { id: 0, name: '2000', image: '/presidents/2000.jpeg', desc: 'The turn of the millennium and the Y2K transition.', category: 'Millennium', event: 'New Era' },
  { id: 1, name: '2001', image: '/presidents/2001.jpeg', desc: 'A year that redefined global security and international relations.', category: 'Global Shift', event: 'Security Reform' },
  { id: 2, name: '2002', image: '/presidents/2002.jpeg', desc: 'The Euro currency is officially introduced in 12 nations.', category: 'Economy', event: 'Euro Launch' },
  { id: 3, name: '2003', image: '/presidents/2003.jpeg', desc: 'The Human Genome Project is declared complete.', category: 'Science', event: 'Genome Map' },
  { id: 4, name: '2004', image: '/presidents/2004.jpeg', desc: 'Launch of major social media platforms and EU expansion.', category: 'Social', event: 'Connectivity' },
  { id: 5, name: '2005', image: '/presidents/2005.jpeg', desc: 'The rise of video sharing platforms and digital content.', category: 'Media', event: 'Video Era' },
  { id: 6, name: '2006', image: '/presidents/2006.jpeg', desc: 'Growth of the mobile web and micro-blogging services.', category: 'Tech', event: 'Micro-blogging' },
  { id: 7, name: '2007', image: '/presidents/2007.jpeg', desc: 'Introduction of the first modern smartphone, changing tech forever.', category: 'Innovation', event: 'Smartphone' },
  { id: 8, name: '2008', image: '/presidents/2008.jpeg', desc: 'A historic US election and global economic shifts.', category: 'Politics', event: 'Election' },
  { id: 9, name: '2009', image: '/presidents/2009.jpeg', desc: 'The birth of blockchain technology and Bitcoin.', category: 'Finance', event: 'Crypto Birth' },
  { id: 10, name: '2010', image: '/presidents/2010.jpeg', desc: 'The launch of the first modern tablet computing devices.', category: 'Tech', event: 'Tablet Era' },
  { id: 11, name: '2011', image: '/presidents/2011.jpeg', desc: 'The Arab Spring movements reshape Middle Eastern politics.', category: 'Global', event: 'Arab Spring' },
  { id: 12, name: '2012', image: '/presidents/2012.jpeg', desc: 'Discovery of the Higgs Boson at CERN.', category: 'Science', event: 'God Particle' },
  { id: 13, name: '2013', image: '/presidents/2013.jpeg', desc: 'Global surveillance disclosures spark privacy debates.', category: 'Privacy', event: 'Data Security' },
  { id: 14, name: '2014', image: '/presidents/2014.jpeg', desc: 'The rise of wearable technology and smart watches.', category: 'Tech', event: 'Wearables' },
  { id: 15, name: '2015', image: '/presidents/2015.jpeg', desc: 'The Paris Agreement on climate change is signed.', category: 'Environment', event: 'Climate Pact' },
  { id: 16, name: '2016', image: '/presidents/2016.jpeg', desc: 'Significant shifts in Western political alliances and Brexit.', category: 'Politics', event: 'Brexit Vote' },
  { id: 17, name: '2017', image: '/presidents/2017.jpeg', desc: 'The Great American Solar Eclipse spans the continent.', category: 'Nature', event: 'Solar Eclipse' },
  { id: 18, name: '2018', image: '/presidents/2018.jpeg', desc: 'Advancements in private space flight and reusable rockets.', category: 'Space', event: 'Falcon Heavy' },
  { id: 19, name: '2019', image: '/presidents/2019.jpeg', desc: 'The first ever image of a Black Hole is captured.', category: 'Science', event: 'Black Hole' },
  { id: 20, name: '2020', image: '/presidents/2020.jpeg', desc: 'A global pandemic transforms work and social life.', category: 'Health', event: 'Global Lockdown' },
  { id: 21, name: '2021', image: '/presidents/2021.jpeg', desc: 'The mission to Mars with the Perseverance rover.', category: 'Space', event: 'Mars Landing' },
  { id: 22, name: '2022', image: '/presidents/2022.jpeg', desc: 'The James Webb Telescope sends back its first images.', category: 'Science', event: 'Webb Images' },
  { id: 23, name: '2023', image: '/presidents/2023.jpeg', desc: 'Generative AI becomes a mainstream global phenomenon.', category: 'AI', event: 'ChatGPT Era' },
  { id: 24, name: '2024', image: '/presidents/2024.jpeg', desc: 'Focus on global elections and rapid AI integration.', category: 'Current', event: 'Election Year' },
  { id: 25, name: '2025', image: '/presidents/2025.jpeg', desc: 'Pioneering clean energy transitions and quantum computing.', category: 'Pulse', event: 'Pulse' },
];

const HistorySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  const onTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrev();
  };

  const getCardStyle = (index) => {
    const total = items.length;
    let diff = index - activeIndex;
    
    // Circular wrap logic
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const isActive = diff === 0;
    const isNeighbor = Math.abs(diff) <= 1;
    const isVisible = Math.abs(diff) <= 2; // Render up to 2 items away for smooth motion

    return {
      zIndex: isActive ? 40 : 40 - Math.abs(diff) * 10,
      opacity: isActive ? 1 : isVisible ? 0.6 : 0,
      transform: `
        translateX(${diff * 180}px) 
        scale(${isActive ? 1.1 : 0.8}) 
        rotateY(${diff * -20}deg)
        translateZ(${isActive ? 0 : -100}px)
      `,
      pointerEvents: isActive || isNeighbor ? 'auto' : 'none',
    };
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center overflow-hidden p-4 font-sans">
      
      {/* Background Year Indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.03] select-none pointer-events-none">
        {items[activeIndex].name}
      </div>

      <h1 className="text-4xl md:text-6xl font-black tracking-[0.2em] mb-16 uppercase text-white/40">
        Coral In History
      </h1>

      <div 
        className="relative w-full max-w-5xl h-[500px] flex items-center justify-center [perspective:1500px]"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        {/* Nav Buttons */}
        <button onClick={handlePrev} className="absolute left-0 md:-left-12 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md transition border border-white/10">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className="absolute right-0 md:-right-12 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md transition border border-white/10">
          <ChevronRight />
        </button>

        {/* Cards Stack */}
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => index === activeIndex ? setSelectedItem(item) : setActiveIndex(index)}
            className="absolute w-64 h-80 md:w-80 md:h-[420px] bg-[#121212] rounded-[2.5rem] shadow-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden border border-white/10 group"
            style={getCardStyle(index)}
          >
            <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-10 left-8">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">{item.category}</span>
              <h3 className="text-4xl font-black">{item.name}</h3>
            </div>
            
            {index === activeIndex && (
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 animate-pulse">
                <Info size={20} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-red-600 transition-all duration-500" 
          style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
        />
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0f0f0f] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl animate-modal-in overflow-hidden">
            <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-64 rounded-3xl overflow-hidden shadow-2xl">
                <img src={selectedItem.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <Calendar size={16} />
                  <span className="font-bold uppercase tracking-widest text-xs">{selectedItem.event}</span>
                </div>
                <h3 className="text-6xl font-black mb-4">{selectedItem.name}</h3>
                <p className="text-white/60 leading-relaxed text-lg italic">
                  "{selectedItem.desc}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.9) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in { animation: modalIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      `}</style>
    </div>
  );
};

export default HistorySwiper;