import React from "react";
import '../screen/Resume.css';
import './WorkBlock.css'
import {Images, WorkBlockTexts} from "../constants";
import {ImageTextHeader} from "./ImageTextHeader";
import {getRandomInt} from "../utils/global";

type Props = {
    texts: WorkBlockTexts;
    imageSource?: string;
    photos: {source: string, desc: string}[];
}

const WorkBlock: React.FC<Props> = props => {
    const photos = props.photos.map(photo => (
        <img
            key={photo.desc}
            src={photo.source}
            alt={photo.desc}
            className={'flat_photo__item'}
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
