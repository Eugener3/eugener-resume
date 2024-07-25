import AnimatedText from '@/src/shared/ui/animatedText/AnimatedText';
import Layout from './_ui/layout/Layout';
import Content from './_ui/content/Content';

const Skills: React.FC = () => {
  return (
    <Layout title={<AnimatedText text="Навыки" />} content={<Content />} />
  );
};
export default Skills;
