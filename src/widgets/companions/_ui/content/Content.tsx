import css from './content.module.scss';

import Card from '../card/Card';
import { companions } from '../../const/items';

const Content: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <Card items={companions} />
    </div>
  );
};

export default Content;
