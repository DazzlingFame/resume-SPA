import React, { useState } from "react";
import styled from "styled-components";
import { smallTextStyles } from "../styledPresets";

type TextProps = {
  isCollapsed?: boolean;
};
const Text = styled.span<TextProps>`
  max-height: ${(props) => (props.isCollapsed ? 0 : 1500)}px;
  transition: max-height 500ms;
  overflow: hidden;
  white-space: pre-wrap;

  ${smallTextStyles}
`;

type Props = {
  text: string;
  spoilerText: string;
  getSpoilerIndex: (text: string) => number;
  isInitiallyExpanded?: boolean;
};
export const ExpandableText: React.FC<Props> = ({
  text,
  spoilerText,
  getSpoilerIndex,
  isInitiallyExpanded,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      {isInitiallyExpanded ? (
        <Text>{text}</Text>
      ) : (
        <>
          <Text>{text.substring(0, getSpoilerIndex(text))}</Text>
          <Text isCollapsed={isCollapsed}>
            {text.substring(getSpoilerIndex(text)) + 1}
          </Text>

            {isCollapsed && <span
            className={"small_text text_link"}
            onClick={() => setIsCollapsed(false)}
          >
            {spoilerText}
          </span>}
        </>
      )}
    </>
  );
};
