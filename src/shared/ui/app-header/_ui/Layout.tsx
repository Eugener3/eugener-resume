import React from 'react';
import css from './styles/layout.module.scss';

interface Layout {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  socials?: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ logo, nav, socials }) => {
  return (
    <header className={css.wrapper}>
      {logo}
      {nav}
      {socials}
    </header>
  );
};

export default Layout;
