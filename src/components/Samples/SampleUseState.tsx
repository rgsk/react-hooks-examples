import { useCallback, useEffect, useMemo, useState } from 'react';

interface ISampleUseStateProps {}
const SampleUseState: React.FC<ISampleUseStateProps> = ({}) => {
  const [count, setCount] = useState(1);
  const doubleCount = useCallback(() => {
    console.log('doubleCount function is ran');
    console.log({ count });
    return count * 2;
  }, [count]);
  return (
    <div>
      <button
        className="border px-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount()}</p>
    </div>
  );
};
export default SampleUseState;
