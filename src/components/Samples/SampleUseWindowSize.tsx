import useWindowSize from 'hooks/useWindowSize';
import NoSSR from 'react-no-ssr';

interface ISampleUseWindowSizeProps {}
const SampleUseWindowSize: React.FC<ISampleUseWindowSizeProps> = ({}) => {
  return (
    <div>
      <Basic />
    </div>
  );
};
export default SampleUseWindowSize;
interface IBasicProps {}
const Basic: React.FC<IBasicProps> = ({}) => {
  const { windowWidth, windowHeight } = useWindowSize();
  return (
    <div>
      <p>Window Width: {windowWidth}</p>
      <p>Window Height: {windowHeight}</p>
    </div>
  );
};

interface IWhyProps {}
const Why: React.FC<IWhyProps> = ({}) => {
  return (
    <div>
      <p>Window Width: {window.innerWidth}</p>
      <p>Window Height: {window.innerHeight}</p>
    </div>
  );
};

interface INoSsrExampleProps {}
const NoSsrExample: React.FC<INoSsrExampleProps> = ({}) => {
  return (
    <NoSSR>
      <Why />
    </NoSSR>
  );
};
