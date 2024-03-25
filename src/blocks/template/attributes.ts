import {
	baseSpaceBetween,
	templateAttributes,
	type IBaseTemplateAttributes,
} from "@/components";
import type { TBlockAttributes } from "@/types";

export interface ITemplateBlockAttributes extends IBaseTemplateAttributes {
	isWithItemIndex: boolean;
	mobileHeight: number;
	tabletHeight: number;
	laptopHeight: number;
	desktopHeight: number;
	sliderDesktopSlidesPerView: number;
	sliderDesktopSpaceBetween: number;
	desktopItemsCount: number;
	desktopSpaceBetween: number;
	mobileItemHeight: number;
	tabletItemHeight: number;
	laptopItemHeight: number;
	desktopItemHeight: number;
	isEnableOpenImageInModal: boolean;
}

export interface ITemplateElementAttributes {
	uniqueId: string;
	modificatorClass: string;
	isSlideItem: boolean;
}

export const blockAttributes: TBlockAttributes<ITemplateBlockAttributes> = {
	...templateAttributes,
	// for card blocks
	isWithItemIndex: {
		type: "boolean",
		default: false,
	},
	// slider height
	mobileHeight: {
		type: "number",
		default: 384,
	},
	tabletHeight: {
		type: "number",
		default: 384,
	},
	laptopHeight: {
		type: "number",
		default: 384,
	},
	desktopHeight: {
		type: "number",
		default: 384,
	},
	// slides per view
	sliderDesktopSlidesPerView: {
		type: "number",
		default: 4,
	},
	// space between slides
	sliderDesktopSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	// items count without slider
	desktopItemsCount: {
		type: "number",
		default: 4,
	},
	// space between items without slider
	desktopSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	// item height
	mobileItemHeight: {
		type: "number",
		default: 235,
	},
	tabletItemHeight: {
		type: "number",
		default: 235,
	},
	laptopItemHeight: {
		type: "number",
		default: 275,
	},
	desktopItemHeight: {
		type: "number",
		default: 275,
	},
	// for image blocks
	isEnableOpenImageInModal: {
		type: "boolean",
		default: true,
	},
};

export const elementAttributes: TBlockAttributes<ITemplateElementAttributes> = {
	uniqueId: {
		type: "string",
	},
	modificatorClass: {
		type: "string",
	},
	isSlideItem: {
		type: "boolean",
		default: false,
	},
};
