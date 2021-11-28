import styled from 'styled-components';

export type SizeProps = {
  height: number;
  width: number;
};

export const Container = styled.div<SizeProps>`
  position: relative;
  display: flex;
  flex: none;
  align-self: center;

  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

export const ScrollablePhotoContainer = styled.div<SizeProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex: none;
  scroll-snap-type: x mandatory;
  flex-flow: row nowrap;
  overflow-x: scroll;

  border-radius: 8px;

  height: ${props => props.height}px;
  width: ${props => props.width}px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
