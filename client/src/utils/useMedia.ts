import {useState, useEffect} from 'react';

export function useMedia(mediaQuery: MediaQueryList): boolean {
    const [isMatches, setIsMatches] = useState(mediaQuery.matches);

    useEffect(() => {
        const handler = ({matches}: MediaQueryListEvent): void =>
            setIsMatches(matches);

        mediaQuery.addListener(handler);
        return () => mediaQuery.removeListener(handler);
    }, [mediaQuery]);

    return isMatches;
}

export const CSS_LAYOUT_MOBILE_TO_DESKTOP_BOUNDARY = 920;

export const IS_MOBILE_LAYOUT_MEDIA = window.matchMedia(
    `all and (max-width: ${CSS_LAYOUT_MOBILE_TO_DESKTOP_BOUNDARY}px)`,
);
