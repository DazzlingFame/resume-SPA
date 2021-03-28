import React from "react";
import './imageTextHeader.css'
import {ImageSource} from "../constants";

type PropsType = {
    imageSource: ImageSource;
    header?: string;
    text: string;
}

export const ImageTextHeader: React.FC<PropsType> = (props: PropsType) => {
    const textBlocks = props.text.split('\n').map(textBlock => (
        <p className={'small_text image_header_text'}>
            {textBlock}
        </p>
    ));
    return (
        <div className={'header_container'}>
            <img src={props.imageSource.source} alt={props.imageSource.desc} className={'logo'} />
            <div style={{flexDirection: 'column'}}>
                {props.header && (
                    <text className={'small_text image_header_text'}> {props.header} <br/></text>
                )}
                {textBlocks}
            </div>
        </div>
    )
};
