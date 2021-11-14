import {getLocalStorageItem, setItemToLocalStorage} from "./storage";

const LOCALE_KEY = 'locale';

export type TextWithTranslation<T> = {en: T; ru: T}
export enum LocaleEnum {
    ru = 'RU',
    en = 'ENG',
}

type LocalisedTextGetter = <T>(text: TextWithTranslation<T>, locale: LocaleEnum) => T;
export const getLocalisedTexts: LocalisedTextGetter = (text, locale) =>  {
    switch (locale) {
        case LocaleEnum.en:
            return text.en;
        case LocaleEnum.ru:
            return text.ru;
        default:
            return text.en;
    }
};


type LocaleToStorageSetter = (locale: LocaleEnum) => void;
export const setLocaleToStorage: LocaleToStorageSetter = (locale) => {
    setItemToLocalStorage(LOCALE_KEY, locale.valueOf())
};

type LocaleFromStorageGetter = () => LocaleEnum;
export const getLocaleFromStorage: LocaleFromStorageGetter = () => {
    const stringLocale =  getLocalStorageItem(LOCALE_KEY);
    switch (stringLocale) {
        case 'ENG':
        default:
            return LocaleEnum.en;
        case 'RU':
            return LocaleEnum.ru;
    }
};
