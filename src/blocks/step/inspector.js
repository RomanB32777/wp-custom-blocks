import {
	PanelBody,
	CardDivider,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ColorControl from "../../controls/color-control";

const { InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;

const Inspector = ({ attributes, setAttributes }) => {
	const {
		step,
		isOnlyText,
		mainColor,
		titleColor,
		descriptionColor,
		borderColor,
		stepColor,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__("Step settings", "wp-custom-blocks")}
				initialOpen={true}
			>
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
				<CardDivider />
				<ToggleControl
					label={__("Only text", "wp-custom-blocks")}
					checked={isOnlyText}
					onChange={(v) => setAttributes({ isOnlyText: v })}
				/>
			</PanelBody>
			<PanelBody title={__("Colors", "wp-custom-blocks")} initialOpen={true}>
				<ColorControl
					label={__("Main Color", "wp-custom-blocks")}
					color={mainColor}
					onChange={(v) => setAttributes({ mainColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Title Color", "wp-custom-blocks")}
					color={titleColor}
					onChange={(v) => setAttributes({ titleColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Description Color", "wp-custom-blocks")}
					color={descriptionColor}
					onChange={(v) => setAttributes({ descriptionColor: v })}
				/>
				<ColorControl
					label={__("Step Color", "wp-custom-blocks")}
					color={stepColor}
					onChange={(v) => setAttributes({ stepColor: v })}
				/>
				{isOnlyText && (
					<Fragment>
						<CardDivider />
						<ColorControl
							label={__("Border Color", "wp-custom-blocks")}
							color={borderColor}
							onChange={(v) => setAttributes({ borderColor: v })}
						/>
					</Fragment>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
