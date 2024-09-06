import { colors } from "@/constants";
import {
	EHorizontalAlign,
	type ILinkAttributes,
	type TBlockAttributes,
} from "@/types";

export interface IButtonBlockAttributes {
	link: ILinkAttributes;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
	buttonAlign: EHorizontalAlign;
}

export const attributes: TBlockAttributes<IButtonBlockAttributes> = {
	link: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	buttonText: {
		type: "string",
	},
	buttonTextColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	buttonColor: {
		type: "string",
		default: colors.secondary.DEFAULT,
	},
	buttonAlign: {
		type: "string",
		default: EHorizontalAlign.Center,
	},
};
