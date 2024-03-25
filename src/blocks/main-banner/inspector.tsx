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
import { __ } from "@wordpress/i18n";

import { TipResponsive } from "@/components";
import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import {
	baseSpaceBetween,
	attributes as defaultAttributes,
	type IBannerBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IBannerBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		desktopItemsCount,
		desktopSpaceBetweenItems,
		isLoopSlider,
		isDisableAutoplay,
		sliderAutoplayDelay,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
	} = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<TipResponsive />

			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					name="backgroundColor"
					label={__("Background Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="titleColor"
					label={__("Title Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="descriptionColor"
					label={__("Description color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="sportsTitleColor"
					label={__("Sports title color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
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

				<CardDivider />
				<RangeControl
					label={__("Desktop items count", "wp-custom-blocks")}
					value={desktopItemsCount}
					onChange={(v) =>
						setAttributes({
							desktopItemsCount: v,
						})
					}
					step={1}
					min={1}
					max={12}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "desktopItemsCount")
					)}
				/>

				<CardDivider />
				<RangeControl
					label={__("Desktop space between items", "wp-custom-blocks")}
					value={desktopSpaceBetweenItems}
					onChange={(v) =>
						setAttributes({
							desktopSpaceBetweenItems: v,
						})
					}
					step={2}
					min={4}
					max={64}
					allowReset
					resetFallbackValue={baseSpaceBetween}
				/>

				<CardDivider />
				<ColorControl
					name="sportsDescriptionColor"
					label={__("Sports description color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="adviceBackgroundColor"
					label={__("Advice background color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="adviceTitleColor"
					label={__("Advice title color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="adviceDescriptionColor"
					label={__("Advice description color", "wp-custom-blocks")}
					{...colorControlProps}
				/>
			</PanelBody>

			<PanelBody
				title={__("Slider settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ToggleControl
					label={__("Slider loop", "wp-custom-blocks")}
					checked={isLoopSlider}
					onChange={() => setAttributes({ isLoopSlider: !isLoopSlider })}
				/>

				<CardDivider />
				<ToggleControl
					label={__("Disable slider autoplay", "wp-custom-blocks")}
					checked={isDisableAutoplay}
					onChange={() =>
						setAttributes({ isDisableAutoplay: !isDisableAutoplay })
					}
				/>

				<CardDivider />
				<RangeControl
					label={__("Slider autoplay delay", "wp-custom-blocks")}
					value={sliderAutoplayDelay}
					onChange={(v) =>
						setAttributes({
							sliderAutoplayDelay: v,
						})
					}
					disabled={isDisableAutoplay}
					step={500}
					min={0}
					max={30000}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(defaultAttributes, "sliderAutoplayDelay")
					)}
				/>

				<PanelBody
					title={__("Slides per view settings", "wp-custom-blocks")}
					initialOpen={false}
				>
					<RangeControl
						label={__("Mobile slides per view", "wp-custom-blocks")}
						value={sliderMobileSlidesPerView}
						onChange={(v) =>
							setAttributes({
								sliderMobileSlidesPerView: v,
							})
						}
						step={1}
						min={1}
						max={10}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(
								defaultAttributes,
								"sliderMobileSlidesPerView"
							)
						)}
					/>

					<CardDivider />
					<RangeControl
						label={__("Tablet slides per view", "wp-custom-blocks")}
						value={sliderTabletSlidesPerView}
						onChange={(v) =>
							setAttributes({
								sliderTabletSlidesPerView: v,
							})
						}
						step={1}
						min={1}
						max={10}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(
								defaultAttributes,
								"sliderTabletSlidesPerView"
							)
						)}
					/>

					<CardDivider />
					<RangeControl
						label={__("Laptop slides per view", "wp-custom-blocks")}
						value={sliderLaptopSlidesPerView}
						onChange={(v) =>
							setAttributes({
								sliderLaptopSlidesPerView: v,
							})
						}
						step={1}
						min={1}
						max={10}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(
								defaultAttributes,
								"sliderLaptopSlidesPerView"
							)
						)}
					/>
				</PanelBody>

				<PanelBody
					title={__("Slides between settings", "wp-custom-blocks")}
					initialOpen={false}
				>
					<RangeControl
						label={__("Mobile space between slides", "wp-custom-blocks")}
						value={sliderMobileSpaceBetween}
						onChange={(v) =>
							setAttributes({
								sliderMobileSpaceBetween: v,
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
						label={__("Tablet space between slides", "wp-custom-blocks")}
						value={sliderTabletSpaceBetween}
						onChange={(v) =>
							setAttributes({
								sliderTabletSpaceBetween: v,
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
						label={__("Laptop space between slides", "wp-custom-blocks")}
						value={sliderLaptopSpaceBetween}
						onChange={(v) =>
							setAttributes({
								sliderLaptopSpaceBetween: v,
							})
						}
						step={2}
						min={4}
						max={64}
						allowReset
						resetFallbackValue={baseSpaceBetween}
					/>
				</PanelBody>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
