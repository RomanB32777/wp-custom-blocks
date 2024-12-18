import type {
	IImageAttributes,
	ILinkAttributes,
	TBlockAttributes,
} from "@/types";

export interface IIconLinkElementAttributes {
	uniqueId: string;
	image: IImageAttributes;
	link: ILinkAttributes;
	title: string;
}

export const attributes: TBlockAttributes<IIconLinkElementAttributes> = {
	uniqueId: {
		type: "string",
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
	title: {
		type: "string",
	},
};
