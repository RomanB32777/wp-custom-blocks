import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export interface ISocialsBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	itemsColor: string;
	itemsSize: number;
	itemsPadding: number;
	spaceBetween: number;
}

export const attributes: TBlockAttributes<ISocialsBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "string",
	},
	itemsColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	itemsSize: {
		type: "number",
		default: 32,
	},
	itemsPadding: {
		type: "number",
		default: 0,
	},
	spaceBetween: {
		type: "number",
		default: 24,
	},
};
