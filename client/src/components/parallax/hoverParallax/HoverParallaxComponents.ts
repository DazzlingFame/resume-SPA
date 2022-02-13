import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

type LayerProps = {
	translateValue: { x: number; y: number };
	inset: number;
};
export const MovingLayer = styled.div.attrs<LayerProps>(
	({ translateValue }) => ({
		style: {
			transform: `translateY(${translateValue.y}px) translateX(${translateValue.x}px)`,
		},
	})
)<LayerProps>`
  position: absolute;
  top: ${(props) => -props.inset}px;
  bottom: ${(props) => -props.inset}px;
  left: ${(props) => -props.inset}px;
  right: ${(props) => -props.inset}px;
`;
