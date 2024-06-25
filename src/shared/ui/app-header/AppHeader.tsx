import Layout from './_ui/Layout';
import Logo from './_ui/Logo';
import Navigation from './_ui/Navigation';
import Socials from './_ui/Socials';

const AppHeader: React.FC = () => {
  return <Layout logo={<Logo />} nav={<Navigation />} socials={<Socials />} />;
};

export default AppHeader;
