import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import {
	attributes as defaultAttributes,
	EButtonAlign,
	type IButtonBlockAttributes,
} from "./attributes";

const alignSelectItems = Object.entries(EButtonAlign).map(([key, value]) => ({
	value,
	label: key,
}));

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
					label={__("Buttom align", "wp-custom-blocks")}
					value={buttonAlign}
					options={alignSelectItems}
					onChange={(v: EButtonAlign) => {
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
