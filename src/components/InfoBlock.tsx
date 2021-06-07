import React, {useState} from "react";
import '../screen/Resume.css';
import './InfoBlock.css'
import {ImageSource, InfoTexts} from "../constants";
import {getRandomInt} from "../utils/global";
import {IS_MOBILE_LAYOUT_MEDIA, useMedia} from "../utils/useMedia";

type Props = {
    texts: InfoTexts;
    imageSource: ImageSource;
    photos: {source: string, desc: string}[];
}

const InfoBlock: React.FC<Props> = props => {
    const isMobile = useMedia(IS_MOBILE_LAYOUT_MEDIA);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const photos = props.photos.map(photo => (
        <img
            key={photo.desc}
            src={photo.source}
            alt={photo.desc}
            className="flat_photo__item"
        />
    ));

    const onReadMoreClick = () => {
        setIsCollapsed(false);
    }

    const mainText = isMobile && isCollapsed ? props.texts.mainData.substr(0, 200).trimEnd().concat('...') : props.texts.mainData;

    const textBlocks = mainText.split('\n').map((textBlock, index, array) => (
        <>
        <span className="small_text" key={textBlock.substr(0, 10)}>
            {textBlock}
        </span>
            {index !== array.length - 1 && <br key={textBlock.substr(0, 9)}/>}
        </>

    ));

    return (
        <div className="info_block__container" key={props.texts.header}>
            <div className="header_container" key={getRandomInt(1000)}>
                <img src={props.imageSource.source} alt={props.imageSource.desc} className="info_block__image" />
                <div style={{flexDirection: 'column'}}>
                    {textBlocks}
                    {props.texts.mainData.length > 200 && isCollapsed && isMobile &&
                        <span className={"small_text text_link"} onClick={onReadMoreClick}>{props.texts.continue}</span>
                    }
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
