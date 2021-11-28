import React, {useLayoutEffect, useRef, useState} from 'react';
import {ScrollablePhotoContainer, Container} from './PreviewGalleryStyles';
import PreviewPhoto from './PreviewPhoto';
import Indicator from './Indicator';
import {PREVIEW_ASPECT_RATIO} from "./utils";

const GALLERY_WIDTH_MOBILE = document.documentElement.clientWidth - 32 - 16;

const getSectionOffsetByScroll = (
  scrollOffset: number,
  galleryWidth: number,
  indicatorWidth: number,
) => (scrollOffset * indicatorWidth) / galleryWidth;

type Props = {
  id: string;
  photoSources: string[];
};

const PreviewGallery: React.FC<Props> = ({id, photoSources}) => {
  const galleryElement = useRef<HTMLElement | null>(null);

  const galleryWidth = GALLERY_WIDTH_MOBILE;
  const galleryHeight = Math.round(galleryWidth * PREVIEW_ASPECT_RATIO);
  const indicatorWidth = 16;
  const indicatorWidthWithPaddings = indicatorWidth + 4;

  const [
    currentIndicatorSectionPosition,
    setCurrentIndicatorSectionPosition,
  ] = useState(0);

  useLayoutEffect(() => {
    galleryElement.current = document.getElementById(id);
    galleryElement.current?.addEventListener('scroll', () => {
      window.requestAnimationFrame(() => {
        const scrollOffset = galleryElement.current?.scrollLeft;
        if (!scrollOffset) return;
        setCurrentIndicatorSectionPosition(
          getSectionOffsetByScroll(
            scrollOffset,
            galleryWidth,
            indicatorWidthWithPaddings,
          ),
        );
      });
    });
  }, [id, galleryWidth, indicatorWidth]);

  return (
    <Container height={galleryHeight} width={galleryWidth}>
      <ScrollablePhotoContainer
        id={id}
        height={galleryHeight}
        width={galleryWidth}
      >
        {photoSources.map((oFile, index) => (
          <PreviewPhoto
            key={`${id}_photo_${index}`}
            photoSource={oFile}
            gallerySize={{
              width: galleryWidth,
              height: galleryHeight,
            }}
          />
        ))}
      </ScrollablePhotoContainer>
      <Indicator
        sectionWidth={indicatorWidth}
        key={id}
        photosCount={photoSources.length}
        currentSectionPosition={currentIndicatorSectionPosition}
      />
    </Container>
  );
};

export default PreviewGallery;
