import React from 'react';
import {
  LayoutContainer,
  Container,
  Section,
  ActiveSection,
} from './IndicatorStyles';

type IndicatorProps = {
  key: string;
  photosCount: number;
  currentSectionPosition: number;
  sectionWidth: number;
};

const Indicator: React.FC<IndicatorProps> = props => {
  if (props.photosCount < 2) return null;

  const sections = [];
  for (let i = 0; i < props.photosCount; i++) {
    sections.push(
      <Section width={props.sectionWidth} key={`Section_${props.key}_${i}`} />,
    );
  }

  return sections.length > 1 ? (
    <LayoutContainer>
      <Container>
        {sections}
        <ActiveSection
          width={props.sectionWidth}
          offsetX={props.currentSectionPosition}
        />
      </Container>
    </LayoutContainer>
  ) : null;
};

export default Indicator;
