import { registerBlockType } from "@wordpress/blocks";

import metadata from "./block.json";
/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import { attributes } from "./attributes";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import "./style.scss";

const { name, ...metadataSettings } = metadata;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
export const stepBlock = registerBlockType(name, {
	...metadataSettings,
	attributes,
	edit: Edit,
	save: Save,
});
