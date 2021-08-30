import React, { useState } from "react";
import "../screen/Resume.css";
import "./InfoBlock.css";
import { ImageSource, InfoTexts } from "../constants";
import { IS_MOBILE_LAYOUT_MEDIA, useMedia } from "../utils/useMedia";
import {
  FullscreenPhoto,
  FullscreenPhotoContainer,
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

  const textBlocks = props.texts.mainData
    .split("\n")
    .map((textBlock, index, array) => (
      <>
        <span className="small_text" key={textBlock.substr(0, 10)}>
          {textBlock}
        </span>
        {index !== array.length - 1 && <br key={textBlock.substr(0, 9)} />}
      </>
    ));

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
        <div style={{ flexDirection: "column" }}>
          <TextBlocksContainer isCollapsed={isCollapsed && isMobile}>
            {textBlocks}
          </TextBlocksContainer>
          {props.texts.mainData.length > 200 && isCollapsed && isMobile && (
            <span className={"small_text text_link"} onClick={onReadMoreClick}>
              {props.texts.continue}
            </span>
          )}
          <p className="small_text">{props.texts.skills}</p>
        </div>
      </div>
      <div className="flat_photo__container">{photos}</div>
    </div>
  );
};

export default InfoBlock;
