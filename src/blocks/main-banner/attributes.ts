import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

export interface IMainBannerBlockAttributes {
	uniqueId: string;
	backgroundColor: string;
	backgroundImage: IImageAttributes;
	logoImage: IImageAttributes;
}

export const attributes: TBlockAttributes<IMainBannerBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	backgroundColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	backgroundImage: {
		type: "object",
		default: {},
	},
	logoImage: {
		type: "object",
		default: {},
	},
};
