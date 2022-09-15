import SampleStateRef from './Samples/SampleStateRef';
import SampleUseLocalStorage from './Samples/SampleUseLocalStorage';

interface IHomePageProps {}
const HomePage: React.FC<IHomePageProps> = ({}) => {
  return (
    <div className="p-5">
      <SampleStateRef />
    </div>
  );
};
export default HomePage;
