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
import { attributes } from "./attributes";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
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
export const authorBlock = registerBlockType(name, {
	...metadataSettings,
	icon: "format-status",
	attributes,
	edit: Edit,
	save: Save,
});
