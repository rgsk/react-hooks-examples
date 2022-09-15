import SampleUseWindowOrientation from './Samples/SampleUseWindowOrientation';

interface IHomePageProps {}
const HomePage: React.FC<IHomePageProps> = ({}) => {
  return (
    <div className="p-5">
      <SampleUseWindowOrientation />
    </div>
  );
};
export default HomePage;
