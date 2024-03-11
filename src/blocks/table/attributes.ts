import { templateAttributes, type IBaseTemplateAttributes } from "@/components";
import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

export interface ICellValues {
	column: string;
	value: string;
	icon: IImageAttributes;
}

export interface ITableBlockAttributes extends IBaseTemplateAttributes {
	columns: Record<string, string>;
	rows: Record<string, Record<string, ICellValues>>;
	backgroundColor: string;
	columnColor: string;
	rowColor: string;
	isPreviewIcons: boolean;
}

export const attributes: TBlockAttributes<ITableBlockAttributes> = {
	...templateAttributes,
	columns: {
		type: "object",
		default: {},
	},
	rows: {
		type: "object",
		default: {},
	},
	backgroundColor: {
		type: "string",
		default: colors.primary.brightest,
	},
	columnColor: {
		type: "string",
		default: colors.grizzly.DEFAULT,
	},
	rowColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	isPreviewIcons: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
