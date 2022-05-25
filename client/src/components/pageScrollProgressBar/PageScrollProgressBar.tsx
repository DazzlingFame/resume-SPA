import React, { useEffect, useState } from "react";
import { getHeight } from "../../utils/global";
import styled from "styled-components";
import {COLORS, Images} from "../../constants";

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
  border-bottom: 2px solid ${COLORS.secondaryLight};
  z-index: 9999;
`;

const Doge = styled.img`
  width: 20px;
  height: 20px;
`;

const PageScrollProgressBar: React.FC = () => {
  const [scrollPercentState, setScrollPercentState] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
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
      <Bar widthPercents={scrollPercentState} >
        <Doge src={Images.UNDER_DOG.source}/>
      </Bar>
  );
};

export default PageScrollProgressBar;
