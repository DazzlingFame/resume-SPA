import React from "react";
import { ContactsTexts, Images } from "../../constants";
import { revealedInViewport } from "../../hocs/revealedInViewport";
import {
  ContactBlockContainer,
  ContactBlockHeader,
  ContactCardContainer,
  ContactItemContainer,
  ContactItemIcon,
  ContactItemText,
  ContactName,
  ContactPhoto,
  ContactSideContainer,
} from "./ContactCardStyles";
import { CONTACTS_DATA } from "./constants";

type Props = {
  texts: ContactsTexts;
  containerRef: React.RefObject<HTMLDivElement>;
};

const ContactCardComponent: React.FC<Props> = ({ texts, containerRef }) => {
  const contactItems = CONTACTS_DATA.map((item) => (
    <ContactItemContainer key={item.link} href={item.link}>
      <ContactItemIcon src={item.img} alt={item.text} />
      <ContactItemText>{item.text}</ContactItemText>
    </ContactItemContainer>
  ));

  return (
    <ContactBlockContainer ref={containerRef}>
      <ContactBlockHeader>{texts.header}</ContactBlockHeader>
      <ContactCardContainer>
        <ContactSideContainer>
          <ContactPhoto src={Images.CONTACTS_ME.source} alt="contact_photo" />
          <ContactName>{texts.name}</ContactName>
        </ContactSideContainer>
        <ContactSideContainer>{contactItems}</ContactSideContainer>
      </ContactCardContainer>
    </ContactBlockContainer>
  );
};

export default revealedInViewport<Props>("ContactCard")(ContactCardComponent);
