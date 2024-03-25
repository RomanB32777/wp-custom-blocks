import { colors } from "@/constants";
import type {
	IImageAttributes,
	ILinkAttributes,
	TBlockAttributes,
} from "@/types";

export const baseSpaceBetween = 24;

export interface IBannerBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	backgroundColor: string;
	backgroundImage: IImageAttributes;
	title: string;
	titleColor: string;
	description: string;
	descriptionColor: string;
	sportsTitle: string;
	sportsTitleColor: string;
	sportsDescription: string;
	sportsDescriptionColor: string;
	buttonLink: ILinkAttributes;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
	desktopItemsCount: number;
	desktopSpaceBetweenItems: number;
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
	adviceBackgroundColor: string;
	adviceBackgroundImage: IImageAttributes;
	adviceTitle: string;
	adviceTitleColor: string;
	adviceDescription: string;
	adviceDescriptionColor: string;
}

export const attributes: TBlockAttributes<IBannerBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	backgroundColor: {
		type: "string",
		default: colors.dark.grizzly,
	},
	backgroundImage: {
		type: "object",
		default: {},
	},
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	description: {
		type: "string",
	},
	descriptionColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	// sports title
	sportsTitle: {
		type: "string",
	},
	sportsTitleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	// sports description
	sportsDescription: {
		type: "string",
	},
	sportsDescriptionColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	// button
	buttonLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	buttonText: {
		type: "string",
		default: "",
	},
	buttonTextColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	buttonColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	// items
	desktopItemsCount: {
		type: "number",
		default: 3,
	},
	desktopSpaceBetweenItems: {
		type: "number",
		default: baseSpaceBetween,
	},
	// slider
	isEnableSlider: {
		type: "boolean",
		default: false,
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
	// advice
	adviceBackgroundColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	adviceBackgroundImage: {
		type: "object",
		default: {},
	},
	adviceTitle: {
		type: "string",
	},
	adviceTitleColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	adviceDescription: {
		type: "string",
	},
	adviceDescriptionColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
};
