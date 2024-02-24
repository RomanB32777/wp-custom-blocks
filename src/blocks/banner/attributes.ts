import { colors } from "@/constants";
import type {
	IImageAttributes,
	ILinkAttributes,
	TBlockAttributes,
} from "@/types";

export interface IPaymentAttributes {
	id: string;
	image: IImageAttributes;
}

export interface IBannerBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	bonusLabel: string;
	bonusLink: ILinkAttributes;
	bonusBackgroundColor: string;
	bonusLabelColor: string;
	domain: string;
	domainLink: ILinkAttributes;
	domainLinkColor: string;
	googleLink: ILinkAttributes;
	appleLink: ILinkAttributes;
	logo: IImageAttributes;
	backgroundColor: string;
	borderColor: string;
	paymentBackgroundColor: string;
	payments: IPaymentAttributes[];
}

export const attributes: TBlockAttributes<IBannerBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	bonusLabel: {
		type: "string",
	},
	bonusLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	bonusBackgroundColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	bonusLabelColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	domain: {
		type: "string",
	},
	domainLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	domainLinkColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	googleLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	appleLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	logo: {
		type: "object",
		default: {},
	},
	backgroundColor: {
		type: "string",
		default: "#fff0",
	},
	borderColor: {
		type: "string",
		default: colors.primary.grizzly,
	},
	paymentBackgroundColor: {
		type: "string",
		default: colors.primary.brightest,
	},
	payments: {
		type: "array",
		default: [],
	},
};

export default attributes;
