import React, { MouseEventHandler, useState } from "react";
import { Container, MovingLayer } from "./HoverParallaxComponents";

type Props = {
  inset?: number;
  className?: string;
  children: React.ReactNode;
};
const HoverParallax: React.FC<Props> = ({
  children,
  inset = 10,
  className,
}) => {
  const containerRef = React.createRef<HTMLDivElement>();
  const [translateValue, setTranslateValue] = useState({ x: 0, y: 0 });

  const onCursorMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) {
      return;
    }

    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    const translateValueX = (e.clientX - containerCenterX) / 10;
    const translateValueY = (e.clientY - containerCenterY) / 10;

    requestAnimationFrame(() => {
      setTranslateValue({
        x:
          translateValueX > 10
            ? 10
            : translateValueX < -10
            ? -10
            : translateValueX,
        y:
          translateValueY > 10
            ? 10
            : translateValueY < -10
            ? -10
            : translateValueY,
      });
    });
  };

  return (
    <Container
      onMouseMove={onCursorMove}
      ref={containerRef}
      className={className}
    >
      <MovingLayer translateValue={translateValue} inset={inset}>
        {children}
      </MovingLayer>
    </Container>
  );
};

export default HoverParallax;
