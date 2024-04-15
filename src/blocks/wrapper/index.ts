/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

import metadata from "./block.json";
/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";

const { name, ...metadataSettings } = metadata;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

export const wrapperBlock = registerBlockType(name, {
	...metadataSettings,
	icon: "align-wide",
	attributes: {},
	edit: Edit,
	save: Save,
});
