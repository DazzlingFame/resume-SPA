import React from "react";
import {ContactsTexts, Images} from "../constants";
import './ContactCard.css';
import '../screen/Resume.css';

type Contact = {
    type: 'text' | 'link';
    img: string;
    text: string;
    link?: string;
}
const contactsArray: Contact[] = [
    {
        type: 'link',
        img: Images.TELEGRAM_LOGO.source,
        text: 'DazzlingFame',
        link: 'https://t.me/DazzlingFame',
    },
    {
        type: 'link',
        img: Images.PHONE_LOGO.source,
        text: '+7(977)882-01-26',
        link: 'tel:+7977-882-0126'
    },
    {
        text: 'Dazzling Fame',
        type: 'link',
        img: Images.VK_LOGO.source,
        link: 'https://vk.com/dazzling_fame'
    }
];

type Props = {
    texts: ContactsTexts;
}

const ContactCard: React.FC<Props> = ({texts}) => {
    const contactItems = contactsArray.map(item => (
        <div key={item.text} className="contact_card__contact_item__container">
            {item.type === 'text' ?
                <text className="small_text contact_card__contact_item__text">
                    <img className="contact_card__contact_item__image" src={item.img} alt={item.text}/>
                    {item.text}
                </text>
                :
                <a className="small_text contact_card__contact_item__text" href={item.link}>
                    <img className="contact_card__contact_item__image" src={item.img} alt={item.text}/>
                    {item.text}
                </a>
            }
        </div>
    ));

    return (
        <div className='contact_card__root_container'>
            <p className={'bold_subheader_text'}>
                {texts.header}
            </p>
        <div className="contact_card__container">
            <div className="contact_card__block_container">
                <img src={Images.CONTACTS_ME.source} alt="contact_photo" className="contact_photo"/>
                <text className="regular_text contact_name">{texts.name}</text>
            </div>
            <div className="contact_card__block_container">
                {contactItems}
            </div>
        </div>
        </div>
    )
};

export default ContactCard;
