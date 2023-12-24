/**
 * WordPress dependencies
 */
import { ToggleControl, PanelBody, CardDivider } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import ColorControl from "../../controls/color-control";

const { dispatch } = wp.data;
const { InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;

const Inspector = ({ attributes, setAttributes, clientId }) => {
	const {
		isOnlyText,
		stepsMainColor,
		stepsStepColor,
		stepsTitleColor,
		stepsDescriptionColor,
		stepsBorderColor,
	} = attributes;

	const toggleHandler = () => {
		const newStatus = !isOnlyText;

		setAttributes({ isOnlyText: newStatus });
		dispatch("core/block-editor").updateBlockAttributes([clientId], {
			isOnlyText: newStatus,
		});
	};

	return (
		<InspectorControls>
			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ToggleControl
					label={__("Only text", "wp-custom-blocks")}
					checked={isOnlyText}
					onChange={toggleHandler}
				/>
			</PanelBody>
			<PanelBody
				title={__("Step settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					label={__("Main Color", "wp-custom-blocks")}
					color={stepsMainColor}
					onChange={(v) => setAttributes({ stepsMainColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Step Color", "wp-custom-blocks")}
					color={stepsStepColor}
					onChange={(v) => setAttributes({ stepsStepColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Title Color", "wp-custom-blocks")}
					color={stepsTitleColor}
					onChange={(v) => setAttributes({ stepsTitleColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Description Color", "wp-custom-blocks")}
					color={stepsDescriptionColor}
					onChange={(v) => setAttributes({ stepsDescriptionColor: v })}
				/>
				{isOnlyText && (
					<Fragment>
						<CardDivider />
						<ColorControl
							label={__("Border Color", "wp-custom-blocks")}
							color={stepsBorderColor}
							onChange={(v) => setAttributes({ stepsBorderColor: v })}
						/>
					</Fragment>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
