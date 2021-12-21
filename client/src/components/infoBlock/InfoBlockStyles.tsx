import styled from "styled-components";
import { smallTextStyles } from "../../styledPresets";

export const Container = styled.div<TextBlocksContainerProps>`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

type TextBlocksContainerProps = {
  isInViewport?: boolean;
};
export const TextBlocksContainer = styled.div<TextBlocksContainerProps>`
  display: flex;
  flex-direction: column;
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

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media all and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const InfoBlockImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 5%;
  object-fit: cover;
  border-radius: 99em;
  @media all and (max-width: 980px) {
    margin-bottom: 5%;
  }
`;

export const DesktopPhoto = styled.img`
  max-width: 30%;
  max-height: 400px;
  margin: 10px;
  user-select: none;
  object-fit: contain;
  cursor: pointer;

  @media all and (max-width: 980px) {
    max-height: 355px;
    max-width: 355px;
  }
`;

export const FlatGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;
