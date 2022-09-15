import SampleUseDebounce from './Samples/SampleUseDebounce';

interface IHomePageProps {}
const HomePage: React.FC<IHomePageProps> = ({}) => {
  return (
    <div className="p-5">
      <SampleUseDebounce />
    </div>
  );
};
export default HomePage;
