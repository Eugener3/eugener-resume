import AnimatedText from '@/src/shared/ui/animatedText/AnimatedText';
import Layout from './_ui/layout/Layout';
import Content from './_ui/content/Content';

const Companions: React.FC = () => {
  return (
    <Layout title={<AnimatedText text="Товарищи" />} content={<Content />} />
  );
};
export default Companions;
