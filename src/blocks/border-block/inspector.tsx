import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import {
	attributes as defaultAttributes,
	type IBorderBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IBorderBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		blockHeight,
		borderRadius,
		borderWidth,
		mobileTextFontSize,
		laptopTextFontSize,
		mobileBigValueFontSize,
		laptopBigValueFontSize,
		mobileIconWidth,
		laptopIconWidth,
		horizontalPosition,
		verticalPosition,
	} = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="backgroundColor"
					label={__("Background color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="borderColor"
					label={__("Border color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block height", "wp-custom-blocks")}
					value={blockHeight}
					onChange={(v) =>
						setAttributes({
							blockHeight: v,
						})
					}
					step={1}
					min={10}
					max={500}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "blockHeight")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block border width", "wp-custom-blocks")}
					value={borderWidth}
					onChange={(v) =>
						setAttributes({
							borderWidth: v,
						})
					}
					step={1}
					min={0}
					max={20}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "borderWidth")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block border radius", "wp-custom-blocks")}
					value={borderRadius}
					onChange={(v) =>
						setAttributes({
							borderRadius: v,
						})
					}
					step={1}
					min={0}
					max={50}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "borderRadius")
					)}
				/>

				<CardDivider />
				<ColorControl
					name="textColor"
					label={__("Text color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<RangeControl
					label={__("Mobile text font size", "wp-custom-blocks")}
					value={mobileTextFontSize}
					onChange={(v) =>
						setAttributes({
							mobileTextFontSize: v,
						})
					}
					step={1}
					min={2}
					max={100}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "mobileTextFontSize")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Laptop text font size", "wp-custom-blocks")}
					value={laptopTextFontSize}
					onChange={(v) =>
						setAttributes({
							laptopTextFontSize: v,
						})
					}
					step={1}
					min={2}
					max={100}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "laptopTextFontSize")
					)}
				/>

				<CardDivider />
				<ColorControl
					name="bigTextColor"
					label={__("Big text color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<RangeControl
					label={__("Mobile big value font size", "wp-custom-blocks")}
					value={mobileBigValueFontSize}
					onChange={(v) =>
						setAttributes({
							mobileBigValueFontSize: v,
						})
					}
					step={1}
					min={2}
					max={300}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(
							defaultAttributes,
							"mobileBigValueFontSize"
						)
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Laptop big value font size", "wp-custom-blocks")}
					value={laptopBigValueFontSize}
					onChange={(v) =>
						setAttributes({
							laptopBigValueFontSize: v,
						})
					}
					step={1}
					min={2}
					max={300}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(
							defaultAttributes,
							"laptopBigValueFontSize"
						)
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Mobile icon size", "wp-custom-blocks")}
					value={mobileIconWidth}
					onChange={(v) =>
						setAttributes({
							mobileIconWidth: v,
						})
					}
					step={1}
					min={2}
					max={300}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "mobileIconWidth")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Laptop icon size", "wp-custom-blocks")}
					value={laptopIconWidth}
					onChange={(v) =>
						setAttributes({
							laptopIconWidth: v,
						})
					}
					step={1}
					min={2}
					max={300}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "laptopIconWidth")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Horizontal position", "wp-custom-blocks")}
					value={horizontalPosition}
					onChange={(v) =>
						setAttributes({
							horizontalPosition: v,
						})
					}
					step={1}
					min={-200}
					max={200}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "horizontalPosition")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Vertical position", "wp-custom-blocks")}
					value={verticalPosition}
					onChange={(v) =>
						setAttributes({
							verticalPosition: v,
						})
					}
					step={1}
					min={-200}
					max={200}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "verticalPosition")
					)}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
