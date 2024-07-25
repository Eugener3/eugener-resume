import css from './card.module.scss';

interface CardProps {
  number: number;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ number, title, description }) => {
  return (
    <div className={css.wrapper}>
      <h2>
        0<span className={css.num}>{number}</span>
      </h2>
      <p>
        <span>{title}</span> {description}
      </p>
    </div>
  );
};

export default Card;
