/**
 * WordPress dependencies
 */
import { TextControl } from "@wordpress/components";

const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;

const Inspector = ({ attributes, setAttributes }) => {
	const { name } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Payment Name", "top-blocks")} initialOpen={true}>
				<TextControl
					value={name}
					onChange={(v) => setAttributes({ name: v })}
					label={__("Payment name", "top-blocks")}
					className="name"
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
