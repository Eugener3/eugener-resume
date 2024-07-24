import Link from 'next/link';
import React from 'react';

import css from './styles/navigation.module.scss';

interface INavItems {
  title: string;
  link: string;
}

const Navigation: React.FC = () => {
  const navItems: INavItems[] = [
    {
      title: 'Главная',
      link: '#',
    },
    {
      title: 'Обо мне',
      link: 'about-me',
    },
    {
      title: 'Навыки',
      link: 'skills',
    },
    {
      title: 'Качества',
      link: 'qualities',
    },
    {
      title: 'Товарищи',
      link: 'comrades',
    },
  ];

  return (
    <nav className={css.wrapper}>
      {navItems.map((navItem, index) => (
        <Link key={index} href={navItem.link}>
          {navItem.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
