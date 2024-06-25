import React from 'react';
import Link from 'next/link';
import TelegramIcon from '../../assets/socials/TelegramIcon';
import GithubIcon from '../../assets/socials/GithubIcon';
import VkIcon from '../../assets/socials/VkIcon';

import css from './styles/socials.module.scss';

interface ISocailsItems {
  title: string;
  href: string;
  image: React.ReactNode;
}

const Socials: React.FC = () => {
  const socialsItems: ISocailsItems[] = [
    {
      title: 'github',
      href: 'https://github.com/Eugener3',
      image: <GithubIcon />,
    },
    {
      title: 'telegram',
      href: 'https://t.me/E_Sora',
      image: <TelegramIcon />,
    },
    {
      title: 'VK',
      href: 'https://vk.com/eudiy',
      image: <VkIcon />,
    },
  ];

  return (
    <div className={css.wrapper}>
      {socialsItems.map((socialsItem, index) => (
        <Link
          target="_blank"
          key={index}
          title={socialsItem.title}
          href={socialsItem.href}
        >
          {socialsItem.image}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
