/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl } = wp.components;

const Inspector = ({ attributes, setAttributes }) => {
	const { step } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Step Number", "top-blocks")} initialOpen={true}>
				<RangeControl
					value={step}
					onChange={(v) =>
						setAttributes({
							step: v,
						})
					}
					min={1}
					max={100}
					resetFallbackValue={1}
					allowsReset
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
