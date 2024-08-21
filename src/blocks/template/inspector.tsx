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
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { TipResponsive } from "@/components";
import { breakpointNames, breakpoints } from "@/constants";
import type { IInspectorProps, TBreakpoints } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import {
	baseSpaceBetween,
	blockAttributes,
	type ITemplateBlockAttributes,
	type TDisableSliderBreakpoints,
} from "./attributes";

const breakpointSelectItems = Object.entries(breakpointNames).reduce(
	(acc, [key, value]) => {
		acc.push({
			label: value,
			value: key as TDisableSliderBreakpoints,
		});

		return acc;
	},
	[{ label: "-", value: "none" }] as Array<{
		label: string;
		value: TDisableSliderBreakpoints;
	}>
);

const Inspector: FC<IInspectorProps<ITemplateBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		isLoopSlider,
		isDisableAutoplay,
		sliderAutoplayDelay,
		disableSliderBreakpoint,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
		mobileItemsCount,
		tabletItemsCount,
		laptopItemsCount,
		desktopItemsCount,
		mobileSpaceBetween,
		tabletSpaceBetween,
		desktopSpaceBetween,
		laptopSpaceBetween,
		mobileHeight,
		tabletHeight,
		laptopHeight,
		desktopHeight,
		isEnableOpenImageInModal,
		sliderDesktopSlidesPerView,
		sliderDesktopSpaceBetween,
		mobileItemHeight,
		tabletItemHeight,
		laptopItemHeight,
		desktopItemHeight,
		borderRadius,
	} = attributes;

	const isExistSliderDisableBreakpoint =
		disableSliderBreakpoint && disableSliderBreakpoint !== "none";

	const [withoutSliderPanel, showWithoutSliderPanel] = useState(
		isExistSliderDisableBreakpoint
	);

	useEffect(() => {
		showWithoutSliderPanel(isExistSliderDisableBreakpoint);
	}, [isExistSliderDisableBreakpoint]);

	const disableSliderBreakpointPx = isExistSliderDisableBreakpoint
		? breakpoints[disableSliderBreakpoint]
		: null;

	const isMobileDisableSliderBreakpoint =
		disableSliderBreakpointPx && disableSliderBreakpointPx <= breakpoints.xs;

	const isTabletDisableSliderBreakpoint =
		disableSliderBreakpointPx && disableSliderBreakpointPx <= breakpoints.sm;

	const isLaptopDisableSliderBreakpoint =
		disableSliderBreakpointPx && disableSliderBreakpointPx <= breakpoints.lg;

	const isDesktopDisableSliderBreakpoint =
		disableSliderBreakpointPx && disableSliderBreakpointPx <= breakpoints.xl;

	return (
		<InspectorControls>
			<TipResponsive />

			<PanelBody
				title={__("Block settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<SelectControl
					label={__("Disable slider breakpoint", "wp-custom-blocks")}
					value={disableSliderBreakpoint}
					options={breakpointSelectItems}
					onChange={(v: TBreakpoints) => {
						setAttributes({
							disableSliderBreakpoint: v,
						});
					}}
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
			</PanelBody>

			<PanelBody title={__("Slider settings", "wp-custom-blocks")} initialOpen>
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
						getDefaultAttributeValue(blockAttributes, "sliderAutoplayDelay")
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
						step={0.5}
						min={1}
						max={10}
						disabled={Boolean(isMobileDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(
								blockAttributes,
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
						step={0.5}
						min={1}
						max={10}
						disabled={Boolean(isTabletDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(
								blockAttributes,
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
						step={0.5}
						min={1}
						max={10}
						disabled={Boolean(isLaptopDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(
								blockAttributes,
								"sliderLaptopSlidesPerView"
							)
						)}
					/>

					<CardDivider />
					<RangeControl
						label={__("Desktop slides per view", "wp-custom-blocks")}
						value={sliderDesktopSlidesPerView}
						onChange={(v) =>
							setAttributes({
								sliderDesktopSlidesPerView: v,
							})
						}
						step={0.5}
						min={1}
						max={10}
						disabled={Boolean(isDesktopDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(
								blockAttributes,
								"sliderDesktopSlidesPerView"
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
						disabled={Boolean(isMobileDisableSliderBreakpoint)}
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
						disabled={Boolean(isTabletDisableSliderBreakpoint)}
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
						disabled={Boolean(isLaptopDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={baseSpaceBetween}
					/>

					<CardDivider />
					<RangeControl
						label={__("Desktop space between slides", "wp-custom-blocks")}
						value={sliderDesktopSpaceBetween}
						onChange={(v) =>
							setAttributes({
								sliderDesktopSpaceBetween: v,
							})
						}
						step={2}
						min={4}
						max={64}
						disabled={Boolean(isDesktopDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={baseSpaceBetween}
					/>
				</PanelBody>

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
						step={1}
						min={2}
						max={1000}
						disabled={Boolean(isMobileDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "mobileHeight")
						)}
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
						step={1}
						min={2}
						max={1000}
						disabled={Boolean(isTabletDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "tabletHeight")
						)}
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
						step={1}
						min={2}
						max={1000}
						disabled={Boolean(isLaptopDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "laptopHeight")
						)}
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
						step={1}
						min={2}
						max={1000}
						disabled={Boolean(isDesktopDisableSliderBreakpoint)}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "desktopHeight")
						)}
					/>
				</PanelBody>
			</PanelBody>

			<PanelBody
				title={__("Without slider settings", "wp-custom-blocks")}
				initialOpen={withoutSliderPanel}
				opened={withoutSliderPanel}
			>
				<PanelBody
					title={__("Items count", "wp-custom-blocks")}
					initialOpen={false}
				>
					<RangeControl
						label={__("Mobile items count", "wp-custom-blocks")}
						value={mobileItemsCount}
						onChange={(v) =>
							setAttributes({
								mobileItemsCount: v,
							})
						}
						step={1}
						min={1}
						max={12}
						disabled={!isMobileDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "mobileItemsCount")
						)}
					/>

					<CardDivider />
					<RangeControl
						label={__("Tablet items count", "wp-custom-blocks")}
						value={tabletItemsCount}
						onChange={(v) =>
							setAttributes({
								tabletItemsCount: v,
							})
						}
						step={1}
						min={1}
						max={12}
						disabled={!isTabletDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "tabletItemsCount")
						)}
					/>

					<CardDivider />
					<RangeControl
						label={__("Laptop items count", "wp-custom-blocks")}
						value={laptopItemsCount}
						onChange={(v) =>
							setAttributes({
								laptopItemsCount: v,
							})
						}
						step={1}
						min={1}
						max={12}
						disabled={!isLaptopDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "laptopItemsCount")
						)}
					/>

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
						disabled={!isDesktopDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "desktopItemsCount")
						)}
					/>
				</PanelBody>

				<PanelBody
					title={__("Items between settings", "wp-custom-blocks")}
					initialOpen={false}
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
						disabled={!isMobileDisableSliderBreakpoint}
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
						disabled={!isTabletDisableSliderBreakpoint}
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
						disabled={!isLaptopDisableSliderBreakpoint}
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
						disabled={!isDesktopDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={baseSpaceBetween}
					/>
				</PanelBody>

				<PanelBody
					title={__("Height items settings", "wp-custom-blocks")}
					initialOpen={false}
				>
					<RangeControl
						label={__("Mobile item height", "wp-custom-blocks")}
						value={mobileItemHeight}
						onChange={(v) =>
							setAttributes({
								tabletItemHeight: v,
							})
						}
						step={1}
						min={2}
						max={1000}
						disabled={!isMobileDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "mobileItemHeight")
						)}
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
						step={1}
						min={2}
						max={1000}
						disabled={!isTabletDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "tabletItemHeight")
						)}
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
						step={1}
						min={2}
						max={1000}
						disabled={!isLaptopDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "laptopItemHeight")
						)}
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
						step={1}
						min={2}
						max={1000}
						disabled={!isDesktopDisableSliderBreakpoint}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(blockAttributes, "desktopItemHeight")
						)}
					/>
				</PanelBody>
			</PanelBody>

			<PanelBody
				title={__("Item settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<RangeControl
					label={__("Item border radius", "wp-custom-blocks")}
					value={borderRadius}
					onChange={(v) =>
						setAttributes({
							borderRadius: v,
						})
					}
					step={1}
					min={0}
					max={50}
					allowReset
					resetFallbackValue={Number(
						getDefaultAttributeValue(blockAttributes, "borderRadius")
					)}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
