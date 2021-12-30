import React from "react";
import {LocaleEnum} from "../utils/localisation";
import Selector from "./selector";
import {SelectorItem} from "./selector/SelectorComponent";

type Props = {
    initialState?: LocaleEnum;
    onStateChanged: (pickedState: SelectorItem) => void;
}

export const languageStates: SelectorItem[] = [
    {
        code: LocaleEnum.en,
        text: 'English'
    },
    {
        code: LocaleEnum.ru,
        text: 'Русский'
    }
];

const LanguageSelector: React.FC<Props> = (props: Props) => {
    return (
        <Selector
            initialStateCode={
                props.initialState
                    ? languageStates.find(item => item.code === props.initialState)?.code ?? languageStates[0].code
                    : languageStates[0].code
            }
            items={languageStates}
            onStateChanged={props.onStateChanged}
            />
    )
};

export default LanguageSelector;
