import '../screen/Resume.css'
import * as React from "react";
import {ImageTextHeader} from "./ImageTextHeader";
import {AboutTexts, Images} from "../constants";
import {getWidth} from "../utils/global";

type Props = {
    texts: AboutTexts;
}

const photosArray = [Images.BICYCLE_IMG, Images.WARHAMMER_IMG, Images.SHIVA_IMG];

const AboutContent: React.FC<Props> = props => {
    const imageSize = getWidth() * 0.3;

    const photos = photosArray.map(photo => (
        <img key={photo.desc}
             src={photo.source}
             alt={photo.desc}
             style={{width: imageSize, height: imageSize, marginRight: 20, marginTop: 20, objectFit: 'contain', userSelect: 'none'}}
        />
    ));
    return (
        <div>
            {!!props.texts.sectionName &&
                (
                    <p className={'bold_subheader_text'}>
                        {props.texts.sectionName}
                    </p>
                )
            }
            <ImageTextHeader header={props.texts.header} text={props.texts.text} imageSource={Images.ABOUT_ME_IMG}/>
            <div className="flat_photo__container">
                {photos}
            </div>
        </div>
    )
};

export default AboutContent;
