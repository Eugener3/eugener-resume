import css from './avatar.module.scss';

import Image from 'next/image';

import Dots from '../Dots';
import Gradient from '../Gradient';

const Avatar: React.FC = () => {
  return (
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
  );
};

export default Avatar;
