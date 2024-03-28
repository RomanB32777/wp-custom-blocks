import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export interface IIconLinksBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	backgroundColor: string;
	paddingX: number;
	paddingY: number;
	mobilePaddingX: number;
	mobilePaddingY: number;
	borderRadius: number;
	itemsColor: string;
	itemsWidth: number;
	itemsHeight: number;
	itemsPaddingX: number;
	itemsPaddingY: number;
	itemsBorderRadius: number;
	spaceBetween: number;
}

export const attributes: TBlockAttributes<IIconLinksBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	backgroundColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	paddingX: {
		type: "number",
		default: 0,
	},
	paddingY: {
		type: "number",
		default: 0,
	},
	mobilePaddingX: {
		type: "number",
		default: 0,
	},
	mobilePaddingY: {
		type: "number",
		default: 0,
	},
	borderRadius: {
		type: "number",
		default: 0,
	},
	itemsColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	itemsWidth: {
		type: "number",
		default: 32,
	},
	itemsHeight: {
		type: "number",
		default: 32,
	},
	itemsPaddingX: {
		type: "number",
		default: 0,
	},
	itemsPaddingY: {
		type: "number",
		default: 0,
	},
	itemsBorderRadius: {
		type: "number",
		default: 100,
	},
	spaceBetween: {
		type: "number",
		default: 24,
	},
};
