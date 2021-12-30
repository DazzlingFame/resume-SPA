import {Images} from "../../constants";

export type Contact = {
	type: "text" | "link";
	img: string;
	text: string;
	link?: string;
};
export const CONTACTS_DATA: Contact[] = [
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
