import React from "react";
import '../screen/Resume.css';
import './WorkBlock.css'
import {Images, WorkBlockTexts} from "../constants";
import {ImageTextHeader} from "./ImageTextHeader";
import {getWidth} from "../utils/global";

type Props = {
    texts: WorkBlockTexts;
    imageSource?: string;
    photos: {source: string, desc: string}[];
}

const WorkBlock: React.FC<Props> = props => {
    const imageSize = getWidth() * 0.3;

    const photos = props.photos.map(photo => (
        <img src={photo.source} alt={photo.desc} style={{width: imageSize, height: imageSize, marginRight: 20, marginTop: 20, objectFit: 'contain', userSelect: 'none'}}/>
    ));

    return (
        <div className={'work_block_container'}>
            <ImageTextHeader imageSource={Images.WORK_ME_IMG} text={props.texts.mainData + '\n' + props.texts.skills} />
            <div className={'work_block_photos_container'}>
                {photos}
            </div>
        </div>
    )
};

export default WorkBlock;
