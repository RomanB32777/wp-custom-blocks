import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export interface IFaqBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	title: string;
	titleColor: string;
	isParentStyles: boolean;
	questionColor: string;
	answerColor: string;
	activeColor: string;
	borderColor: string;
	arrowBackgroundColor: string;
	arrowColor: string;
}

export const attributes: TBlockAttributes<IFaqBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	isParentStyles: {
		type: "boolean",
		default: true,
	},
	questionColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	answerColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	activeColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	borderColor: {
		type: "string",
		default: colors.primary.light,
	},
	arrowBackgroundColor: {
		type: "string",
		default: colors.white.light,
	},
	arrowColor: {
		type: "string",
		default: colors.grizzly.dark,
	},
};
