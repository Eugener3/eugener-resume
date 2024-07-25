import About from '@/src/widgets/about/About';
import Main from '@/src/widgets/main/Main';
import Skills from '@/src/widgets/skills/Skills';
import Qualities from '@/src/widgets/qualities/Qualities';

const Home: React.FC = () => {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Qualities />
    </>
  );
};
export default Home;
