import React from "react";
import LanguageSelector from "./LanguageSelector";
import {
  NavigationContainer,
  NavigationLinkContainer,
} from "../screen/ResumeStyles";
import {getLocaleFromStorage} from "../utils/localisation";
import {SelectorItem} from "./selector/SelectorComponent";

type Props = {
  navigationItems: { title: string; ref: React.RefObject<HTMLDivElement> }[];
  onLanguageChanged: (pickedState: SelectorItem) => void;
};

export const Navigation: React.FC<Props> = ({ navigationItems, onLanguageChanged }) => {
  const onClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref?.current &&
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <NavigationContainer>
      {navigationItems.map((navigationItem) => (
        <NavigationLinkContainer
          onClick={() => onClick(navigationItem.ref)}
          key={navigationItem.title}
        >
          <span className={"regular_text"}>{navigationItem.title}</span>
        </NavigationLinkContainer>
      ))}
      <LanguageSelector
        initialState={getLocaleFromStorage()}
        onStateChanged={onLanguageChanged}
      />
    </NavigationContainer>
  );
};
