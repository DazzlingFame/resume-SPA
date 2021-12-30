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
};

const ContactCardComponent: React.FC<Props> = ({ texts }) => {
  const contactItems = CONTACTS_DATA.map((item) => (
    <ContactItemContainer key={item.link} href={item.link}>
      <ContactItemIcon src={item.img} alt={item.text} />
      <ContactItemText>{item.text}</ContactItemText>
    </ContactItemContainer>
  ));

  return (
    <ContactBlockContainer>
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
