import type { IImageAttributes, TBlockAttributes } from "@/types";

export interface IImageElementAttributes {
	uniqueId: string;
	image: IImageAttributes;
}

export const attributes: TBlockAttributes<IImageElementAttributes> = {
	uniqueId: {
		type: "string",
	},
	image: {
		type: "object",
		default: {},
	},
};
