import Title from '@/src/shared/ui/title/Title';
import React from 'react';
import css from './main.module.scss';
import Link from 'next/link';
import TelegramIcon from '@/src/shared/ui/assets/socials/TelegramIcon';

const Main = (): JSX.Element => {
  return (
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
          <div className={css.palka} />
          <div className={css.tg}>
            <Link href="https://t.me/E_Sora" target="_blank">
              <TelegramIcon width={29} />
              Написать в телеграм
            </Link>
            <p>Я использую телеграм для работы с клиентами</p>
          </div>
        </div>
      </div>
      <div className={css.side}></div>
    </div>
  );
};

export default Main;
