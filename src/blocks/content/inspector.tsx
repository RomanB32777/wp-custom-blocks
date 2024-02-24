import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import type { IInspectorProps } from "@/types";

import type { IContentBlockAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IContentBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { isReverse } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ToggleControl
					label={__("Reverse blocks", "wp-custom-blocks")}
					checked={isReverse}
					onChange={() => setAttributes({ isReverse: !isReverse })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
