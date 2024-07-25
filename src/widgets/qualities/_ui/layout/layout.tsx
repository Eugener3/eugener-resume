import css from './layout.module.scss';

interface Layout {
  title: React.ReactNode;
  content: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ title, content }) => {
  return (
    <section className={css.layout} id="skills">
      <div className={css.wrapper}>
        <div>{title}</div>
        {content}
      </div>
    </section>
  );
};

export default Layout;
