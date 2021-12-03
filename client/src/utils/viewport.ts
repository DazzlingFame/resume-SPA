type ElementInViewportChecker = (elementTop: number, elementBottom: number, isPrecise?: boolean) => boolean;

export const isElementInViewport: ElementInViewportChecker = (elementTop, elementBottom, isPrecise) => {
    //  Consider that user looks at the center of page and viewport status starts if component pass the 20% of bottom part of window
    const windowSeenZone = isPrecise ? 1 : 0.8;

    return elementTop < (window.innerHeight * windowSeenZone) && elementBottom > (window.innerHeight * (1 - windowSeenZone))
}
