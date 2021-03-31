import React from "react";
import '../screen/Resume.css';
import './WorkBlock.css'
import {Images, WorkBlockTexts} from "../constants";
import {ImageTextHeader} from "./ImageTextHeader";
import {getRandomInt, getWidth} from "../utils/global";

type Props = {
    texts: WorkBlockTexts;
    imageSource?: string;
    photos: {source: string, desc: string}[];
}

const WorkBlock: React.FC<Props> = props => {
    const imageSize = getWidth() * 0.3;

    const photos = props.photos.map(photo => (
        <img
            key={photo.desc}
            src={photo.source}
            alt={photo.desc}
            style={{width: imageSize, height: imageSize, marginRight: 20, marginTop: 20, objectFit: 'contain', userSelect: 'none'}}
        />
    ));

    return (
        <div className={'work_block_container'} key={getRandomInt(1000)}>
            <ImageTextHeader imageSource={Images.WORK_ME_IMG} text={props.texts.mainData + '\n' + props.texts.skills} />
            <div className={'flat_photo__container'}>
                {photos}
            </div>
        </div>
    )
};

export default WorkBlock;
