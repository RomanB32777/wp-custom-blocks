import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import type { IFaqItemElementAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IFaqItemElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { isParentStyles, questionColor, answerColor } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					label={__("Question Color", "wp-custom-blocks")}
					color={questionColor}
					disabled={isParentStyles}
					onChange={(v) => setAttributes({ questionColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Answer color", "wp-custom-blocks")}
					color={answerColor}
					disabled={isParentStyles}
					onChange={(v) => setAttributes({ answerColor: v })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
