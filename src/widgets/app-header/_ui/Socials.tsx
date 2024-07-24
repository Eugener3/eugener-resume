import Link from 'next/link';

import VkIcon from '@/src/shared/ui/assets/socials/VkIcon';
import GithubIcon from '@/src/shared/ui/assets/socials/GithubIcon';
import TelegramIcon from '@/src/shared/ui/assets/socials/TelegramIcon';

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
