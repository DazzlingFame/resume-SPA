import React, { useEffect, useState } from "react";
import { isElementInViewport } from "../utils/viewport";
import styled from "styled-components";
import throttle from 'lodash.throttle';

type RevealableProps = {
  isInViewport?: boolean;
};
export const Revealable = styled.div<RevealableProps>`
  opacity: ${(props) => (props.isInViewport ? 1 : 0)};
  transition: opacity 700ms;
`;

export const revealedInViewport = <P extends object>
  (key: string) => (WrappedComponent: React.ComponentType<P>) => (props: P) => {
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
      const element = document
        .getElementById(key)
        ?.getBoundingClientRect();
      if (!element) return;
      const elementTop = element.top;
      const elementBottom = element.bottom;
      setIsInViewport(isElementInViewport(elementTop, elementBottom));

      const onScroll = () => {
        const element = document
            .getElementById(key)
            ?.getBoundingClientRect();
        if (!element) return;
        const elementTop = element.top;
        const elementBottom = element.bottom;
        if (!isInViewport && isElementInViewport(elementTop, elementBottom)) {
          setIsInViewport(true);
        } else if (isInViewport && !isElementInViewport(elementTop, elementBottom)) {
          setIsInViewport(false);
        }
      };

        const throttledOnScroll = throttle(onScroll, 100);
        window.addEventListener("scroll", throttledOnScroll);

      return () => window?.removeEventListener("scroll", throttledOnScroll);
    }, [isInViewport]);

    return (
      <Revealable isInViewport={isInViewport} id={key}>
        <WrappedComponent {...props}/>
      </Revealable>
    );
  };
