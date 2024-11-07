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
	itemsTitleColor: string;
	itemsWidth: number;
	itemsHeight: number;
	itemsPaddingX: number;
	itemsPaddingY: number;
	itemsBorderWidth: number;
	itemsBorderRadius: number;
	itemsBorderColor: number;
	spaceBetween: number;
	isFillItemsWidth: boolean;
}

export const attributes: TBlockAttributes<IIconLinksBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "string",
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
	itemsTitleColor: {
		type: "string",
		default: colors.dark.DEFAULT,
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
	itemsBorderWidth: {
		type: "number",
		default: 0,
	},
	itemsBorderRadius: {
		type: "number",
		default: 100,
	},
	itemsBorderColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	spaceBetween: {
		type: "number",
		default: 24,
	},
	isFillItemsWidth: {
		type: "boolean",
		default: false,
	},
};
