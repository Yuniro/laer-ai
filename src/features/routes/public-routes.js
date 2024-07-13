import Loadable from 'components/loadable';
import { ModalProvider } from 'contexts/modal-context';
import { StatusProvider } from 'contexts/status-context';
import PublicLayout from 'features/pages/layout';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const LandingPage = Loadable(lazy(() => import('features/pages/landing')));
const AboutUsPage = Loadable(lazy(() => import('features/pages/aboutus')));
const TermsPage = Loadable(lazy(() => import('features/pages/terms/terms')));
const Privacy = Loadable(lazy(() => import('features/pages/terms/privacy')));
const SecurityPage = Loadable(lazy(() => import('features/pages/security')));

const PublicRoutes = {
  path: '/',
  element: (
    <ModalProvider>
      <StatusProvider>
        <PublicLayout />
      </StatusProvider>
    </ModalProvider>
  ),
  children: [
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/aida',
      element: <Navigate to="/" replace />
    },
    {
      path: '/about-us',
      element: <AboutUsPage />
    },
    {
      path: '/terms-of-service',
      element: <TermsPage />
    },
    {
      path: '/privacy',
      element: <Privacy />
    },
    {
      path: '/security',
      element: <SecurityPage />
    }
  ]
};

export default PublicRoutes;
