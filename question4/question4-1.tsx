import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { render } from 'react-dom';

const App = (): React.ReactElement => {
  const [a, setA] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setA(2);
    }, 1000);
  }, []);

  const result = useMemo(() => a, []);

  const getA = () => {
    return a;
  };

  const getMemA = useCallback(() => {
    return a;
  }, []);

  return (
    <div>
      without memo {getA()}
      <br />
      with memoCb {getMemA()}
      <br />
      with memoFn {result}
    </div>
  );
};

render(<App />, document.getElementById('root'));
