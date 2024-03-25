import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export enum ELineTypes {
	Solid = "solid",
	Dotted = "dotted",
	Dashed = "dashed",
	Double = "double",
	Groove = "groove",
	Ridge = "ridge",
	Inset = "inset",
	Outset = "outset",
}

export interface IStepsBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	mainColor: string;
	stepColor: string;
	titleColor: string;
	descriptionColor: string;
	borderColor: string;
	lineType: ELineTypes;
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
		default: colors.dark.DEFAULT,
	},
	descriptionColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	borderColor: {
		type: "string",
		default: colors.primary.grizzly,
	},
	lineType: {
		type: "string",
		default: ELineTypes.Solid,
	},
	isOnlyText: {
		type: "boolean",
		default: false,
	},
};
