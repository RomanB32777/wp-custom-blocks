import type { TdHTMLAttributes, ThHTMLAttributes } from "react";

import { colors } from "@/constants";
import type { IImageAttributes, TBlockAttributes } from "@/types";

export type TCellHTMLAttributes =
	| ThHTMLAttributes<HTMLTableCellElement>
	| TdHTMLAttributes<HTMLTableCellElement>;

export interface IAvailableTableBlockAttributes {
	uniqueId: string;
	blockStyle: string;
	columns: Record<string, string>;
	rows: Record<string, Record<string, string | boolean>>;
	backgroundOddColor: string;
	backgroundEvenColor: string;
	borderRadius: number;
	columnColor: string;
	rowColor: string;
	activeIcon: IImageAttributes;
	inactiveIcon: IImageAttributes;
}

const columKey = String(Math.random());
const defaultColumns: IAvailableTableBlockAttributes["columns"] = {
	[columKey]: "",
};

const rowKey = String(Math.random());
const defaultRows: IAvailableTableBlockAttributes["rows"] = {
	[rowKey]: {
		[columKey]: "",
	},
};

export const attributes: TBlockAttributes<IAvailableTableBlockAttributes> = {
	uniqueId: {
		type: "string",
	},
	blockStyle: {
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
	backgroundOddColor: {
		type: "string",
		default: colors.primary.light,
	},
	backgroundEvenColor: {
		type: "string",
		default: colors.white.DEFAULT,
	},
	borderRadius: {
		type: "number",
		default: 8,
	},
	rowColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	columnColor: {
		type: "string",
		default: colors.dark.DEFAULT,
	},
	activeIcon: {
		type: "object",
		default: {},
	},
	inactiveIcon: {
		type: "object",
		default: {},
	},
};

export default attributes;
