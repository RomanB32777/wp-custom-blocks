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
	type IBonusElementAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IBonusElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { isParentStyles } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="backgroundColor"
					label={__("Background color", "wp-custom-blocks")}
					attributes={attributes}
					setAttributes={setAttributes}
					disabled={isParentStyles}
					defaultAttributes={defaultAttributes}
				/>

				<CardDivider />
				<ColorControl
					name="titleColor"
					label={__("Title color", "wp-custom-blocks")}
					attributes={attributes}
					setAttributes={setAttributes}
					disabled={isParentStyles}
					defaultAttributes={defaultAttributes}
				/>

				<CardDivider />
				<ColorControl
					name="buttonColor"
					label={__("Button color", "wp-custom-blocks")}
					attributes={attributes}
					setAttributes={setAttributes}
					disabled={isParentStyles}
					defaultAttributes={defaultAttributes}
				/>

				<CardDivider />
				<ColorControl
					name="buttonTextColor"
					label={__("Button text color", "wp-custom-blocks")}
					attributes={attributes}
					setAttributes={setAttributes}
					disabled={isParentStyles}
					defaultAttributes={defaultAttributes}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
