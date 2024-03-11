import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import type { IInspectorProps } from "@/types";

import type { IImageElementAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IImageElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { isEnableOpenInModal } = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ToggleControl
					label={__("Enable opening in modal mode", "wp-custom-blocks")}
					checked={isEnableOpenInModal}
					onChange={() =>
						setAttributes({ isEnableOpenInModal: !isEnableOpenInModal })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
