import type { IImageAttributes, TBlockAttributes } from "@/types";

export interface IStepElementAttributes {
	uniqueId: string;
	step: number;
	photo: IImageAttributes;
	title: string;
	description: string;
	isOnlyText: boolean;
}

export const attributes: TBlockAttributes<IStepElementAttributes> = {
	uniqueId: {
		type: "string",
	},
	step: {
		type: "number",
		default: 1,
	},
	photo: {
		type: "object",
		default: {},
	},
	title: {
		type: "string",
	},
	description: {
		type: "string",
	},
	isOnlyText: {
		type: "boolean",
	},
};
