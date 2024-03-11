import { colors } from "@/constants";
import type {
	IImageAttributes,
	ILinkAttributes,
	TBlockAttributes,
} from "@/types";

export interface ISportCardElementAttributes {
	name: string;
	nameColor: string;
	link: ILinkAttributes;
	linkText: string;
	linkColor: string;
	backgroundImg: IImageAttributes;
	icon: IImageAttributes;
	arrowColor: string;
}

export const attributes: TBlockAttributes<ISportCardElementAttributes> = {
	name: {
		type: "string",
	},
	nameColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	link: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	linkText: {
		type: "string",
	},
	linkColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	backgroundImg: {
		type: "object",
		default: {},
	},
	icon: {
		type: "object",
		default: {},
	},
	arrowColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
};
