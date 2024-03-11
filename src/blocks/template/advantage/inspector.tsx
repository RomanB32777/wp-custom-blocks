import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import type { IAdvantageElementAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IAdvantageElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { titleColor, backgroundColor } = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					label={__("Background Color", "wp-custom-blocks")}
					color={backgroundColor}
					onChange={(v) => setAttributes({ backgroundColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Title color", "wp-custom-blocks")}
					color={titleColor}
					onChange={(v) => setAttributes({ titleColor: v })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
