import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full relative z-10 bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none"></div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 border-t border-slate-200/50 dark:border-slate-800/50 relative z-10">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="font-headline text-xl font-bold text-primary dark:text-primary-fixed">Ceylon Eco Quest</div>
          <p className="font-body text-sm tracking-wide text-on-surface-variant dark:text-slate-400 mt-2 max-w-xs mx-auto md:mx-0">
            Reconnect with Nature, Respect Every Step.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex gap-8">
            {/* <Link to="#" className="font-body text-sm tracking-wide text-on-surface-variant dark:text-slate-400 hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="font-body text-sm tracking-wide text-on-surface-variant dark:text-slate-400 hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="#" className="font-body text-sm tracking-wide text-on-surface-variant dark:text-slate-400 hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-colors duration-200">
              Contact Us
            </Link> */}
          </div>
          <p className="font-body text-sm tracking-wide text-on-surface-variant dark:text-slate-400 mt-4 md:mt-0 text-center md:text-left">
            © {new Date().getFullYear()} Ceylon Eco Quest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
