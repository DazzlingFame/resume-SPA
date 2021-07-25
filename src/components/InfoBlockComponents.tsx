import styled from "styled-components";

type TextBlocksContainerProps = {
    isCollapsed?: boolean;
}
export const TextBlocksContainer = styled.div<TextBlocksContainerProps>`
    max-height: ${props => props.isCollapsed ? 150 : 1500}px;
    transition: max-height 500ms;
    overflow: hidden;
`;

type FullscreenPhotoProps = {
    isActive: boolean;
}
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
  ${props => props.isActive && `
      background-color: rgba(0, 0, 0, 0.8);
      pointer-events: auto;
  `};
  transition: background-color 200ms;
`;

export const FullscreenPhoto = styled.img<FullscreenPhotoProps>`
  height: 0;
  ${props => props.isActive && `
        height: 80%;
  `};
  transition: height 300ms;
`;
