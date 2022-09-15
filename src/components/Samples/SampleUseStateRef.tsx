/*
reference
https://medium.com/programming-essentials/how-to-access-the-state-in-settimeout-inside-a-react-function-component-39a9f031c76f
*/

import useStateRef from 'hooks/useStateRef';
import { useEffect, useRef, useState } from 'react';

interface ISampleUseStateRefProps {}
const SampleUseStateRef: React.FC<ISampleUseStateRefProps> = ({}) => {
  return (
    <div>
      <ElegantSolution />
    </div>
  );
};
export default SampleUseStateRef;
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button
          className="border border-black px-3"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

interface IProblemProps {}
const Problem: React.FC<IProblemProps> = ({}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log({ count });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button
          className="border border-black px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

interface ISolutionProps {}
const Solution: React.FC<ISolutionProps> = ({}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    setTimeout(() => {
      console.log({ count, 'countRef.current': countRef.current });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button
          className="border border-black px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
interface IElegantSolutionProps {}
const ElegantSolution: React.FC<IElegantSolutionProps> = ({}) => {
  const [count, setCount] = useState(0);
  const countRef = useStateRef(count);

  useEffect(() => {
    setTimeout(() => {
      console.log({ count, 'countRef.current': countRef.current });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button
          className="border border-black px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
