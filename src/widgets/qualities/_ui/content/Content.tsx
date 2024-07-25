import css from './content.module.scss';

import Card from '../card/Card';
import { qualitiesItems } from '../../const/items';

type Item = {
  number: number;
  title: string;
  description: string;
};

const Content: React.FC = () => {
  return (
    <div className={css.wrapper}>
      {qualitiesItems.map((item: Item, index: number) => (
        <Card
          key={index}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Content;
