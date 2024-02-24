import type { Block, BlockEditProps } from "@wordpress/blocks";

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
}

export interface IInspectorProps<T extends Record<keyof T, unknown>>
	extends Pick<BlockEditProps<T>, "attributes" | "setAttributes"> {
	clientId?: string;
}
