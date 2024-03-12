import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import {
	CardDivider,
	PanelBody,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { TemplateWrapperInspector } from "@/components";
import type { IInspectorProps } from "@/types";

import {
	blockAttributes as defaultAttributes,
	type ITemplateBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<ITemplateBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		mobileHeight,
		tabletHeight,
		laptopHeight,
		desktopHeight,
		isWithItemIndex,
		isEnableOpenImageInModal,
		isEnableSlider,
		sliderDesktopSlidesPerView,
		sliderDesktopSpaceBetween,
		desktopItemsCount,
		desktopSpaceBetween,
		mobileItemHeight,
		tabletItemHeight,
		laptopItemHeight,
		desktopItemHeight,
	} = attributes;

	return (
		<TemplateWrapperInspector
			attributes={attributes}
			defaultAttributes={defaultAttributes}
			setAttributes={setAttributes}
			blockSettings={
				<>
					<ToggleControl
						label={__(
							"With item indexes (only for card blocks)",
							"wp-custom-blocks"
						)}
						checked={isWithItemIndex}
						onChange={() =>
							setAttributes({ isWithItemIndex: !isWithItemIndex })
						}
					/>

					<CardDivider />
					<ToggleControl
						label={__(
							"Enable opening image in modal mode (only for image blocks)",
							"wp-custom-blocks"
						)}
						checked={isEnableOpenImageInModal}
						onChange={() =>
							setAttributes({
								isEnableOpenImageInModal: !isEnableOpenImageInModal,
							})
						}
					/>
				</>
			}
			blockSlidesPerView={
				<RangeControl
					label={__("Desktop slides per view", "wp-custom-blocks")}
					value={sliderDesktopSlidesPerView}
					onChange={(v) =>
						setAttributes({
							sliderDesktopSlidesPerView: v,
						})
					}
					disabled={!isEnableSlider}
					step={1}
					min={1}
					max={10}
					allowReset
					resetFallbackValue={1}
				/>
			}
			blockBetweenSlides={
				<RangeControl
					label={__("Desktop space between slides", "wp-custom-blocks")}
					value={sliderDesktopSpaceBetween}
					onChange={(v) =>
						setAttributes({
							sliderDesktopSpaceBetween: v,
						})
					}
					disabled={!isEnableSlider}
					step={2}
					min={4}
					max={64}
					allowReset
					resetFallbackValue={24}
				/>
			}
			blockSliderSettings={
				<PanelBody
					title={__("Height block settings", "wp-custom-blocks")}
					initialOpen={false}
				>
					<RangeControl
						label={__("Mobile block height", "wp-custom-blocks")}
						value={mobileHeight}
						onChange={(v) =>
							setAttributes({
								mobileHeight: v,
							})
						}
						disabled={!isEnableSlider}
						step={1}
						min={2}
						max={1000}
						allowReset
						resetFallbackValue={384}
					/>

					<CardDivider />
					<RangeControl
						label={__("Tablet block height", "wp-custom-blocks")}
						value={tabletHeight}
						onChange={(v) =>
							setAttributes({
								tabletHeight: v,
							})
						}
						disabled={!isEnableSlider}
						step={1}
						min={2}
						max={1000}
						allowReset
						resetFallbackValue={384}
					/>

					<CardDivider />
					<RangeControl
						label={__("Laptop block height", "wp-custom-blocks")}
						value={laptopHeight}
						onChange={(v) =>
							setAttributes({
								laptopHeight: v,
							})
						}
						disabled={!isEnableSlider}
						step={1}
						min={2}
						max={1000}
						allowReset
						resetFallbackValue={384}
					/>

					<CardDivider />
					<RangeControl
						label={__("Desktop block height", "wp-custom-blocks")}
						value={desktopHeight}
						onChange={(v) =>
							setAttributes({
								desktopHeight: v,
							})
						}
						disabled={!isEnableSlider}
						step={1}
						min={2}
						max={1000}
						allowReset
						resetFallbackValue={384}
					/>
				</PanelBody>
			}
			blockItemsCount={
				<RangeControl
					label={__("Desktop items count", "wp-custom-blocks")}
					value={desktopItemsCount}
					onChange={(v) =>
						setAttributes({
							desktopItemsCount: v,
						})
					}
					disabled={isEnableSlider}
					step={1}
					min={1}
					max={12}
					allowReset
					resetFallbackValue={4}
				/>
			}
			blockItemsSpaceBetween={
				<RangeControl
					label={__("Desktop space between items", "wp-custom-blocks")}
					value={desktopSpaceBetween}
					onChange={(v) =>
						setAttributes({
							desktopSpaceBetween: v,
						})
					}
					disabled={isEnableSlider}
					step={2}
					min={4}
					max={64}
					allowReset
					resetFallbackValue={24}
				/>
			}
			blockItemsSettings={
				<PanelBody
					title={__("Height items settings", "wp-custom-blocks")}
					initialOpen={false}
				>
					<RangeControl
						label={__("Mobile item height", "wp-custom-blocks")}
						value={mobileItemHeight}
						onChange={(v) =>
							setAttributes({
								mobileItemHeight: v,
							})
						}
						disabled={isEnableSlider}
						step={1}
						min={2}
						max={1000}
						allowReset
						resetFallbackValue={384}
					/>

					<CardDivider />
					<RangeControl
						label={__("Tablet item height", "wp-custom-blocks")}
						value={tabletItemHeight}
						onChange={(v) =>
							setAttributes({
								tabletItemHeight: v,
							})
						}
						disabled={isEnableSlider}
						step={1}
						min={2}
						max={1000}
						allowReset
						resetFallbackValue={384}
					/>

					<CardDivider />
					<RangeControl
						label={__("Laptop item height", "wp-custom-blocks")}
						value={laptopItemHeight}
						onChange={(v) =>
							setAttributes({
								laptopItemHeight: v,
							})
						}
						disabled={isEnableSlider}
						step={1}
						min={2}
						max={1000}
						allowReset
						resetFallbackValue={384}
					/>

					<CardDivider />
					<RangeControl
						label={__("Desktop item height", "wp-custom-blocks")}
						value={desktopItemHeight}
						onChange={(v) =>
							setAttributes({
								desktopItemHeight: v,
							})
						}
						disabled={isEnableSlider}
						step={1}
						min={2}
						max={1000}
						allowReset
						resetFallbackValue={384}
					/>
				</PanelBody>
			}
		/>
	);
};

export default Inspector;
