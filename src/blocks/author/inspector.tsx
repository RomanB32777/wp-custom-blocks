import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import type { IAuthorBlockAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IAuthorBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { backgroundColor, avatarBorderColor, descriptionColor } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Colors", "wp-custom-blocks")} initialOpen>
				<ColorControl
					label={__("Background Color", "wp-custom-blocks")}
					color={backgroundColor}
					onChange={(v) => setAttributes({ backgroundColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Avatar Border Color", "wp-custom-blocks")}
					color={avatarBorderColor}
					onChange={(v) => setAttributes({ avatarBorderColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Description Color", "wp-custom-blocks")}
					color={descriptionColor}
					onChange={(v) => setAttributes({ descriptionColor: v })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
