import React from 'react';
import {
  SizeProps,
  Container,
  Thumbnail,
} from './PreviewPhotoStyles';

type Props = {
  photoSource: string;
  gallerySize: SizeProps;
};

const PreviewPhoto: React.FC<Props> = ({photoSource, gallerySize}) => {
  return (
    <Container width={gallerySize.width} height={gallerySize.height}>
      <Thumbnail
        src={photoSource}
        width={gallerySize.width}
        height={gallerySize.height}
        isBlurred
      />
      <Thumbnail
        src={photoSource}
        width={gallerySize.width}
        height={gallerySize.height}
      />
    </Container>
  );
};

export default PreviewPhoto;
