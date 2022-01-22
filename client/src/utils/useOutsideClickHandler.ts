import { RefObject, useEffect } from "react";

const useOutsideClickHandler = (
  ref: RefObject<HTMLElement>,
  eventHandler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        ref.current &&
        event.target instanceof Element &&
        !ref.current.contains(event.target)
      ) {
        eventHandler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [eventHandler, ref]);
};

export default useOutsideClickHandler;
