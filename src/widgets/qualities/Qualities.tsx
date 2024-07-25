import AnimatedText from '@/src/shared/ui/animatedText/AnimatedText';

import Layout from './_ui/layout/layout';
import Content from './_ui/content/Content';

const Qualities: React.FC = () => {
  return (
    <Layout
      title={<AnimatedText text="Личные качества" />}
      content={<Content />}
    />
  );
};
export default Qualities;
