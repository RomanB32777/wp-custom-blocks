import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export const baseSpaceBetween = 24;
export const defaultItemHeight = 200;

export interface IImagesBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	itemsTitleColor: string;
	mobileItemsPerView: number;
	tabletItemsPerView: number;
	laptopItemsPerView: number;
	desktopItemsPerView: number;
	mobileSpaceBetween: number;
	tabletSpaceBetween: number;
	laptopSpaceBetween: number;
	desktopSpaceBetween: number;
	mobileHeight: number;
	tabletHeight: number;
	laptopHeight: number;
	desktopHeight: number;
}

export const attributes: TBlockAttributes<IImagesBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "string",
	},
	itemsTitleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	mobileItemsPerView: {
		type: "number",
		default: 2,
	},
	tabletItemsPerView: {
		type: "number",
		default: 3,
	},
	laptopItemsPerView: {
		type: "number",
		default: 4,
	},
	desktopItemsPerView: {
		type: "number",
		default: 6,
	},
	mobileSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	tabletSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	laptopSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	desktopSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	mobileHeight: {
		type: "number",
		default: defaultItemHeight,
	},
	tabletHeight: {
		type: "number",
		default: defaultItemHeight,
	},
	laptopHeight: {
		type: "number",
		default: defaultItemHeight,
	},
	desktopHeight: {
		type: "number",
		default: defaultItemHeight,
	},
};
