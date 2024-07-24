import css from './layout.module.scss';

interface Layout {
  title: React.ReactNode;
  description: React.ReactNode;
  avatar: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ title, description, avatar }) => {
  return (
    <section className={css.layout} id="about">
      <div className={css.wrapper}>
        <div className={css.about}>
          {title}
          {description}
        </div>
        {avatar}
      </div>
    </section>
  );
};

export default Layout;
