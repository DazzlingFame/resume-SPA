import React, {createRef, useState} from "react";
import './Resume.css'
import {getLocaleFromStorage, getLocalisedTexts, LocaleEnum, setLocaleToStorage} from "../utils/localisation";
import {HeaderLinksText, MainTexts, multiLanguageTexts} from "../constants";
import {SelectorItem} from "../components/Selector";
import LanguageSelector from "../components/LanguageSelector";
import AboutContent from "../components/AboutContent";
import {WorkContent} from "../components/WorkContent";
import ContactCard from "../components/ContactCard";
import {IS_MOBILE_LAYOUT_MEDIA, useMedia} from "../utils/useMedia";


export const Resume: React.FC = () => {
    const workRef = createRef<HTMLDivElement>();
    const aboutRef = createRef<HTMLDivElement>();
    const contactsRef = createRef<HTMLDivElement>();
    const [locale, setLocale] = useState(getLocaleFromStorage());
    const isMobile = useMedia(IS_MOBILE_LAYOUT_MEDIA);


    const getHeaderLinksConfig = ({work, about, contacts}: HeaderLinksText) => ([
        {
            text: about, onClick: () => {
                aboutRef?.current && aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }
        },
        {
            text: work, onClick: () => {
                workRef?.current && workRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }
        },
        {
            text: contacts, onClick: () => {
                contactsRef?.current && contactsRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }
        },
    ]);

    const onLanguageChanged = (pickedState: SelectorItem) => {
        switch (pickedState.code) {
            case LocaleEnum.en:
                setLocale(LocaleEnum.en);
                setLocaleToStorage(LocaleEnum.en);
                break;
            case LocaleEnum.ru:
                setLocale(LocaleEnum.ru);
                setLocaleToStorage(LocaleEnum.ru);
                break;
        }
    };

    const mainTexts: MainTexts = getLocalisedTexts(multiLanguageTexts.mainTexts, locale);
    const contactsTexts = getLocalisedTexts(multiLanguageTexts.contactsTexts, locale);

    const headerLinks = getHeaderLinksConfig(mainTexts.headerLinks).map(item => (
        <div className={'header_link_container'} onClick={item.onClick} key={item.text}>
                <span className={'regular_text'}>
                    {item.text}
                </span>
        </div>
    ));

        return (
            <div className={'root_container'}>
                <div className={'container'}>
                    <div className={'nav_header_container'}>
                        <div>
                             <span className={'nav_header_text'}>
                                {mainTexts.header}
                             </span>
                            {isMobile && (
                                <p className={'bold_header_text'}>
                                    {mainTexts.welcome}
                                </p>
                            )}
                        </div>
                        <div className="nav_header_links_container">
                            {headerLinks}
                            <LanguageSelector initialState={locale} onStateChanged={onLanguageChanged}/>
                        </div>
                    </div>
                    {!isMobile &&
                    <span className={'bold_header_text'}>
                        {mainTexts.welcome}
                    </span>
                    }
                    <div ref={aboutRef}>
                        <AboutContent texts={getLocalisedTexts(multiLanguageTexts.aboutTexts, locale)}/>
                    </div>
                    <div ref={workRef}>
                        <WorkContent texts={getLocalisedTexts(multiLanguageTexts.workTexts, locale)}/>
                    </div>
                    <div ref={contactsRef}>
                        <ContactCard texts={contactsTexts}/>
                    </div>
                </div>
            </div>
        )
    }
