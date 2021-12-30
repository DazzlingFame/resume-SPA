import React, { useState } from "react";
import {
  SelectedItemContainer,
  SelectedItemText,
  SelectorChevron,
  SelectorContainer,
  SelectorItemContainer,
  SelectorItemsContainer,
  SelectorItemText,
} from "./SelectorStyles";

export type SelectorItem = {
  code: string;
  text: string;
};

type Props = {
  initialStateCode?: string;
  items: SelectorItem[];
  onStateChanged: (pickedState: SelectorItem) => void;
};

const SelectorComponent: React.FC<Props> = ({
  initialStateCode,
  items,
  onStateChanged,
}) => {
  const [currentState, setCurrentState] = useState<SelectorItem>(
    initialStateCode
      ? items.find((item) => item.code === initialStateCode) ?? items[0]
      : items[0]
  );
  const [isSelectorVisible, setIsSelectorVisible] = useState<boolean>(false);
  const toggleItems = items.map((toggleState) => (
    <SelectorItemContainer
      onClick={() => {
        setIsSelectorVisible(false);
        setCurrentState(toggleState);
        onStateChanged(toggleState);
      }}
    >
      <SelectorItemText>{toggleState.text}</SelectorItemText>
    </SelectorItemContainer>
  ));

  const changeIsSelectorVisibleState = () =>
    setIsSelectorVisible(!isSelectorVisible);

  return (
    <SelectorContainer>
      <SelectedItemContainer onClick={changeIsSelectorVisibleState}>
        <SelectedItemText>{currentState.text}</SelectedItemText>
        <SelectorChevron />
      </SelectedItemContainer>
      <SelectorItemsContainer isOpened={isSelectorVisible}>
        {toggleItems}
      </SelectorItemsContainer>
    </SelectorContainer>
  );
};

export default SelectorComponent;
