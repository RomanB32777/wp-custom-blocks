import type { IImageAttributes, TBlockAttributes } from "@/types";

import {
	elementAttributes,
	type ITemplateElementAttributes,
} from "../attributes";

export interface IImageElementAttributes extends ITemplateElementAttributes {
	image: IImageAttributes;
	isEnableOpenInModal: boolean;
}

export const attributes: TBlockAttributes<IImageElementAttributes> = {
	...elementAttributes,
	image: {
		type: "object",
		default: {},
	},
	isEnableOpenInModal: {
		type: "boolean",
		default: true,
	},
};
