import { colors } from "@/constants";
import type { ILinkAttributes, TBlockAttributes } from "@/types";

export interface IButtonBlockAttributes {
	link: ILinkAttributes;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
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
};
