import type { IImageAttributes, TBlockAttributes } from "@/types";

export interface IContentBlockAttributes {
	isReverse: boolean;
	image: IImageAttributes;
}

export const attributes: TBlockAttributes<IContentBlockAttributes> = {
	isReverse: {
		type: "boolean",
	},
	image: {
		type: "object",
		default: {},
	},
};
