import type { User } from "@wordpress/core-data";

import { colors } from "@/constants";
import type { TBlockAttributes } from "@/types";

export interface IAuthorBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	description: string;
	author: User;
	backgroundColor: string;
	avatarBorderColor: string;
	descriptionColor: string;
}

export const attributes: TBlockAttributes<IAuthorBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	description: {
		type: "string",
	},
	author: {
		type: "object",
		default: {},
	},
	backgroundColor: {
		type: "string",
		default: colors.primary.DEFAULT,
	},
	avatarBorderColor: {
		type: "string",
		default: "#ffffff80",
	},
	descriptionColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
};
