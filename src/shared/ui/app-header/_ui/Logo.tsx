import Link from 'next/link';

import LogoIcon from '../../assets/brand/logo/LogoIcon';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <LogoIcon />
    </Link>
  );
};

export default Logo;
