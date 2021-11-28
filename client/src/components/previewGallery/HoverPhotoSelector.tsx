import React from 'react';
import styled from 'styled-components';
import {AbsoluteFillObject} from "./PreviewPhotoStyles";

const Container = styled.div`
  ${AbsoluteFillObject};
  display: flex;
`;

const PhotoPickerZone = styled.div`
  display: flex;
  flex: 1;
`;

type Props = {
  onGalleryZoneHovered: (zoneCount: number) => void;
  photosCount: number;
};

const HoverPhotoSelector: React.FC<Props> = ({
  onGalleryZoneHovered,
  photosCount,
}) => {
  if (photosCount < 2) return null;

  const photoPickerZones = [];
  for (let i = 0; i < photosCount; i++) {
    photoPickerZones.push(
      <PhotoPickerZone onMouseEnter={() => onGalleryZoneHovered(i)} />,
    );
  }

  return photoPickerZones.length ? (
    <Container>{photoPickerZones}</Container>
  ) : null;
};

export default HoverPhotoSelector;
