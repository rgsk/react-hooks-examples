import SampleUseLocalStorage from './Samples/SampleUseLocalStorage';

interface IHomePageProps {}
const HomePage: React.FC<IHomePageProps> = ({}) => {
  return (
    <div className="p-5">
      <SampleUseLocalStorage />
    </div>
  );
};
export default HomePage;
