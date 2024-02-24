import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export interface IStepsBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	mainColor: string;
	stepColor: string;
	titleColor: string;
	descriptionColor: string;
	borderColor: string;
	isOnlyText: boolean;
}

export const attributes: TBlockAttributes<IStepsBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	mainColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	stepColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	titleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	descriptionColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	borderColor: {
		type: "string",
		default: colors.primary.grizzly,
	},
	isOnlyText: {
		type: "boolean",
		default: false,
	},
};
