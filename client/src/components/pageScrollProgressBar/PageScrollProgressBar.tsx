import React, { useEffect, useState } from "react";
import { getHeight } from "../../utils/global";
import styled from "styled-components";
import { COLORS } from "../../constants";

type BarProps = {
  widthPercents: number;
};

const Bar = styled.div.attrs<BarProps>(({ widthPercents }) => ({
  style: {
    width: `${widthPercents}%`,
  },
}))<BarProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background-color: ${COLORS.secondaryLight};
  z-index: 9999;
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

  return <Bar widthPercents={scrollPercentState} />;
};

export default PageScrollProgressBar;
