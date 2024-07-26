import css from './card.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import GithubIcon from '@/src/shared/ui/assets/socials/GithubIcon';
import TelegramIcon from '@/src/shared/ui/assets/socials/TelegramIcon';
import VkIcon from '@/src/shared/ui/assets/socials/VkIcon';
import ExternalLinkIcon from '@/src/shared/ui/assets/socials/ExternalLinkIcon';

type Social = {
  icon: string;
  link: string;
};

type Item = {
  img: string;
  name: string;
  specialty: string;
  info: string;
  socials: Social[];
};

interface CardProps {
  items: Item[];
}

const iconComponents: {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
} = {
  github: GithubIcon,
  telegram: TelegramIcon,
  vk: VkIcon,
  website: ExternalLinkIcon,
};

const Card: React.FC<CardProps> = ({ items }) => {
  return (
    <div className={css.wrapper}>
      {items.map((item: Item, index: number) => (
        <div key={index} className={css.card}>
          <Image
            alt={`${item.name} avatar`}
            src={`/assets/avatars/${item.img}.png`}
            width={376}
            height={376}
            className={css.avatar}
          />

          <div className={css.content}>
            <div className={css.bio}>
              <h2>{item.name.toLocaleUpperCase()}</h2>
              <h3>{item.specialty.toLocaleUpperCase()}</h3>
              <p>{item.info}</p>
            </div>

            <div className={css.socials}>
              {item.socials.map((social: Social, index: number) => {
                const IconComponent = iconComponents[social.icon];
                return (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
