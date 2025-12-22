import { useEffect, useRef } from 'react';
import logo from '../assets/logo-epic.png';
import heroVideo from '../assets/epic_hero.mp4';
import EventCard from './EventCard';

export default function Hero({ nextEvent }) {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      logo.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none opacity-90"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <img
            ref={logoRef}
            src={logo}
            alt="EPIC Logo"
            className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-[0_0_30px_rgba(255,0,110,0.8)]"
          />
        </div>

        {/* Next Event Card */}
        {nextEvent && (
          <div className="w-full max-w-sm mx-auto">
            <p className="text-sm font-bold tracking-widest mb-4 text-center">
              <span className="text-neon-red drop-shadow-[0_0_20px_rgba(255,0,110,0.9)]">PROXIMA </span>
              <span className="text-white drop-shadow-[0_0_20px_rgba(6,255,196,0.9)]">FECHA</span>
            </p>
            <div className="shadow-[0_0_40px_rgba(255,255,255,0.3)] rounded-2xl">
              <EventCard event={nextEvent} isUpcoming={true} />
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-cyan rounded-full mt-1 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
