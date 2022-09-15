import SampleUseDebounce from './Samples/SampleUseDebounce';
import SampleUseEffect from './Samples/SampleUseEffect';
import SampleUseState from './Samples/SampleUseState';

interface IHomePageProps {}
const HomePage: React.FC<IHomePageProps> = ({}) => {
  return (
    <div className="p-5">
      <SampleUseState />
    </div>
  );
};
export default HomePage;
