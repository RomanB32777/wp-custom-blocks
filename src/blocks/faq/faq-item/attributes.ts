import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export interface IFaqItemElementAttributes {
	index: number;
	question: string;
	answer: string;
	isParentStyles: boolean;
	questionColor: string;
	answerColor: string;
}

export const attributes: TBlockAttributes<IFaqItemElementAttributes> = {
	index: {
		type: "number",
		default: 0,
	},
	question: {
		type: "string",
	},
	answer: {
		type: "string",
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
};
