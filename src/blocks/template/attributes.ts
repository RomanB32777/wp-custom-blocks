import { colors } from "@/constants";
import type { ILinkAttributes, TBlockAttributes } from "@/types";

export const baseSpaceBetween = 24;
export const templateSliderItemName = "slider-template-card";
export const templateRounded = "template-rounded";

export interface ITemplateBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	title: string;
	titleColor: string;
	titleTag: keyof HTMLElementTagNameMap;
	titleSize: number;
	titleLineHeight: number;
	titleMobileSize: number;
	titleMobileLineHeight: number;
	titleWeight: number;
	titleTransform: string;
	description: string;
	descriptionColor: string;
	isWithLinkBlock: boolean;
	link: ILinkAttributes;
	linkText: string;
	linkTextColor: string;
	linkBtnArrowColor: string;
	linkBackgroundBtnColor: string;
	isEnableSlider: boolean;
	isLoopSlider: boolean;
	isDisableAutoplay: boolean;
	sliderAutoplayDelay: number;
	sliderMobileSlidesPerView: number;
	sliderTabletSlidesPerView: number;
	sliderLaptopSlidesPerView: number;
	sliderMobileSpaceBetween: number;
	sliderTabletSpaceBetween: number;
	sliderLaptopSpaceBetween: number;
	mobileItemsCount: number;
	tabletItemsCount: number;
	laptopItemsCount: number;
	mobileSpaceBetween: number;
	tabletSpaceBetween: number;
	laptopSpaceBetween: number;
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
	borderRadius: number;
	isEnableOpenImageInModal: boolean;
}

export interface ITemplateElementAttributes {
	uniqueId: string;
	modificatorClass: string;
	isSlideItem: boolean;
}

export const blockAttributes: TBlockAttributes<ITemplateBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	titleTag: {
		type: "string",
		default: "h2",
	},
	titleSize: {
		type: "number",
		default: 24,
	},
	titleLineHeight: {
		type: "number",
		default: 2, // 2rem = 32px
	},
	titleMobileSize: {
		type: "number",
		default: 16,
	},
	titleMobileLineHeight: {
		type: "number",
		default: 1.5, // 1.5rem = 24px
	},
	titleWeight: {
		type: "number",
		default: 900,
	},
	titleTransform: {
		type: "string",
		default: "uppercase",
	},
	description: {
		type: "string",
	},
	descriptionColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	// link
	isWithLinkBlock: {
		type: "boolean",
		default: false,
	},
	link: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	linkText: {
		type: "string",
	},
	linkTextColor: {
		type: "string",
		default: colors.grizzly.dark,
	},
	linkBtnArrowColor: {
		type: "string",
		default: colors.grizzly.dark,
	},
	linkBackgroundBtnColor: {
		type: "string",
		default: colors.white.light,
	},
	// slider
	isEnableSlider: {
		type: "boolean",
		default: true,
	},
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
	modificatorClass: {
		type: "string",
	},
	isSlideItem: {
		type: "boolean",
		default: false,
	},
};
