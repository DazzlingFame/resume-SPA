import '../screen/Resume.css'
import * as React from "react";
import {Images, InfoTexts} from "../constants";
import InfoBlock from "./infoBlock";
import {revealedInViewport} from "../hocs/revealedInViewport";

type Props = {
    texts: InfoTexts;
}

const photosArray = [Images.BICYCLE_IMG, Images.WARHAMMER_IMG, Images.SHIVA_IMG];

const AboutContent: React.FC<Props> = props => (
    <div>
        {!!props.texts.header &&
            (
                <p className={'bold_subheader_text'}>
                    {props.texts.header}
                </p>
            )
        }
        <InfoBlock photos={photosArray} texts={props.texts} imageSource={Images.ABOUT_ME_IMG}/>
    </div>
);

export default revealedInViewport<Props>('AboutContent')(AboutContent);
