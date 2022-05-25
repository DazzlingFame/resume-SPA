import React, {createRef, useState} from "react";
import "./Resume.css";
import {
  getLocaleFromStorage,
  getLocalisedTexts,
  LocaleEnum,
  setLocaleToStorage,
} from "../utils/localisation";
import {HeaderLinksText, MainTexts, multiLanguageTexts} from "../constants";
import LanguageSelector from "../components/LanguageSelector";
import AboutContent from "../components/AboutContent";
import WorkContent from "../components/WorkContent";
import ContactCard from "../components/contactCard";
import {IS_MOBILE_LAYOUT_MEDIA, useMedia} from "../utils/useMedia";
import {SelectorItem} from "../components/selector/SelectorComponent";
import PageScrollProgressBar from "../components/pageScrollProgressBar";
import {
  Container,
  HeaderContainer,
  NavigationContainer,
  NavigationLinkContainer,
  RootContainer,
} from "./ResumeStyles";

export const Resume: React.FC = () => {
  const workRef = createRef<HTMLDivElement>();
  const aboutRef = createRef<HTMLDivElement>();
  const contactsRef = createRef<HTMLDivElement>();
  const [locale, setLocale] = useState(getLocaleFromStorage());
  const isMobile = useMedia(IS_MOBILE_LAYOUT_MEDIA);

  const getHeaderLinksConfig = ({ work, about, contacts }: HeaderLinksText) => [
    {
      text: work,
      onClick: () => {
        workRef?.current &&
          workRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      },
    },
    {
      text: about,
      onClick: () => {
        aboutRef?.current &&
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      },
    },
    {
      text: contacts,
      onClick: () => {
        contactsRef?.current &&
          contactsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      },
    },
  ];

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

  const mainTexts: MainTexts = getLocalisedTexts(
    multiLanguageTexts.mainTexts,
    locale
  );
  const contactsTexts = getLocalisedTexts(
    multiLanguageTexts.contactsTexts,
    locale
  );

  const headerLinks = getHeaderLinksConfig(mainTexts.headerLinks).map(
    (item) => (
      <NavigationLinkContainer onClick={item.onClick} key={item.text}>
        <span className={"regular_text"}>{item.text}</span>
      </NavigationLinkContainer>
    )
  );

  return (
    <RootContainer>
      <Container>
        <PageScrollProgressBar />
        <HeaderContainer>
          <div>
            <span className={"nav_header_text"}>{mainTexts.header}</span>
            {isMobile && (
              <p className={"bold_header_text"}>{mainTexts.welcome}</p>
            )}
          </div>
          <NavigationContainer>
            {headerLinks}
            <LanguageSelector
              initialState={locale}
              onStateChanged={onLanguageChanged}
            />
          </NavigationContainer>
        </HeaderContainer>
        {!isMobile && (
          <span className={"bold_header_text"}>{mainTexts.welcome}</span>
        )}
        <WorkContent
          containerRef={workRef}
          texts={getLocalisedTexts(multiLanguageTexts.workTexts, locale)}
        />
        <AboutContent
          containerRef={aboutRef}
          texts={getLocalisedTexts(multiLanguageTexts.aboutTexts, locale)}
        />
        <ContactCard containerRef={contactsRef} texts={contactsTexts} />
      </Container>
    </RootContainer>
  );
};
