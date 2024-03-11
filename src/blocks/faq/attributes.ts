import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

export interface IFaqBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	backgroundColor: string;
	backgroundImage: IImageAttributes;
	title: string;
	titleColor: string;
	description: string;
	descriptionColor: string;
	isParentStyles: boolean;
	questionColor: string;
	answerColor: string;
	activeColor: string;
	borderColor: string;
	arrowBackgroundColor: string;
	arrowColor: string;
	activeArrowColor: string;
}

export const attributes: TBlockAttributes<IFaqBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	backgroundColor: {
		type: "string",
		default: colors.white.standard,
	},
	backgroundImage: {
		type: "object",
		default: {},
	},
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	description: {
		type: "string",
	},
	descriptionColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	isParentStyles: {
		type: "boolean",
		default: true,
	},
	questionColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	answerColor: {
		type: "string",
		default: colors.dark.DEFAULT,
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
	activeArrowColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
};
