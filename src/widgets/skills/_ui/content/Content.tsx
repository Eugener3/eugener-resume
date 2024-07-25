import css from './content.module.scss';

import Card from '../card/Card';
import IconsList from '../iconsList/IconsList';

import {
  descriptionItems1,
  descriptionItems2,
  iconsList1,
  iconsList2,
} from '../../constants/items';

const Content: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.item}>
        <Card items={descriptionItems1} style={{ maxWidth: '940px' }} />
        <IconsList items={iconsList1} maxWidth="350px" />
      </div>
      <div className={css.item}>
        <Card
          items={descriptionItems2}
          style={{ maxWidth: '840px', marginLeft: '80px' }}
        />
        <IconsList items={iconsList2} maxWidth="540px" />
      </div>
    </div>
  );
};

export default Content;
