import React from "react";
import './ImageTextHeader.css'
import {ImageSource} from "../constants";
import {getRandomInt} from "../utils/global";

type PropsType = {
    imageSource: ImageSource;
    header?: string;
    text: string;
}

export const ImageTextHeader: React.FC<PropsType> = (props: PropsType) => {
    const textBlocks = props.text.split('\n').map(textBlock => (
        <p className={'small_text image_header_text'} key={getRandomInt(1000)}>
            {textBlock}
        </p>
    ));
    return (
        <div className={'header_container'} key={getRandomInt(1000)}>
            <img src={props.imageSource.source} alt={props.imageSource.desc} className={'logo'} />
            <div style={{flexDirection: 'column'}}>
                {props.header && (
                    <span className={'small_text image_header_text'}> {props.header} <br/></span>
                )}
                {textBlocks}
            </div>
        </div>
    )
};
