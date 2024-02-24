import { colors } from "@/constants";
import type {
	IImageAttributes,
	ILinkAttributes,
	TBlockAttributes,
} from "@/types";

export interface IBonusElementAttributes {
	uniqueId: string;
	link: ILinkAttributes;
	isParentStyles: boolean;
	backgroundColor: string;
	title: string;
	titleColor: string;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
	image: IImageAttributes;
}

export const attributes: TBlockAttributes<IBonusElementAttributes> = {
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
	isParentStyles: {
		type: "boolean",
		default: true,
	},
	backgroundColor: {
		type: "string",
		default: colors.red.DEFAULT,
	},
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
		default: colors.secondary.DEFAULT,
	},
	buttonText: {
		type: "string",
		default: "Sign Up Now",
	},
	buttonTextColor: {
		type: "string",
		default: colors.red.DEFAULT,
	},
	buttonColor: {
		type: "string",
		default: colors.secondary.DEFAULT,
	},
	image: {
		type: "object",
		default: {},
	},
};
