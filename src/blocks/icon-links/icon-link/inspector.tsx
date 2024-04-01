import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import type { IInspectorProps } from "@/types";

import { type IIconLinkElementAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IIconLinkElementAttributes>> = ({
	attributes: { title },
	setAttributes,
}) => {
	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<TextControl
					label="Icon title"
					onChange={(v) => setAttributes({ title: v })}
					value={title}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
