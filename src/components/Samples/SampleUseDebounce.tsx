/* eslint-disable @next/next/no-img-element */
import useDebounce from 'hooks/useDebounce';
import { useEffect, useState } from 'react';
const sleep = (millis: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
};
interface ISampleUseDebounceProps {}
const SampleUseDebounce: React.FC<ISampleUseDebounceProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        sleep(1000).then(() => {
          setIsSearching(false);
        });
      } else {
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  return (
    <div>
      <input
        placeholder="Search Marvel Comics"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isSearching && <div>Searching ...</div>}
    </div>
  );
};
export default SampleUseDebounce;
