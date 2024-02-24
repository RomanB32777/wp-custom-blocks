import { colors } from "@/constants";
import type { ILinkAttributes, TBlockAttributes } from "@/types";

export const baseSpaceBetween = 24;
export const defaultItemHeight = 350;

export interface IBonusesBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
	link: ILinkAttributes;
	isParentStyles: boolean;
	itemsBackgroundColor: string;
	itemsTitleColor: string;
	itemsButtonTextColor: string;
	itemsButtonColor: string;
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

export const attributes: TBlockAttributes<IBonusesBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	buttonText: {
		type: "string",
		default: "",
	},
	buttonTextColor: {
		type: "string",
		default: colors.red.DEFAULT,
	},
	buttonColor: {
		type: "string",
		default: colors.secondary.DEFAULT,
	},
	link: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	isParentStyles: {
		type: "boolean",
		default: true,
	},
	itemsBackgroundColor: {
		type: "string",
		default: colors.red.DEFAULT,
	},
	itemsTitleColor: {
		type: "string",
		default: colors.secondary.DEFAULT,
	},
	itemsButtonTextColor: {
		type: "string",
		default: colors.red.DEFAULT,
	},
	itemsButtonColor: {
		type: "string",
		default: colors.secondary.DEFAULT,
	},
	mobileItemsPerView: {
		type: "number",
		default: 1,
	},
	tabletItemsPerView: {
		type: "number",
		default: 1,
	},
	laptopItemsPerView: {
		type: "number",
		default: 2,
	},
	desktopItemsPerView: {
		type: "number",
		default: 2,
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
