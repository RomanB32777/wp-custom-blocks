import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { TipResponsive } from "@/components";
import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import {
	attributes as defaultAttributes,
	type ISocialsBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<ISocialsBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { itemsSize, itemsPadding, spaceBetween } = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<TipResponsive />

			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="itemsColor"
					label={__("Items background color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items size", "wp-custom-blocks")}
					value={itemsSize}
					onChange={(v) =>
						setAttributes({
							itemsSize: v,
						})
					}
					step={2}
					min={4}
					max={128}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "itemsSize")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items padding", "wp-custom-blocks")}
					value={itemsPadding}
					onChange={(v) =>
						setAttributes({
							itemsPadding: v,
						})
					}
					step={1}
					min={0}
					max={64}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "itemsPadding")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items Space Between", "wp-custom-blocks")}
					value={spaceBetween}
					onChange={(v) =>
						setAttributes({
							spaceBetween: v,
						})
					}
					step={2}
					min={4}
					max={64}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "spaceBetween")
					)}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
