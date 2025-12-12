import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background video - place Construction.mp4 in public/assets/Construction.mp4 */}
      <video className="hero-video" src="/assets/Construction.mp4" autoPlay muted loop playsInline />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="rounded-2xl bg-transparent text-white p-12 shadow-2xl lg:pr-56" style={{textShadow: '0 6px 18px rgba(0,0,0,0.6)'}}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Professional Construction Services</h2>
          <p className="text-lg md:text-xl mb-6 opacity-95">Precision in every project — from planning to execution.</p>
          <div className="flex justify-center">
            <a href="#contact" className="btn-primary">Request a Quote</a>
          </div>
        </div>

        {/* Decorative circular photos on the right (hidden on small screens) */}
        <div className="hidden lg:block absolute right-8 top-8">
          <div className="hero-circle mb-6">
            <img src="assets/Construction_image.jpg" alt="construction-1" />
          </div>
          <div className="hero-circle mt-6" style={{width:140,height:140,borderWidth:6}}>
            <img src="assets/Construction_image2.jpg" alt="construction-2" />
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 80C120 40 300 0 720 40C1140 80 1320 120 1440 80V120H0V80Z" fill="white" />
      </svg>
    </section>
  );
};

export default Hero;
