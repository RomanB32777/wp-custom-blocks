import { colors } from "@/constants";
import type {
	IImageAttributes,
	ILinkAttributes,
	TBlockAttributes,
} from "@/types";

export interface ICardElementAttributes {
	uniqueId: string;
	link: ILinkAttributes;
	title: string;
	isParentStyles: boolean;
	titleColor: string;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
	image: IImageAttributes;
}

export const attributes: TBlockAttributes<ICardElementAttributes> = {
	uniqueId: {
		type: "string",
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
	isParentStyles: {
		type: "boolean",
		default: true,
	},
	titleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	buttonText: {
		type: "string",
		default: "Play",
	},
	buttonTextColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	buttonColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	image: {
		type: "object",
		default: {},
	},
};
