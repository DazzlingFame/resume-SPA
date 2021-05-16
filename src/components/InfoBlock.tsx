import React from "react";
import '../screen/Resume.css';
import './InfoBlock.css'
import {ImageSource, InfoTexts} from "../constants";
import {getRandomInt} from "../utils/global";

type Props = {
    texts: InfoTexts;
    imageSource: ImageSource;
    photos: {source: string, desc: string}[];
}

const InfoBlock: React.FC<Props> = props => {
    const photos = props.photos.map(photo => (
        <img
            key={photo.desc}
            src={photo.source}
            alt={photo.desc}
            className="flat_photo__item"
        />
    ));

    const textBlocks = props.texts.mainData.split('\n').map(textBlock => (
        <p className="small_text" key={getRandomInt(1000)}>
            {textBlock}
        </p>
    ));

    return (
        <div className="info_block__container" key={props.texts.header}>
            <div className="header_container" key={getRandomInt(1000)}>
                <img src={props.imageSource.source} alt={props.imageSource.desc} className="info_block__image" />
                <div style={{flexDirection: 'column'}}>
                    {textBlocks}
                    <p className="small_text">
                        {props.texts.skills}
                    </p>
                </div>
            </div>
            <div className="flat_photo__container">
                {photos}
            </div>
        </div>
    )
};

export default InfoBlock;
