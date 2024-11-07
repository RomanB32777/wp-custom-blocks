import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export interface IFaqBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	isParentStyles: boolean;
	isOpenDefault: boolean;
	isOpenMultiple: boolean;
	questionColor: string;
	answerColor: string;
	arrowColor: string;
}

export const attributes: TBlockAttributes<IFaqBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "string",
	},
	isParentStyles: {
		type: "boolean",
		default: true,
	},
	isOpenDefault: {
		type: "boolean",
		default: true,
	},
	isOpenMultiple: {
		type: "boolean",
		default: false,
	},
	questionColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	answerColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	arrowColor: {
		type: "string",
		default: colors.grizzly.dark,
	},
};
