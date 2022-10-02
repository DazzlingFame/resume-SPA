import React, { useCallback, useEffect, useState } from "react";
import { getHeight } from "../../utils/global";
import styled from "styled-components";
import { Images } from "../../constants";
import debounce from "lodash.debounce";

type BarProps = {
  widthPercents: number;
};

const Bar = styled.div.attrs<BarProps>(({ widthPercents }) => ({
  style: {
    width: `${widthPercents}%`,
  },
}))<BarProps>`
  position: fixed;
  top: 2px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 9999;
`;

const Doge = styled.img`
  width: 20px;
  height: 20px;
`;

const PageScrollProgressBar: React.FC = () => {
  const [scrollPercentState, setScrollPercentState] = useState(0);
  const [dogMoving, setDogMoving] = useState(false);
  const setDogStaticDebounced = useCallback(
    debounce(() => setDogMoving(false), 200),
    []
  );

  useEffect(() => {
    const scrollListener = () => {
      setDogMoving(true);
      setDogStaticDebounced();
      window.requestAnimationFrame(() => {
        setScrollPercentState(
          (window.scrollY / (getHeight() - window.innerHeight)) * 100
        );
      });
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <Bar widthPercents={scrollPercentState}>
      <Doge
        src={
          dogMoving ? Images.UNDER_DOG.source : Images.UNDER_DOG_STATIC.source
        }
      />
    </Bar>
  );
};

export default PageScrollProgressBar;
