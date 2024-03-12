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
	type IAuthorBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IAuthorBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	return (
		<InspectorControls>
			<PanelBody title={__("Colors", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="backgroundColor"
					label={__("Background Color", "wp-custom-blocks")}
					attributes={attributes}
					setAttributes={setAttributes}
					defaultAttributes={defaultAttributes}
				/>

				<CardDivider />
				<ColorControl
					name="avatarBorderColor"
					label={__("Avatar Border Color", "wp-custom-blocks")}
					attributes={attributes}
					setAttributes={setAttributes}
					defaultAttributes={defaultAttributes}
				/>

				<CardDivider />
				<ColorControl
					name="descriptionColor"
					label={__("Description Color", "wp-custom-blocks")}
					attributes={attributes}
					setAttributes={setAttributes}
					defaultAttributes={defaultAttributes}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
