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

import type { IBannerBlockAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IBannerBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		backgroundColor,
		titleColor,
		descriptionColor,
		buttonTextColor,
		buttonColor,
		sportsTitleColor,
		sportsDescriptionColor,
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
		adviceBackgroundColor,
		adviceTitleColor,
		adviceDescriptionColor,
	} = attributes;

	return (
		<InspectorControls>
			<TipResponsive />

			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					label={__("Background Color", "wp-custom-blocks")}
					color={backgroundColor}
					onChange={(v) => setAttributes({ backgroundColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Title Color", "wp-custom-blocks")}
					color={titleColor}
					onChange={(v) => setAttributes({ titleColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Description color", "wp-custom-blocks")}
					color={descriptionColor}
					onChange={(v) => setAttributes({ descriptionColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Sports title color", "wp-custom-blocks")}
					color={sportsTitleColor}
					onChange={(v) => setAttributes({ sportsTitleColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Button color", "wp-custom-blocks")}
					color={buttonColor}
					onChange={(v) => setAttributes({ buttonColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Button text color", "wp-custom-blocks")}
					color={buttonTextColor}
					onChange={(v) => setAttributes({ buttonTextColor: v })}
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
					resetFallbackValue={3}
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
					resetFallbackValue={24}
				/>

				<CardDivider />
				<ColorControl
					label={__("Sports description color", "wp-custom-blocks")}
					color={sportsDescriptionColor}
					onChange={(v) => setAttributes({ sportsDescriptionColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Advice background color", "wp-custom-blocks")}
					color={adviceBackgroundColor}
					onChange={(v) => setAttributes({ adviceBackgroundColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Advice title color", "wp-custom-blocks")}
					color={adviceTitleColor}
					onChange={(v) => setAttributes({ adviceTitleColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Advice description color", "wp-custom-blocks")}
					color={adviceDescriptionColor}
					onChange={(v) => setAttributes({ adviceDescriptionColor: v })}
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
					resetFallbackValue={5000}
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
						resetFallbackValue={1}
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
						resetFallbackValue={1}
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
						resetFallbackValue={1}
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
						resetFallbackValue={24}
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
						resetFallbackValue={24}
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
						resetFallbackValue={24}
					/>
				</PanelBody>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
