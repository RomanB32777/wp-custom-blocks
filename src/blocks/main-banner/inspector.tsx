import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import {
	attributes as defaultAttributes,
	type IMainBannerBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IMainBannerBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<PanelBody title={__("Colors", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="backgroundColor"
					label={__("Background Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
