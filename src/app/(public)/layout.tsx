import type { PropsWithChildren } from 'react';

import AppHeader from '@/src/widgets/app-header/AppHeader';
import Footer from '@/src/widgets/footer/Footer';

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
