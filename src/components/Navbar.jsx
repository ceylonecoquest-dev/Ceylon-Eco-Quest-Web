import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/CEQ logo.png';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors duration-300 font-body rounded-full";

    if (isActive) {
      return `${baseClass} text-white bg-white/10`;
    }
    return `${baseClass} text-white/90 hover:text-white hover:bg-white/5`;
  };

  return (
    // <nav className="fixed top-4 w-full z-50 px-8 lg:px-16 flex justify-between items-center pointer-events-none">

    //   {/* Left: 48x48 Logo Circle */}
    //   <div className="w-20 h-20 rounded-full liquid-glass flex items-center justify-center flex-shrink-0 pointer-events-auto shadow-sm">
    //     {/* <Link to="/" className="w-full h-full flex items-center justify-center p-2"> */}
    //     <img
    //       alt="Ceylon Eco Quest Logo"
    //       className="w-full h-full object-contain"
    //       src={logo}
    //     />
    //     {/* </Link> */}
    //   </div>

    //   {/* Center: Links + CTA */}
    //   <div className="hidden md:flex items-center gap-3 pointer-events-auto">
    //     <div className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center shadow-sm">
    //       <Link className={getLinkClass('/')} to="/">Home</Link>
    //       <Link className={getLinkClass('/destinations')} to="/destinations">Destinations</Link>
    //       <Link className={getLinkClass('/about')} to="/about">About</Link>
    //       <Link className={getLinkClass('/gallery')} to="/gallery">Gallery</Link>
    //     </div>

    //     {/* <button className="bg-white text-black rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-1.5 hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap">
    //       Claim a Spot
    //       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //         <path d="M7 17L17 7" />
    //         <path d="M7 7h10v10" />
    //       </svg>
    //     </button> */}
    //   </div>

    //   {/* <div className="hidden md:flex items-center pointer-events-auto flex-shrink-0">
    //     <div className="liquid-glass rounded-full px-5 py-2.5 shadow-sm">
    //       <span className="text-sm font-semibold tracking-wide whitespace-nowrap text-white/90">
    //         Ceylon Eco Quest
    //       </span>
    //     </div>
    //   </div> */}

    //   <div className="hidden md:flex items-center pointer-events-auto flex-shrink-0">
    //     <span className="text-white font-bold text-base tracking-widest uppercase drop-shadow-md">
    //       Ceylon Eco Quest
    //     </span>
    //   </div>
    //   {/* Right: Spacer */}
    //   {/* <div className="w-12 h-12 flex-shrink-0 invisible hidden md:block"></div> */}
    // </nav>

    //--------------------------------------------------

    // <nav className="fixed top-4 w-full z-50 px-4 sm:px-8 lg:px-16 flex justify-between items-center pointer-events-none">

    //   {/* Left: Logo + Company Name */}
    //   <div className="flex items-center gap-3 pointer-events-auto flex-shrink-0">
    //     {/* Logo */}
    //     <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full liquid-glass flex items-center justify-center shadow-sm flex-shrink-0">
    //       <img
    //         alt="Ceylon Eco Quest Logo"
    //         className="w-full h-full object-contain"
    //         src={logo}
    //       />
    //     </div>

    //     {/* Company Name — hidden on small screens */}
    //     <div className="hidden sm:flex flex-col leading-tight">
    //       <span className="text-white font-bold text-sm md:text-base tracking-widest uppercase drop-shadow-md whitespace-nowrap">
    //         Ceylon Eco Quest
    //       </span>
    //     </div>
    //   </div>

    //   {/* Center: Nav Links */}
    //   <div className="hidden md:flex items-center pointer-events-auto">
    //     <div className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center shadow-sm">
    //       <Link className={getLinkClass('/')} to="/">Home</Link>
    //       <Link className={getLinkClass('/destinations')} to="/destinations">Destinations</Link>
    //       <Link className={getLinkClass('/about')} to="/about">About</Link>
    //       <Link className={getLinkClass('/gallery')} to="/gallery">Gallery</Link>
    //     </div>
    //   </div>

    //   {/* Right: Mobile menu button (sm only) / Spacer (md+) */}
    //   <div className="flex items-center pointer-events-auto flex-shrink-0">
    //     {/* Hamburger for mobile */}
    //     <button className="md:hidden liquid-glass rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
    //       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    //       </svg>
    //     </button>

    //     {/* Invisible spacer to balance layout on desktop */}
    //     <div className="hidden md:block w-16 lg:w-24 invisible" />
    //   </div>

    // </nav>

    //-------------------------------------------------------------------

    <nav className="fixed top-4 w-full z-50 px-4 sm:px-8 lg:px-16 flex items-center pointer-events-none">

      {/* Left: Logo + Company Name */}
      <div className="flex-1 flex items-center gap-3 pointer-events-auto">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full liquid-glass flex items-center justify-center shadow-sm flex-shrink-0">
          <img
            alt="Ceylon Eco Quest Logo"
            className="w-full h-full object-contain"
            src={logo}
          />
        </div>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-white font-bold text-sm md:text-base tracking-widest uppercase drop-shadow-md whitespace-nowrap">
            Ceylon Eco Quest
          </span>
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
        <button className="md:hidden liquid-glass rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </nav>

  );
};

export default Navbar;
