import * as React from 'react';


const useMediaQuery = (breakpoint: string) => {
  const [match, setMatch] = React.useState<Boolean>(false);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(breakpoint)
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch)
    return () => {
      window.addEventListener('resize', changeMatch)
    };
  }, [breakpoint]);

  return match;
};

export default useMediaQuery;