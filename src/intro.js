// The ARICORD intro overlay only plays when the site is first opened on the
// home page, not on every client-side visit back to it. Home's typed effects
// read this to wait for the overlay before they start.
export const intro = {
  pending: typeof window !== 'undefined' && window.location.pathname === '/',
};
