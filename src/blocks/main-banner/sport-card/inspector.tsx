import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import {
	attributes as defaultAttributes,
	type ISportCardElementAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<ISportCardElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { linkText } = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					name="nameColor"
					label={__("Name Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="arrowColor"
					label={__("Arrow Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ToggleControl
					label={__("With only text", "wp-custom-blocks")}
					checked={!!linkText}
					onChange={() =>
						setAttributes({ linkText: !linkText ? "See more" : "" })
					}
				/>

				{linkText && (
					<>
						<CardDivider />
						<ColorControl
							name="linkColor"
							label={__("Link Color", "wp-custom-blocks")}
							{...colorControlProps}
						/>
					</>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
