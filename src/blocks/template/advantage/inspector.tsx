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
	type IAdvantageElementAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IAdvantageElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { horizontalPosition, verticalPosition } = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					name="backgroundColor"
					label={__("Background Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="titleColor"
					label={__("Title color", "wp-custom-blocks")}
					{...colorControlProps}
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
