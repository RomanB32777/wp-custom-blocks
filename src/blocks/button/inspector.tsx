import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import type { IButtonBlockAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IButtonBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { buttonTextColor, buttonColor } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					label={__("Button color", "wp-custom-blocks")}
					color={buttonColor}
					onChange={(v) => setAttributes({ buttonColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Button text color", "wp-custom-blocks")}
					color={buttonTextColor}
					onChange={(v) => setAttributes({ buttonTextColor: v })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
