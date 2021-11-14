type CookieValueByKeyGetter = (cookieKey: string) => string;

export const getCookieValueByKey: CookieValueByKeyGetter = cookieKey => {
    const cookieStringRegexp = new RegExp(`${cookieKey}=[^;]*`);
    const cookieStringMatchArray =
        decodeURIComponent(document.cookie).match(cookieStringRegexp) || [];
    return cookieStringMatchArray.length
        ? cookieStringMatchArray[0].slice(
            cookieStringMatchArray[0].indexOf('=') + 1,
        )
        : '';
};

type CookieSetterParams = {
    key: string;
    value: string;
    maxAgeSec?: number;
    path?: string;
};
type CookieSetter = (params: CookieSetterParams) => void;

export const setCookie: CookieSetter = ({
    key,
    value,
    maxAgeSec = 31536000, //  max lifetime
    path = '/', //  default path
}) => {
    document.cookie = `${key}=${encodeURIComponent(value,)}; Max-Age=${maxAgeSec.toString()}; path=${path}`;
};

type LocalStorageSetter = (key: string, value: string) => void;
export const setItemToLocalStorage: LocalStorageSetter = (key, value) => {
    localStorage.setItem(key, value)
};

type LocalStorageGetter = (key: string) => string | null;
export const getLocalStorageItem: LocalStorageGetter = (key) => {
    return localStorage.getItem(key);
};



