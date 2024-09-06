import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import {
	CardDivider,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { TipResponsive } from "@/components";
import { alignSelectItems } from "@/constants";
import { ColorControl } from "@/controls";
import type { EHorizontalAlign, IInspectorProps } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import {
	attributes as defaultAttributes,
	type IIconLinksBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IIconLinksBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		paddingX,
		paddingY,
		mobilePaddingX,
		mobilePaddingY,
		borderRadius,
		itemsHorizontalAlign,
		itemsWidth,
		itemsHeight,
		itemsPaddingX,
		itemsPaddingY,
		itemsBorderRadius,
		itemsBorderWidth,
		spaceBetween,
		isFillItemsWidth,
	} = attributes;

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
					name="backgroundColor"
					label={__("Block background color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block padding x", "wp-custom-blocks")}
					value={paddingX}
					onChange={(v) =>
						setAttributes({
							paddingX: v,
						})
					}
					step={1}
					min={0}
					max={128}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "paddingX")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block padding y", "wp-custom-blocks")}
					value={paddingY}
					onChange={(v) =>
						setAttributes({
							paddingY: v,
						})
					}
					step={1}
					min={0}
					max={128}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "paddingY")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block mobile padding x", "wp-custom-blocks")}
					value={mobilePaddingX}
					onChange={(v) =>
						setAttributes({
							mobilePaddingX: v,
						})
					}
					step={1}
					min={0}
					max={128}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "mobilePaddingX")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block mobile padding y", "wp-custom-blocks")}
					value={mobilePaddingY}
					onChange={(v) =>
						setAttributes({
							mobilePaddingY: v,
						})
					}
					step={1}
					min={0}
					max={128}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "mobilePaddingY")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Block border radius", "wp-custom-blocks")}
					value={borderRadius}
					onChange={(v) =>
						setAttributes({
							borderRadius: v,
						})
					}
					step={1}
					min={0}
					max={100}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "borderRadius")
					)}
				/>
			</PanelBody>

			<PanelBody title={__("Items settings", "wp-custom-blocks")} initialOpen>
				<SelectControl
					label={__("Items horizontal align", "wp-custom-blocks")}
					value={itemsHorizontalAlign}
					options={alignSelectItems}
					onChange={(v: EHorizontalAlign) => {
						setAttributes({
							itemsHorizontalAlign: v,
						});
					}}
				/>

				<CardDivider />
				<ColorControl
					name="itemsColor"
					label={__("Items background color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items width", "wp-custom-blocks")}
					value={itemsWidth}
					onChange={(v) =>
						setAttributes({
							itemsWidth: v,
						})
					}
					step={2}
					min={4}
					max={200}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "itemsWidth")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items height", "wp-custom-blocks")}
					value={itemsHeight}
					onChange={(v) =>
						setAttributes({
							itemsHeight: v,
						})
					}
					step={2}
					min={4}
					max={200}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "itemsHeight")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items padding x", "wp-custom-blocks")}
					value={itemsPaddingX}
					onChange={(v) =>
						setAttributes({
							itemsPaddingX: v,
						})
					}
					step={1}
					min={0}
					max={64}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "itemsPaddingX")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items padding y", "wp-custom-blocks")}
					value={itemsPaddingY}
					onChange={(v) =>
						setAttributes({
							itemsPaddingY: v,
						})
					}
					step={1}
					min={0}
					max={64}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "itemsPaddingY")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items border width", "wp-custom-blocks")}
					value={itemsBorderWidth}
					onChange={(v) =>
						setAttributes({
							itemsBorderWidth: v,
						})
					}
					step={1}
					min={0}
					max={100}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "itemsBorderWidth")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Items border radius", "wp-custom-blocks")}
					value={itemsBorderRadius}
					onChange={(v) =>
						setAttributes({
							itemsBorderRadius: v,
						})
					}
					step={1}
					min={0}
					max={100}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "itemsBorderRadius")
					)}
				/>

				<CardDivider />
				<ColorControl
					name="itemsBorderColor"
					label={__("Items border color", "wp-custom-blocks")}
					{...colorControlProps}
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

				<CardDivider />
				<ToggleControl
					label={__("Fill items width", "wp-custom-blocks")}
					checked={isFillItemsWidth}
					onChange={() =>
						setAttributes({ isFillItemsWidth: !isFillItemsWidth })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
