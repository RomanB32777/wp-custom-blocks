import React, { type FC } from "react";
import { InspectorControls } from "@wordpress/block-editor";
/**
 * WordPress dependencies
 */
import { CardDivider, PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import {
	attributes as defaultAttributes,
	type IAvailableTableBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IAvailableTableBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { borderRadius } = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<PanelBody
				title={__("Table settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					name="backgroundOddColor"
					label={__("Background odd rows color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="backgroundEvenColor"
					label={__("Background even rows color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="columnColor"
					label={__("Column color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="rowColor"
					label={__("Row color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block radius", "wp-custom-blocks")}
					value={borderRadius}
					onChange={(v) =>
						setAttributes({
							borderRadius: v,
						})
					}
					step={1}
					min={0}
					max={100}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "borderRadius")
					)}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
