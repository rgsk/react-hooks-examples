import useWindowOrientation from 'hooks/useWindowOrientation';

interface ISampleUseWindowOrientationProps {}
const SampleUseWindowOrientation: React.FC<
  ISampleUseWindowOrientationProps
> = ({}) => {
  const windowOrientation = useWindowOrientation();
  return <div>Window Orientation: {windowOrientation}</div>;
};
export default SampleUseWindowOrientation;
