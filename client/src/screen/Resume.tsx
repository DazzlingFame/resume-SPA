import React, { createRef, useState } from "react";
import "./Resume.css";
import {
  getLocaleFromStorage,
  getLocalisedTexts,
  LocaleEnum,
  setLocaleToStorage,
} from "../utils/localisation";
import { MainTexts, multiLanguageTexts } from "../constants";
import AboutContent from "../components/AboutContent";
import WorkContent from "../components/WorkContent";
import ContactCard from "../components/contactCard";
import { IS_MOBILE_LAYOUT_MEDIA, useMedia } from "../utils/useMedia";
import { SelectorItem } from "../components/selector/SelectorComponent";
import PageScrollProgressBar from "../components/pageScrollProgressBar";
import { Container, HeaderContainer, RootContainer } from "./ResumeStyles";
import { Navigation } from "../components/Navigation";
import { CVBlock } from "../components/CVBlock";

export const Resume: React.FC = () => {
  const workRef = createRef<HTMLDivElement>();
  const aboutRef = createRef<HTMLDivElement>();
  const contactsRef = createRef<HTMLDivElement>();
  const [locale, setLocale] = useState(getLocaleFromStorage());
  const isMobile = useMedia(IS_MOBILE_LAYOUT_MEDIA);

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
          <Navigation
            navigationItems={[
              { title: mainTexts.headerLinks.work, ref: workRef },
              { title: mainTexts.headerLinks.about, ref: aboutRef },
              { title: mainTexts.headerLinks.contacts, ref: contactsRef },
            ]}
            onLanguageChanged={onLanguageChanged}
          />
        </HeaderContainer>
        {!isMobile && (
          <span className={"bold_header_text"}>{mainTexts.welcome}</span>
        )}
        <CVBlock
          CVData={getLocalisedTexts(multiLanguageTexts.cvTexts, locale)}
        />
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
