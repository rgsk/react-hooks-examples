import { useEffect, useState } from 'react';

interface ISampleUseEffectProps {}
const SampleUseEffect: React.FC<ISampleUseEffectProps> = ({}) => {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <div>
      <button
        className="border px-2"
        onClick={() => {
          setShowComponent((prev) => !prev);
        }}
      >
        Toggle
      </button>
      {showComponent && <TogglableComponent />}
    </div>
  );
};
export default SampleUseEffect;
interface ITogglableComponentProps {}
const TogglableComponent: React.FC<ITogglableComponentProps> = ({}) => {
  //   const [value, setValue] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      console.log('work inside setTimeout');
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div>
      {/* <p>Value: {value}</p> */}
      <p>TogglableComponent</p>
    </div>
  );
};
