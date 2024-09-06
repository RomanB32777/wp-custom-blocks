import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { alignSelectItems } from "@/constants";
import { ColorControl } from "@/controls";
import type { EHorizontalAlign, IInspectorProps } from "@/types";

import {
	attributes as defaultAttributes,
	type IButtonBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IButtonBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { buttonAlign } = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="buttonColor"
					label={__("Button color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="buttonTextColor"
					label={__("Button text color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<SelectControl
					label={__("Button align", "wp-custom-blocks")}
					value={buttonAlign}
					options={alignSelectItems}
					onChange={(v: EHorizontalAlign) => {
						setAttributes({
							buttonAlign: v,
						});
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
