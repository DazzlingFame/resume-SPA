import React from "react";
import { ContactsTexts, Images } from "../constants";
import { revealedInViewport } from "../hocs/revealedInViewport";
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

type Contact = {
  type: "text" | "link";
  img: string;
  text: string;
  link?: string;
};
const contactsArray: Contact[] = [
  {
    type: "link",
    img: Images.TELEGRAM_LOGO.source,
    text: "DazzlingFame",
    link: "https://t.me/DazzlingFame",
  },
  {
    type: "link",
    text: "dazzling_fame_",
    img: Images.INSTAGRAM_LOGO.source,
    link: "https://instagram.com/dazzling_fame_",
  },
  {
    type: "link",
    text: "DazzlingFame",
    img: Images.GITHUB_LOGO.source,
    link: "https://github.com/DazzlingFame",
  },
  {
    text: "Dazzling Fame",
    type: "link",
    img: Images.VK_LOGO.source,
    link: "https://vk.com/dazzling_fame",
  },
  {
    type: "link",
    img: Images.PHONE_LOGO.source,
    text: "+7(977)882-01-26",
    link: "tel:+7977-882-0126",
  },
];

type Props = {
  texts: ContactsTexts;
};

const ContactCard: React.FC<Props> = ({ texts }) => {
  const contactItems = contactsArray.map((item) => (
    <ContactItemContainer key={item.link} href={item.link}>
      <ContactItemIcon src={item.img} alt={item.text} />
      <ContactItemText>{item.text}</ContactItemText>
    </ContactItemContainer>
  ));

  return (
    <ContactBlockContainer>
      <ContactBlockHeader>{texts.header}</ContactBlockHeader>
      <ContactCardContainer>
        <ContactSideContainer className="contact_card__block_container">
          <ContactPhoto
            src={Images.CONTACTS_ME.source}
            alt="contact_photo"
            className="contact_photo"
          />
          <ContactName>{texts.name}</ContactName>
        </ContactSideContainer>
        <ContactSideContainer className="contact_card__block_container">
          {contactItems}
        </ContactSideContainer>
      </ContactCardContainer>
    </ContactBlockContainer>
  );
};

export default revealedInViewport<Props>("ContactCard")(ContactCard);
