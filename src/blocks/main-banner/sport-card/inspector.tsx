import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import type { ISportCardElementAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<ISportCardElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { nameColor, arrowColor, linkText, linkColor } = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					label={__("Name Color", "wp-custom-blocks")}
					color={nameColor}
					onChange={(v) => setAttributes({ nameColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Arrow Color", "wp-custom-blocks")}
					color={arrowColor}
					onChange={(v) => setAttributes({ arrowColor: v })}
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
							label={__("Link Color", "wp-custom-blocks")}
							color={linkColor}
							onChange={(v) => setAttributes({ linkColor: v })}
						/>
					</>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
