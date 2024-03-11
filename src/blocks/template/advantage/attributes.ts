import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

import {
	elementAttributes,
	type ITemplateElementAttributes,
} from "../attributes";

export interface IAdvantageElementAttributes
	extends ITemplateElementAttributes {
	title: string;
	titleColor: string;
	backgroundColor: string;
	image: IImageAttributes;
}

export const attributes: TBlockAttributes<IAdvantageElementAttributes> = {
	...elementAttributes,
	title: {
		type: "string",
	},
	titleColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	backgroundColor: {
		type: "string",
		default: colors.primary.brightest,
	},
	image: {
		type: "object",
		default: {},
	},
};
