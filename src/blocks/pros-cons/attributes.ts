import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

export type TProsCons = "pros" | "cons";

export interface IProsConsItemAttributes {
	id: string;
	text: string;
	type: TProsCons;
}

export interface IProsConsBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	title: string;
	titleColor: string;
	pros: IProsConsItemAttributes[];
	cons: IProsConsItemAttributes[];
	contentColor: string;
	prosColor: string;
	consColor: string;
	prosIcon: IImageAttributes;
	consIcon: IImageAttributes;
}

export const attributes: TBlockAttributes<IProsConsBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "string",
	},
	title: {
		type: "string",
		default: "",
	},
	titleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	pros: {
		type: "array",
		default: [],
	},
	cons: {
		type: "array",
		default: [],
	},
	contentColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	prosColor: {
		type: "string",
		default: colors.green.DEFAULT,
	},
	consColor: {
		type: "string",
		default: colors.red.DEFAULT,
	},
	prosIcon: {
		type: "object",
		default: {},
	},
	consIcon: {
		type: "object",
		default: {},
	},
};

export default attributes;
