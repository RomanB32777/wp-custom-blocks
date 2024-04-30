import { templateAttributes, type IBaseTemplateAttributes } from "@/components";
import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

export interface ICellValues {
	value: string;
	icon?: IImageAttributes;
	isReverse?: boolean;
}

export interface ISelectedCeil {
	colId: string | undefined;
	rowId: string | undefined;
}

export interface ITableBlockAttributes extends IBaseTemplateAttributes {
	columns: Record<string, string>;
	rows: Record<string, Record<string, ICellValues>>;
	backgroundColor: string;
	columnColor: string;
	rowColor: string;
	borderRadius: number;
}

const columKey = String(Math.random());
const defaultColumns: ITableBlockAttributes["columns"] = {
	[columKey]: "",
};

const rowKey = String(Math.random());
const defaultRows: ITableBlockAttributes["rows"] = {
	[rowKey]: {
		[columKey]: {
			value: "",
		},
	},
};

export const attributes: TBlockAttributes<ITableBlockAttributes> = {
	...templateAttributes,
	columns: {
		type: "object",
		default: defaultColumns,
	},
	rows: {
		type: "object",
		default: defaultRows,
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
	borderRadius: {
		type: "number",
		default: 8,
	},
};

export default attributes;
