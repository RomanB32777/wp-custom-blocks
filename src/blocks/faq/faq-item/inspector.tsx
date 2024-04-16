import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import {
	attributes as defaultAttributes,
	type IFaqItemElementAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IFaqItemElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { isParentStyles } = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="questionColor"
					label={__("Question Color", "wp-custom-blocks")}
					disabled={isParentStyles}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="answerColor"
					label={__("Answer color", "wp-custom-blocks")}
					disabled={isParentStyles}
					{...colorControlProps}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
