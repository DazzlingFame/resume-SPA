import React, {useState} from "react";
import chevronDown from '../assets/images/chevron-down-24.png'
import './Selector.css'
import {SelectorContainer} from "./SelectorStyles";

export const CHEVRON_DOWN = {
    source: chevronDown, desc: 'chevronDown'
};

export type SelectorItem = {
    code: string;
    text: string;
}

type Props = {
    initialStateCode?: string;
    items: SelectorItem[];
    onStateChanged: (pickedState: SelectorItem) => void;
}

const Selector: React.FC<Props> = (props: Props) => {
    const {initialStateCode, items, onStateChanged} = props;
    const [currentState, setCurrentState] = useState<SelectorItem>(
        initialStateCode
            ? items.find(item => item.code === initialStateCode) ?? items[0]
            : items[0]
    );
    const [isSelectorVisible, setIsSelectorVisible] = useState<boolean>(false);
    const toggleItems = items.map(toggleState => (
        <div className="dropdown-selector__selected-container"
             onClick={() => {
                 setIsSelectorVisible(false);
                 setCurrentState(toggleState);
                 onStateChanged(toggleState);
             }
             }>
            <span className="small_text dropdown-selector__selected-text">
                {toggleState.text}
            </span>
        </div>
    ));

    const changeIsSelectorVisibleState = () => setIsSelectorVisible(!isSelectorVisible);

    return (
        <div className={'dropdown-selector__container'}>
            <div className={'dropdown-selector__current-container'} onClick={changeIsSelectorVisibleState}>
                <span className="regular_text dropdown-selector__current-text">
                    {currentState.text}
                </span>
                <img className={'dropdown-selector__chevron'} alt={CHEVRON_DOWN.desc} src={CHEVRON_DOWN.source}/>
            </div>
            <SelectorContainer isOpened={isSelectorVisible}>
                {toggleItems}
            </SelectorContainer>
        </div>
    )
};

export default Selector;
