import Layout from './_ui/layout/Layout';
import Description from './_ui/description/Description';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import AnimatedText from '@/src/shared/ui/animatedText/AnimatedText';

const About: React.FC = () => {
  return (
    <Layout
      description={<Description />}
      avatar={<Avatar />}
      title={<AnimatedText text="Обо мне" />}
    />
  );
};
export default About;
