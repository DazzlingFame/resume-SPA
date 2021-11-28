import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 42px;
  display: flex;
  flex: none;
  align-items: flex-end;
  justify-content: center;

  padding: 0 8px 8px 8px;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 0 0 8px 8px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
`;

type SectionProps = {
  width: number;
};
export const Section = styled.div<SectionProps>`
  display: flex;
  width: ${props => props.width}px;
  height: 2px;
  background-color: rgba(20,28,37,0.5);
  border-radius: 2px;
  margin: 0 2px;
`;

type ActiveSectionProps = {
  offsetX: number;
};
export const ActiveSection = styled(Section).attrs<ActiveSectionProps>(
  props => ({
    style: {
      transform: `translateX(${props.offsetX}px)`,
    },
  }),
)<ActiveSectionProps>`
  background-color: white;
  position: absolute;
`;
