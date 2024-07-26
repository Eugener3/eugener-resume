import css from './layout.module.scss';

interface Layout {
  title: React.ReactNode;
  content: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ title, content }) => {
  return (
    <section className={css.layout} id="companions">
      <div className={css.wrapper}>
        {title}
        {content}
      </div>
    </section>
  );
};

export default Layout;
