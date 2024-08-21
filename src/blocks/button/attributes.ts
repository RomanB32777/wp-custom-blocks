import { colors } from "@/constants";
import type { ILinkAttributes, TBlockAttributes } from "@/types";

export enum EButtonAlign {
	Left = "left",
	Center = "center",
	Right = "right",
}

export interface IButtonBlockAttributes {
	link: ILinkAttributes;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
	buttonAlign: EButtonAlign;
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
		default: EButtonAlign.Center,
	},
};
