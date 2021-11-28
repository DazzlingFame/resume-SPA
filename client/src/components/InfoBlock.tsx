import React, { useState } from "react";
import "../screen/Resume.css";
import "./InfoBlock.css";
import { ImageSource, InfoTexts } from "../constants";
import { IS_MOBILE_LAYOUT_MEDIA, useMedia } from "../utils/useMedia";
import {
  Container,
  FullscreenPhoto,
  FullscreenPhotoContainer,
  Skills,
  TextBlocksContainer,
} from "./InfoBlockComponents";
import { ExpandableText } from "./ExpandableText";
import PreviewGallery from "./previewGallery";
type Props = {
  texts: InfoTexts;
  imageSource: ImageSource;
  photos: { source: string; desc: string }[];
};

const InfoBlock: React.FC<Props> = (props) => {
  const isMobile = useMedia(IS_MOBILE_LAYOUT_MEDIA);
  const [activeFullscreenPhoto, setActiveFullscreenPhoto] = useState<{
    source: string;
    desc: string;
  } | null>(null);
  const photos = props.photos.map((photo) => (
    <img
      onClick={() => !isMobile && setActiveFullscreenPhoto(photo)}
      key={photo.desc}
      src={photo.source}
      alt={photo.desc}
      className="flat_photo__item"
    />
  ));

  return (
    <Container key={props.imageSource.desc}>
      <FullscreenPhotoContainer
        isActive={!!activeFullscreenPhoto}
        onClick={() => setActiveFullscreenPhoto(null)}
      >
        <FullscreenPhoto
          key={"fullscreenPhoto"}
          isActive={!!activeFullscreenPhoto}
          src={activeFullscreenPhoto?.source}
          alt={activeFullscreenPhoto?.desc}
        />
      </FullscreenPhotoContainer>
      <div
        className="header_container"
        key={`${props.imageSource.desc}_container`}
      >
        <img
          src={props.imageSource.source}
          alt={props.imageSource.desc}
          className="info_block__image"
        />
        <TextBlocksContainer>
          <ExpandableText
            isInitiallyExpanded={!isMobile}
            text={props.texts.mainData}
            spoilerText={props.texts.continue}
            getSpoilerIndex={(text) => text.indexOf("\n")}
          />
          <Skills>{props.texts.skills}</Skills>
        </TextBlocksContainer>
      </div>
      {isMobile
          ? <PreviewGallery id={`${props.texts.mainData.substr(0, 10)}_gallery`} photoSources={props.photos.map(photo => photo.source)}/>
          : <div className="flat_photo__container">{photos}</div>
      }
    </Container>
  );
};

export default InfoBlock;
