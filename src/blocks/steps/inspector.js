/**
 * WordPress dependencies
 */
import { ToggleControl, TextControl } from "@wordpress/components";

const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, CardDivider } = wp.components;

const Inspector = ({ attributes, setAttributes, clientId }) => {
	const { title, isOnlyText } = attributes;

	const toggleHandler = () => {
		const newStatus = !isOnlyText;

		setAttributes({ isOnlyText: newStatus });
		dispatch("core/block-editor").updateBlockAttributes([clientId], {
			isOnlyText: newStatus,
		});
	};

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "top-blocks")} initialOpen={true}>
				<TextControl
					value={title}
					onChange={(v) => setAttributes({ title: v })}
					label={__("Block title", "top-blocks")}
					className="title"
				/>
				<CardDivider />
				<ToggleControl
					label={__("Only text", "top-blocks")}
					checked={isOnlyText}
					onChange={toggleHandler}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
