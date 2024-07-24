import React from 'react';
import css from './title.module.scss';

interface ITitle {
  children: React.ReactNode;
  colored?: boolean;
}

const Title: React.FC<ITitle> = ({ children, colored }) => {
  return (
    <h2
      className={css.wrapper}
      style={{ color: colored ? '#FF7517' : '#F0E3CA' }}
    >
      {children}
    </h2>
  );
};

export default Title;
