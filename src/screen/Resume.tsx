import React from "react";
import './Resume.css'
import {getLocaleFromStorage, getLocalisedTexts, LocaleEnum, setLocaleToStorage} from "../utils/localisation";
import {HeaderLinksText, MainTexts, multiLanguageTexts} from "../constants";
import {SelectorItem} from "../components/Selector";
import LanguageSelector from "../components/LanguageSelector";
import AboutContent from "../components/AboutContent";
import {WorkContent} from "../components/WorkContent";
import ContactCard from "../components/ContactCard";

type Props = {}

type State = {
    locale: LocaleEnum;
}

export class Resume extends React.PureComponent<Props, State> {
    workRef: React.RefObject<HTMLDivElement> | null;
    aboutRef: React.RefObject<HTMLDivElement> | null;
    contactsRef: React.RefObject<HTMLDivElement> | null;

    constructor(props: Props) {
        super(props);
        this.workRef = React.createRef<HTMLDivElement>();
        this.aboutRef = React.createRef<HTMLDivElement>();
        this.contactsRef = React.createRef<HTMLDivElement>();

        this.state = {
            locale:  getLocaleFromStorage(),
        }
    }

    getHeaderLinksConfig = ({work, about, contacts}: HeaderLinksText) => ([
        {
            text: about, onClick: () => {
                this.aboutRef?.current && this.aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }
        },
        {
            text: work, onClick: () => {
                this.workRef?.current && this.workRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }
        },
        {
            text: contacts, onClick: () => {
                this.contactsRef?.current && this.contactsRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }
        },
    ]);

    onLanguageChanged = (pickedState: SelectorItem) => {
        switch (pickedState.code) {
            case LocaleEnum.en:
                this.setState({
                    locale: LocaleEnum.en,
                });
                setLocaleToStorage(LocaleEnum.en);
                break;
            case LocaleEnum.ru:
                this.setState({
                    locale: LocaleEnum.ru,
                });
                setLocaleToStorage(LocaleEnum.ru);
                break;
        }
    };

    render() {
        const mainTexts: MainTexts = getLocalisedTexts(multiLanguageTexts.mainTexts, this.state.locale);
        const contactsTexts = getLocalisedTexts(multiLanguageTexts.contactsTexts, this.state.locale);

        const headerLinks = this.getHeaderLinksConfig(mainTexts.headerLinks).map(item => (
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
                        <span className={'nav_header_text'}>
                            {mainTexts.header}
                        </span>
                        <div className="nav_header_links_container">
                            {headerLinks}
                            <LanguageSelector initialState={this.state.locale} onStateChanged={this.onLanguageChanged}/>
                        </div>
                    </div>
                    <p className={'bold_header_text'}>
                        {mainTexts.welcome}
                    </p>
                    <div ref={this.aboutRef}>
                        <AboutContent texts={getLocalisedTexts(multiLanguageTexts.aboutTexts, this.state.locale)}/>
                    </div>
                    <div ref={this.workRef}>
                        <WorkContent texts={getLocalisedTexts(multiLanguageTexts.workTexts, this.state.locale)}/>
                    </div>
                    <div ref={this.contactsRef}>
                        <ContactCard texts={contactsTexts}/>
                    </div>
                </div>
            </div>
        )
    }
}
