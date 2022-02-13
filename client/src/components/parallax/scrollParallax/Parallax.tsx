import React, { useEffect, useState } from "react";
import { Container, BottomLayer, TopLayer } from "./ParallaxComponents";

const DEFAULT_INSET = 20;

const DEFAULT_SCROLL_EFFECT_START_ZONE_OFFSET = 500;

type Props = {
  // Inset for layers to have content to show while translated
  inset?: number;
  // Offset to start parallax effect only if component is visible (pass the pixels amount between top of window and component to start effect)
  scrollEffectStartZoneOffset?: number;
  bottomLayerComponent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};
const Parallax: React.FC<Props> = ({
  inset = DEFAULT_INSET,
  scrollEffectStartZoneOffset = DEFAULT_SCROLL_EFFECT_START_ZONE_OFFSET,
  bottomLayerComponent,
  children,
  className,
}) => {
  const containerRef = React.createRef<HTMLDivElement>();
  const [scrollState, setScrollState] = useState(0);

  useEffect(() => {
    const containerTop = containerRef.current?.offsetTop;

    const scrollListener = () => {
      window.requestAnimationFrame(() => {
        containerTop &&
          window.scrollY + scrollEffectStartZoneOffset > containerTop &&
          setScrollState(
            window.scrollY + scrollEffectStartZoneOffset - containerTop
          );
      });
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [containerRef, scrollEffectStartZoneOffset]);

  return (
    <Container ref={containerRef} className={className}>
      {!!bottomLayerComponent && (
        <BottomLayer scrollValue={scrollState / 30} inset={inset}>
          {bottomLayerComponent}
        </BottomLayer>
      )}
      <TopLayer scrollValue={scrollState / 15} inset={inset}>
        {children}
      </TopLayer>
    </Container>
  );
};

export default Parallax;
