import Title from '@/src/shared/ui/title/Title';
import css from './main.module.scss';
import Link from 'next/link';
import TelegramIcon from '@/src/shared/ui/assets/socials/TelegramIcon';
import Image from 'next/image';
import Dots from '@/src/shared/ui/Dots';
import Gradient from '@/src/shared/ui/Gradient';

const Main = (): JSX.Element => {
  return (
    <div className={css.layout}>
      <div className={css.wrapper}>
        <div className={css.side}>
          <div className={css.title}>
            <div>
              <Title colored>Евгений Сергиенко</Title>
              <Title>Backend-разработчик</Title>
            </div>
          </div>
          <div className={css.about}>
            <p>
              <span>Я</span> — программист с глубоким интересом к современным
              технологиям и инновационным решениям.
            </p>
            <div className={css.separator} />
            <div className={css.tg}>
              <Link href="https://t.me/E_Sora" target="_blank">
                <TelegramIcon width={29} />
                Написать в телеграм
              </Link>
              <p>Я использую телеграм для работы с клиентами</p>
            </div>
          </div>
        </div>
        <div className={css.side}>
          <div className={css.avatar}>
            <Image
              src={'/assets/main/avatar.png'}
              width={530}
              height={510}
              alt="Avatar"
            />
            <Dots className={css.dots} />
            <Gradient width="530px" height="20px" className={css.gradient} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
