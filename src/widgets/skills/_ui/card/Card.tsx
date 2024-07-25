import css from './card.module.scss';

interface CardProps {
  items: string[];
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ items, ...props }) => {
  return (
    <div className={css.wrapper} {...props}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
