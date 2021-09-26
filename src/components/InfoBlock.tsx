import React, { useState } from "react";
import "../screen/Resume.css";
import "./InfoBlock.css";
import { ImageSource, InfoTexts } from "../constants";
import { IS_MOBILE_LAYOUT_MEDIA, useMedia } from "../utils/useMedia";
import {
  FullscreenPhoto,
  FullscreenPhotoContainer,
  Skills,
  TextBlock,
  TextBlocksContainer,
} from "./InfoBlockComponents";

type Props = {
  texts: InfoTexts;
  imageSource: ImageSource;
  photos: { source: string; desc: string }[];
};

const InfoBlock: React.FC<Props> = (props) => {
  const isMobile = useMedia(IS_MOBILE_LAYOUT_MEDIA);
  const [isCollapsed, setIsCollapsed] = useState(true);
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

  const onReadMoreClick = () => {
    setIsCollapsed(false);
  };

  return (
    <div className="info_block__container" key={props.imageSource.desc}>
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
          <TextBlock>
            {props.texts.mainData.substr(0, props.texts.mainData.indexOf("\n"))}
          </TextBlock>
          <TextBlock isCollapsed={isCollapsed}>
            {props.texts.mainData.substr(
              props.texts.mainData.indexOf("\n") + 1
            )}
          </TextBlock>
          {props.texts.mainData.length > 200 && isCollapsed && isMobile && (
            <span className={"small_text text_link"} onClick={onReadMoreClick}>
              {props.texts.continue}
            </span>
          )}
          <Skills>{props.texts.skills}</Skills>
        </TextBlocksContainer>
      </div>
      <div className="flat_photo__container">{photos}</div>
    </div>
  );
};

export default InfoBlock;
