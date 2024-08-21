import type { TBlockAttributes, TBreakpoints } from "@/types";

export const baseSpaceBetween = 24;
export const templateSliderItemName = "slider-template-card";
export const templateRounded = "template-rounded";

export type TDisableSliderBreakpoints = TBreakpoints | "none";

export interface ITemplateBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	isLoopSlider: boolean;
	isDisableAutoplay: boolean;
	sliderAutoplayDelay: number;
	disableSliderBreakpoint: TDisableSliderBreakpoints | undefined;
	sliderMobileSlidesPerView: number;
	sliderTabletSlidesPerView: number;
	sliderLaptopSlidesPerView: number;
	sliderMobileSpaceBetween: number;
	sliderTabletSpaceBetween: number;
	sliderLaptopSpaceBetween: number;
	mobileItemsCount: number;
	tabletItemsCount: number;
	laptopItemsCount: number;
	desktopItemsCount: number;
	mobileSpaceBetween: number;
	tabletSpaceBetween: number;
	laptopSpaceBetween: number;
	desktopSpaceBetween: number;
	mobileHeight: number;
	tabletHeight: number;
	laptopHeight: number;
	desktopHeight: number;
	sliderDesktopSlidesPerView: number;
	sliderDesktopSpaceBetween: number;
	mobileItemHeight: number;
	tabletItemHeight: number;
	laptopItemHeight: number;
	desktopItemHeight: number;
	borderRadius: number;
	isEnableOpenImageInModal: boolean;
}

export interface ITemplateElementAttributes {
	uniqueId: string;
	blockStyle: string;
}

export const blockAttributes: TBlockAttributes<ITemplateBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	// slider
	isLoopSlider: {
		type: "boolean",
		default: true,
	},
	isDisableAutoplay: {
		type: "boolean",
		default: false,
	},
	sliderAutoplayDelay: {
		type: "number",
		default: 5000,
	},
	disableSliderBreakpoint: {
		type: "string",
		default: "none" as TDisableSliderBreakpoints,
	},
	// slides per view
	sliderMobileSlidesPerView: {
		type: "number",
		default: 1,
	},
	sliderTabletSlidesPerView: {
		type: "number",
		default: 2,
	},
	sliderLaptopSlidesPerView: {
		type: "number",
		default: 3,
	},
	// space between slides
	sliderMobileSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	sliderTabletSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	sliderLaptopSpaceBetween: {
		type: "number",
		default: baseSpaceBetween,
	},
	// items count without slider
	mobileItemsCount: {
		type: "number",
		default: 1,
	},
	tabletItemsCount: {
		type: "number",
		default: 3,
	},
	laptopItemsCount: {
		type: "number",
		default: 4,
	},
	desktopItemsCount: {
		type: "number",
		default: 4,
	},
	// space between items without slider
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
	// item border radius
	borderRadius: {
		type: "number",
		default: 12,
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
	blockStyle: {
		type: "object",
	},
};
