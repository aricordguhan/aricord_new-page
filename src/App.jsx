import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { ROUTES } from './routes';

// React 19 hoists <title> and <meta> into the document head
function Page({ title, description, Component }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <Component />
    </>
  );
}

// Old static URLs (about.html, index.html#insights) redirect to their new routes;
// anything else unknown falls back to the home page, as the old server did.
function NotFound() {
  const { pathname, hash } = useLocation();
  const legacy = /^\/([a-z0-9-]+)\.html$/i.exec(pathname);
  const to = legacy && legacy[1] !== 'index' ? `/${legacy[1]}` : '/';
  return <Navigate to={to + hash} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {ROUTES.map(({ path, ...page }) => (
          <Route key={path} path={path} element={<Page {...page} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
