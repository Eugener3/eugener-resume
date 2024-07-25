import css from './iconsList.module.scss';
import Image from 'next/image';

type Item = {
  name: string;
  title: string;
};

type IconsListProps = {
  items: Item[];
  maxWidth: string;
};

const IconsList: React.FC<IconsListProps> = ({ items, maxWidth }) => {
  return (
    <div className={css.wrapper} style={{ maxWidth: maxWidth }}>
      {items.map((item: Item, index: number) => (
        <Image
          key={index}
          alt={`${item.name} icon`}
          src={`/assets/icons/${item.name}.svg`}
          title={item.title}
          width={96}
          height={96}
        />
      ))}
    </div>
  );
};

export default IconsList;
