import type {
	IImageAttributes,
	ILinkAttributes,
	TBlockAttributes,
} from "@/types";

export interface ISocialNetworkElementAttributes {
	uniqueId: string;
	image: IImageAttributes;
	link: ILinkAttributes;
}

export const attributes: TBlockAttributes<ISocialNetworkElementAttributes> = {
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
};
