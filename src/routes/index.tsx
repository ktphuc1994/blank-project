import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import local components
import ErrorBoundary from '@Components/Error/ErrorBoundary';
import SuspenseLoading from '@Components/Loading/Suspense';
import PrivateRoute from '@Components/Auth/PrivateRoute';

// import local lazy components
const LoginPage = lazy(() => import('@pages/Login'));
const Layout = lazy(() => import('@/Components/Layout'));
const HomePage = lazy(() => import('@pages/Home'));
const AuctionPage = lazy(() => import('@pages/Auction'));
const NotFoundPage = lazy(() => import('@Components/NotFound'));

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<SuspenseLoading />}>
        <LoginPage />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: (
          <Suspense fallback={<SuspenseLoading />}>
            <Layout />
          </Suspense>
        ),
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/auction', element: <AuctionPage /> }
        ],
        errorElement: <ErrorBoundary />
      }
    ]
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<SuspenseLoading />}>
        <NotFoundPage />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
