import styled from 'styled-components';

export const AbsoluteFillObject = `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export type SizeProps = {
  width?: number;
  height?: number;
};

export const Container = styled.div<SizeProps>`
  position: relative;
  display: flex;
  flex: none;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  scroll-snap-align: start;
`;

type ThumbnailProps = SizeProps & {isBlurred?: boolean;};
export const Thumbnail = styled.img<ThumbnailProps>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: ${props => props.isBlurred ? 'fill' : 'contain'};
  ${props =>
    props.isBlurred &&
    `
    filter: blur(4px);
  `}
`;

export const GreyOverlay = styled.div`
  ${AbsoluteFillObject};
  background-color: rgba(20,28,37,0.12);
`;
