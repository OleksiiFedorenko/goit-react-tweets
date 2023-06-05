import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import HomeSkeleton from 'components/Loaders/HomeSkeleton';
import TweetsSkeleton from 'components/Loaders/TweetsSkeleton';
import Loader from 'components/Loaders/Loader';

const Layout = () => {
  const { pathname } = useLocation();

  const showSkeleton = path => {
    if (path === '/') return <HomeSkeleton />;
    if (path === '/tweets') return <TweetsSkeleton />;
    return <Loader />;
  };

  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={showSkeleton(pathname)}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
