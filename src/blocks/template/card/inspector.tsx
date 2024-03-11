import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import type { ICardElementAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<ICardElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		titleColor,
		categoryColor,
		buttonTextColor,
		buttonColor,
		reviewColor,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					label={__("Title color", "wp-custom-blocks")}
					color={titleColor}
					onChange={(v) => setAttributes({ titleColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Category color", "wp-custom-blocks")}
					color={categoryColor}
					onChange={(v) => setAttributes({ categoryColor: v })}
				/>

				<CardDivider />
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

				<CardDivider />
				<ColorControl
					label={__("Review color", "wp-custom-blocks")}
					color={reviewColor}
					onChange={(v) => setAttributes({ reviewColor: v })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
