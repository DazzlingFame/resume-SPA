import '../screen/Resume.css'
import * as React from "react";
import {Images, InfoTexts} from "../constants";
import InfoBlock from "./infoBlock";
import {revealedInViewport} from "../hocs/revealedInViewport";

type Props = {
  texts: InfoTexts;
  containerRef: React.RefObject<HTMLDivElement>;
};

const photosArray = [
  Images.BICYCLE_IMG,
  Images.WARHAMMER_IMG,
  Images.SHIVA_IMG,
];

const AboutContent: React.FC<Props> = ({ texts, containerRef }) => (
  <div ref={containerRef}>
    {!!texts.header && <p className={"bold_subheader_text"}>{texts.header}</p>}
    <InfoBlock
      photos={photosArray}
      texts={texts}
      imageSource={Images.ABOUT_ME_IMG}
    />
  </div>
);

export default revealedInViewport<Props>("AboutContent")(AboutContent);
