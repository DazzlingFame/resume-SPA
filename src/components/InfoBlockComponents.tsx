import styled from "styled-components";
import {smallTextStyles} from "../styledPresets";

export const TextBlocksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

type TextBlockProps = {
  isCollapsed?: boolean;
};
export const TextBlock = styled.span<TextBlockProps>`
  max-height: ${(props) => (props.isCollapsed ? 0 : 1500)}px;
  transition: max-height 500ms;
  overflow: hidden;
  white-space: pre-wrap;

  ${smallTextStyles}
`;

export const Skills = styled.p`
  ${smallTextStyles}
`;

type FullscreenPhotoProps = {
  isActive: boolean;
};
export const FullscreenPhotoContainer = styled.div<FullscreenPhotoProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  height: 100%;
  width: 100%;
  ${(props) =>
    props.isActive &&
    `
      background-color: rgba(0, 0, 0, 0.8);
      pointer-events: auto;
  `};
  transition: background-color 200ms;
`;

export const FullscreenPhoto = styled.img<FullscreenPhotoProps>`
  height: 0;
  ${(props) =>
    props.isActive &&
    `
        height: 80%;
  `};
  transition: height 300ms;
`;
