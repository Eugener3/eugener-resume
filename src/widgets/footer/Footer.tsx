import Layout from './_ui/layout/Layout';
import Logo from '../app-header/_ui/Logo';
import Navigation from '../app-header/_ui/Navigation';
import Socials from '../app-header/_ui/Socials';
import PrivacyPolicy from './_ui/privacyPolicy/PrivacyPolicy';

const Footer: React.FC = () => {
  return (
    <Layout
      logo={<Logo />}
      nav={<Navigation />}
      socials={<Socials />}
      privacyPolicy={<PrivacyPolicy />}
    />
  );
};
export default Footer;
