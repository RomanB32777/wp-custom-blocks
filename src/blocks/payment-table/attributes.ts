import type { TdHTMLAttributes, ThHTMLAttributes } from "react";

import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

export type TCellHTMLAttributes =
	| ThHTMLAttributes<HTMLTableCellElement>
	| TdHTMLAttributes<HTMLTableCellElement>;

export interface ICellValues {
	value: string;
	icon?: IImageAttributes;
}

export interface ISelectedCeil {
	colIndex: number | undefined;
	rowIndex: number | undefined;
	colId: string | undefined;
	rowId: string | undefined;
}

export interface IPaymentTableBlockAttributes {
	uniqueId: string;
	columns: Record<string, string>;
	rows: Record<string, Record<string, ICellValues>>;
	borderRadius: number;
	headBackgroundColor: string;
	bodyBackgroundColor: string;
	columnColor: string;
	rowColor: string;
	borderColor: string;
}

const columnKey = String(Math.random());
const defaultColumns: IPaymentTableBlockAttributes["columns"] = {
	[columnKey]: "Method",
};

const rowKey = String(Math.random());
const defaultRows: IPaymentTableBlockAttributes["rows"] = {
	[rowKey]: {
		[columnKey]: {
			value: "",
		},
	},
};

export const attributes: TBlockAttributes<IPaymentTableBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	columns: {
		type: "object",
		default: defaultColumns,
	},
	rows: {
		type: "object",
		default: defaultRows,
	},
	borderRadius: {
		type: "number",
		default: 8,
	},
	headBackgroundColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	bodyBackgroundColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	rowColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	columnColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	borderColor: {
		type: "string",
		default: colors.grizzly.dark,
	},
};

export default attributes;
