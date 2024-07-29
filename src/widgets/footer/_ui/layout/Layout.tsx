import css from './layout.module.scss';

interface Layout {
  logo: React.ReactNode;
  nav: React.ReactNode;
  socials: React.ReactNode;
  privacyPolicy: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ logo, nav, socials, privacyPolicy }) => {
  return (
    <section className={css.layout} id="footer">
      <div className={css.wrapper}>
        {logo}
        {nav}
        {socials}
        {privacyPolicy}
      </div>
    </section>
  );
};

export default Layout;
