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
	index: number;
	isWithIndex: boolean;
	link: ILinkAttributes;
	title: string;
	titleColor: string;
	category: string;
	categoryColor: string;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
	review: string;
	reviewColor: string;
	image: IImageAttributes;
}

export const attributes: TBlockAttributes<ICardElementAttributes> = {
	...elementAttributes,
	index: {
		type: "number",
		default: 0,
	},
	isWithIndex: {
		type: "boolean",
		default: false,
	},
	link: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	category: {
		type: "string",
	},
	categoryColor: {
		type: "string",
		default: colors.yellow.DEFAULT,
	},
	buttonText: {
		type: "string",
		default: "Play now",
	},
	buttonTextColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	buttonColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	review: {
		type: "string",
		default: "Read Review",
	},
	reviewColor: {
		type: "string",
		default: colors.grizzly.DEFAULT,
	},
	image: {
		type: "object",
		default: {},
	},
};
