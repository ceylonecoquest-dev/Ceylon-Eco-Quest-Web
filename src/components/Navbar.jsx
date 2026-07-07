import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/CEQ logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors duration-300 font-body rounded-full";

    if (isActive) {
      return `${baseClass} text-blue bg-white/10`;
    }
    return `${baseClass} text-blue/90 hover:text-white hover:bg-white/5`;
  };

  const getMobileLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClass = "block text-2xl font-headline font-bold transition-colors py-2";
    if (isActive) {
      return `${baseClass} text-white`;
    }
    return `${baseClass} text-white/60 hover:text-white`;
  };

  return (
    <>
      <nav className="fixed top-2 w-full z-50 px-4 sm:px-8 lg:px-16 flex items-center pointer-events-none">

        {/* Left: Logo + Company Name */}
        <div className="flex-1 flex items-center gap-3 pointer-events-auto">
          <Link to="/" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full liquid-glass flex items-center justify-center shadow-sm flex-shrink-0">
            <img
              alt="Ceylon Eco Quest Logo"
              className="w-full h-full object-contain"
              src={logo}
            />
          </Link>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-bold text-sm md:text-base tracking-widest uppercase drop-shadow-md whitespace-nowrap">
              Ceylon Eco Quest
            </span>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-[60] md:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          style={{
            backgroundColor: 'rgba(4, 30, 66, 0.95)', // swap in your actual primary color's RGB
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="flex flex-col items-center gap-4 ">
            <Link className={getMobileLinkClass('/')} to="/">Home</Link>
            <Link className={getMobileLinkClass('/destinations')} to="/destinations">Destinations</Link>
            <Link className={getMobileLinkClass('/about')} to="/about">About</Link>
            <Link className={getMobileLinkClass('/gallery')} to="/gallery">Gallery</Link>
          </div>

          <div className="absolute bottom-12 text-white/50 text-sm font-label tracking-widest uppercase">
            Ceylon Eco Quest
          </div>
        </div>

        {/* Center: Nav Links — truly centered */}
        <div className="hidden md:flex items-center pointer-events-auto flex-shrink-0">
          <div className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center shadow-sm">
            <Link className={getLinkClass('/')} to="/">Home</Link>
            <Link className={getLinkClass('/destinations')} to="/destinations">Destinations</Link>
            <Link className={getLinkClass('/about')} to="/about">About</Link>
            <Link className={getLinkClass('/gallery')} to="/gallery">Gallery</Link>
          </div>
        </div>

        {/* Right: Spacer (mirrors left) / Hamburger on mobile */}
        <div className="flex-1 flex justify-end items-center pointer-events-auto">
          {/* <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden liquid-glass rounded-full w-10 h-10 flex items-center justify-center shadow-sm z-[40]"
          > */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden liquid-glass rounded-full w-10 h-10 flex items-center justify-center shadow-sm z-[70]"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary/95 backdrop-blur-xl z-20 md:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center gap-4 ">
          <Link className={getMobileLinkClass('/')} to="/">Home</Link>
          <Link className={getMobileLinkClass('/destinations')} to="/destinations">Destinations</Link>
          <Link className={getMobileLinkClass('/about')} to="/about">About</Link>
          <Link className={getMobileLinkClass('/gallery')} to="/gallery">Gallery</Link>
        </div>

        <div className="absolute bottom-12 text-white/50 text-sm font-label tracking-widest uppercase">
          Ceylon Eco Quest
        </div>
      </div>
    </>
  );
};

export default Navbar;
