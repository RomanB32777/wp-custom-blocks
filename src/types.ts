import type { Block, BlockEditProps } from "@wordpress/blocks";

import type { breakpoints as baseBreakpoints } from "@/constants";

export type TBlockAttributes<T extends Record<keyof T, unknown>> =
	Block<T>["attributes"];

export interface ILinkAttributes {
	url: string;
	openInNewTab: boolean;
}

export interface IImageAttributes {
	id?: number;
	url?: string;
	alt?: string;
	width?: number;
	height?: number;
}

export interface IInspectorProps<T extends Record<keyof T, unknown>>
	extends Pick<BlockEditProps<T>, "attributes" | "setAttributes"> {
	clientId?: string;
}

export type TBreakpoints = keyof typeof baseBreakpoints;
