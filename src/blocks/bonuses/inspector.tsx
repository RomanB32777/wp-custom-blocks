import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import {
	CardDivider,
	PanelBody,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { TipResponsive } from "@/components";
import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import {
	baseSpaceBetween,
	attributes as defaultAttributes,
	defaultItemHeight,
	type IBonusesBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IBonusesBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		isParentStyles,
		mobileItemsPerView,
		tabletItemsPerView,
		laptopItemsPerView,
		desktopItemsPerView,
		mobileSpaceBetween,
		tabletSpaceBetween,
		laptopSpaceBetween,
		desktopSpaceBetween,
		mobileHeight,
		tabletHeight,
		laptopHeight,
		desktopHeight,
	} = attributes;

	const [itemStyles, showItemStylesPanel] = useState(isParentStyles);

	useEffect(() => {
		showItemStylesPanel(isParentStyles);
	}, [isParentStyles]);

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
					name="buttonColor"
					label={__("Button color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="buttonTextColor"
					label={__("Button text color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ToggleControl
					label={__("Parent styles", "wp-custom-blocks")}
					checked={isParentStyles}
					onChange={() => setAttributes({ isParentStyles: !isParentStyles })}
				/>
			</PanelBody>

			<PanelBody
				title={__("Items styles", "wp-custom-blocks")}
				initialOpen={itemStyles}
				opened={itemStyles}
				onToggle={() => showItemStylesPanel(!itemStyles)}
			>
				<ColorControl
					name="itemsBackgroundColor"
					label={__("Items background color", "wp-custom-blocks")}
					disabled={!isParentStyles}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="itemsTitleColor"
					label={__("Items title color", "wp-custom-blocks")}
					disabled={!isParentStyles}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="itemsButtonColor"
					label={__("Items button color", "wp-custom-blocks")}
					disabled={!isParentStyles}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="itemsButtonTextColor"
					label={__("Items button text color", "wp-custom-blocks")}
					disabled={!isParentStyles}
					{...colorControlProps}
				/>
			</PanelBody>

			<PanelBody
				title={__("Items per view settings", "wp-custom-blocks")}
				initialOpen
			>
				<RangeControl
					label={__("Mobile items per view", "wp-custom-blocks")}
					value={mobileItemsPerView}
					onChange={(v) =>
						setAttributes({
							mobileItemsPerView: v,
						})
					}
					step={1}
					min={1}
					max={10}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "mobileItemsPerView")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Tablet items per view", "wp-custom-blocks")}
					value={tabletItemsPerView}
					onChange={(v) =>
						setAttributes({
							tabletItemsPerView: v,
						})
					}
					step={1}
					min={1}
					max={10}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "tabletItemsPerView")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Laptop items per view", "wp-custom-blocks")}
					value={laptopItemsPerView}
					onChange={(v) =>
						setAttributes({
							laptopItemsPerView: v,
						})
					}
					step={1}
					min={1}
					max={10}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "laptopItemsPerView")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Desktop items per view", "wp-custom-blocks")}
					value={desktopItemsPerView}
					onChange={(v) =>
						setAttributes({
							desktopItemsPerView: v,
						})
					}
					step={1}
					min={1}
					max={10}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "desktopItemsPerView")
					)}
				/>
			</PanelBody>

			<PanelBody
				title={__("Items between settings", "wp-custom-blocks")}
				initialOpen
			>
				<RangeControl
					label={__("Mobile space between items", "wp-custom-blocks")}
					value={mobileSpaceBetween}
					onChange={(v) =>
						setAttributes({
							mobileSpaceBetween: v,
						})
					}
					step={2}
					min={4}
					max={64}
					allowReset
					resetFallbackValue={baseSpaceBetween}
				/>

				<CardDivider />
				<RangeControl
					label={__("Tablet space between items", "wp-custom-blocks")}
					value={tabletSpaceBetween}
					onChange={(v) =>
						setAttributes({
							tabletSpaceBetween: v,
						})
					}
					step={2}
					min={4}
					max={64}
					allowReset
					resetFallbackValue={baseSpaceBetween}
				/>

				<CardDivider />
				<RangeControl
					label={__("Laptop space between items", "wp-custom-blocks")}
					value={laptopSpaceBetween}
					onChange={(v) =>
						setAttributes({
							laptopSpaceBetween: v,
						})
					}
					step={2}
					min={4}
					max={64}
					allowReset
					resetFallbackValue={baseSpaceBetween}
				/>

				<CardDivider />
				<RangeControl
					label={__("Desktop space between items", "wp-custom-blocks")}
					value={desktopSpaceBetween}
					onChange={(v) =>
						setAttributes({
							desktopSpaceBetween: v,
						})
					}
					step={2}
					min={4}
					max={64}
					allowReset
					resetFallbackValue={baseSpaceBetween}
				/>
			</PanelBody>

			<PanelBody
				title={__("Height items settings", "wp-custom-blocks")}
				initialOpen
			>
				<RangeControl
					label={__("Mobile items height", "wp-custom-blocks")}
					value={mobileHeight}
					onChange={(v) =>
						setAttributes({
							mobileHeight: v,
						})
					}
					step={1}
					min={2}
					max={1000}
					allowReset
					resetFallbackValue={defaultItemHeight}
				/>

				<CardDivider />
				<RangeControl
					label={__("Tablet items height", "wp-custom-blocks")}
					value={tabletHeight}
					onChange={(v) =>
						setAttributes({
							tabletHeight: v,
						})
					}
					step={1}
					min={2}
					max={1000}
					allowReset
					resetFallbackValue={defaultItemHeight}
				/>

				<CardDivider />
				<RangeControl
					label={__("Laptop items height", "wp-custom-blocks")}
					value={laptopHeight}
					onChange={(v) =>
						setAttributes({
							laptopHeight: v,
						})
					}
					step={1}
					min={2}
					max={1000}
					allowReset
					resetFallbackValue={defaultItemHeight}
				/>

				<CardDivider />
				<RangeControl
					label={__("Desktop items height", "wp-custom-blocks")}
					value={desktopHeight}
					onChange={(v) =>
						setAttributes({
							desktopHeight: v,
						})
					}
					step={1}
					min={2}
					max={1000}
					allowReset
					resetFallbackValue={defaultItemHeight}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
