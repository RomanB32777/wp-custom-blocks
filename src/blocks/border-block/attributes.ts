import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

export interface IBorderBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	icon: IImageAttributes;
	backgroundColor: string;
	borderColor: string;
	borderRadius: number;
	borderWidth: number;
	blockHeight: number;
	text: string;
	textColor: string;
	mobileTextFontSize: number;
	laptopTextFontSize: number;
	bigValue: string;
	bigValueColor: string;
	mobileBigValueFontSize: number;
	laptopBigValueFontSize: number;
	mobileIconWidth: number;
	laptopIconWidth: number;
	horizontalPosition: number;
	verticalPosition: number;
}

export const attributes: TBlockAttributes<IBorderBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "string",
	},
	icon: {
		type: "object",
		default: {},
	},
	backgroundColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	borderColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	borderRadius: {
		type: "number",
		default: 12,
	},
	borderWidth: {
		type: "number",
		default: 2,
	},
	blockHeight: {
		type: "number",
		default: 224,
	},
	text: {
		type: "string",
	},
	textColor: {
		type: "string",
		default: colors.primary.text,
	},
	mobileTextFontSize: {
		type: "number",
		default: 20,
	},
	laptopTextFontSize: {
		type: "number",
		default: 20,
	},
	bigValue: {
		type: "string",
	},
	bigValueColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	mobileBigValueFontSize: {
		type: "number",
		default: 128,
	},
	laptopBigValueFontSize: {
		type: "number",
		default: 128,
	},
	mobileIconWidth: {
		type: "number",
		default: 128,
	},
	laptopIconWidth: {
		type: "number",
		default: 128,
	},
	horizontalPosition: {
		type: "number",
		default: 24,
	},
	verticalPosition: {
		type: "number",
		default: 0,
	},
};
