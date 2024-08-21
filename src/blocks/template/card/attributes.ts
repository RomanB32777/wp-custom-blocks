import { colors } from "@/constants";
import type {
	IImageAttributes,
	ILinkAttributes,
	TBlockAttributes,
} from "@/types";

import {
	elementAttributes,
	type ITemplateElementAttributes,
} from "../attributes";

export interface ICardElementAttributes extends ITemplateElementAttributes {
	title: string;
	titleColor: string;
	backgroundColor: string;
	hoverBackgroundColor: string;
	image: IImageAttributes;
	link: ILinkAttributes;
	description: string;
	descriptionColor: string;
	horizontalPosition: number;
	verticalPosition: number;
}

export const attributes: TBlockAttributes<ICardElementAttributes> = {
	...elementAttributes,
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	description: {
		type: "string",
	},
	descriptionColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	backgroundColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	hoverBackgroundColor: {
		type: "string",
		default: colors.primary.dark,
	},
	image: {
		type: "object",
		default: {},
	},
	link: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	horizontalPosition: {
		type: "number",
		default: 0,
	},
	verticalPosition: {
		type: "number",
		default: 0,
	},
};
