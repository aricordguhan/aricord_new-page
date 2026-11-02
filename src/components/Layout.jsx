import { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TermsModal from './TermsModal';
import Intro from './Intro';
import { useScrollReveal } from '../hooks/motion';
import { intro } from '../intro';

// Scroll to the top on page change, or to the #hash target when there is one
function useScrollOnNavigate(pathname, hash) {
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function Layout() {
  const { pathname, hash } = useLocation();
  const mainRef = useRef(null);
  const termsBtnRef = useRef(null);
  const [showIntro, setShowIntro] = useState(intro.pending);
  const [termsOpen, setTermsOpen] = useState(false);

  useScrollOnNavigate(pathname, hash);
  useScrollReveal(mainRef, pathname);

  const hideIntro = useCallback(() => setShowIntro(false), []);
  const closeTerms = useCallback(() => {
    setTermsOpen(false);
    termsBtnRef.current?.focus();
  }, []);

  return (
    <>
      {showIntro && <Intro onDone={hideIntro} />}

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" ref={mainRef}>
        <Outlet />
      </main>

      <Footer termsBtnRef={termsBtnRef} onOpenTerms={() => setTermsOpen(true)} />
      <TermsModal open={termsOpen} onClose={closeTerms} />
    </>
  );
}
