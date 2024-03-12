import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { InspectorControls, LineHeightControl } from "@wordpress/block-editor";
import type { AttributeSource } from "@wordpress/blocks";
import {
	CardDivider,
	FontSizePicker,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { fontSizes, tags, transforms } from "@/constants";
import { ColorControl } from "@/controls";
import type { IInspectorProps, TBlockAttributes } from "@/types";

import { TipResponsive } from "../tip-responsive";
import {
	baseSpaceBetween,
	templateAttributes,
	type IBaseTemplateAttributes,
} from "./attributes";

interface ITemplateWrapperInspector
	extends IInspectorProps<IBaseTemplateAttributes> {
	defaultAttributes: TBlockAttributes<IBaseTemplateAttributes>;
	blockSettings?: React.ReactNode;
	blockSlidesPerView?: React.ReactNode;
	blockBetweenSlides?: React.ReactNode;
	blockSliderSettings?: React.ReactNode;
	blockItemsCount?: React.ReactNode;
	blockItemsSpaceBetween?: React.ReactNode;
	blockItemsSettings?: React.ReactNode;
	children?: React.ReactNode;
}

export const TemplateWrapperInspector: FC<ITemplateWrapperInspector> = ({
	attributes,
	setAttributes,
	defaultAttributes,
	blockSettings,
	blockSlidesPerView,
	blockBetweenSlides,
	blockSliderSettings,
	blockItemsCount,
	blockItemsSpaceBetween,
	blockItemsSettings,
	children,
}) => {
	const {
		titleTag,
		titleSize,
		titleLineHeight,
		titleMobileSize,
		titleMobileLineHeight,
		titleWeight,
		titleTransform,
		isWithLinkBlock,
		isEnableSlider,
		isLoopSlider,
		isDisableAutoplay,
		sliderAutoplayDelay,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
		mobileItemsCount,
		tabletItemsCount,
		laptopItemsCount,
		mobileSpaceBetween,
		tabletSpaceBetween,
		laptopSpaceBetween,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(isWithLinkBlock);
	const [sliderPanel, showSliderPanel] = useState(isEnableSlider);
	const [withoutSliderPanel, showWithoutSliderPanel] =
		useState(!isEnableSlider);

	useEffect(() => {
		showLinkPanel(isWithLinkBlock);
	}, [isWithLinkBlock]);

	useEffect(() => {
		showWithoutSliderPanel(!isEnableSlider);
		showSliderPanel(isEnableSlider);
	}, [isEnableSlider]);

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
				<ToggleControl
					label={__("With link block", "wp-custom-blocks")}
					checked={isWithLinkBlock}
					onChange={() => setAttributes({ isWithLinkBlock: !isWithLinkBlock })}
				/>

				<CardDivider />
				<ToggleControl
					label={__("Enable slider", "wp-custom-blocks")}
					checked={isEnableSlider}
					onChange={() => setAttributes({ isEnableSlider: !isEnableSlider })}
				/>

				{blockSettings && (
					<>
						<CardDivider />
						{blockSettings}
					</>
				)}
			</PanelBody>

			<PanelBody
				title={__("Description settings", "wp-custom-blocks")}
				initialOpen={false}
			>
				<ColorControl
					name="descriptionColor"
					label={__("Description color", "wp-custom-blocks")}
					{...colorControlProps}
				/>
			</PanelBody>

			<PanelBody
				title={__("Title settings", "wp-custom-blocks")}
				initialOpen={false}
			>
				<ColorControl
					name="titleColor"
					label={__("Title Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<SelectControl
					label={__("Select Tag", "wp-custom-blocks")}
					value={titleTag}
					options={tags}
					onChange={(v: keyof HTMLElementTagNameMap) => {
						setAttributes({
							titleTag: v,
						});
					}}
				/>

				<CardDivider />
				<FontSizePicker
					fontSizes={fontSizes}
					value={titleSize}
					onChange={(v) => {
						setAttributes({
							titleSize:
								Number(v) ||
								Number(
									(templateAttributes.titleSize as AttributeSource.Attribute)
										?.default
								),
						});
					}}
					__nextHasNoMarginBottom
				/>

				<CardDivider />
				<LineHeightControl
					__unstableInputWidth="120px"
					value={titleLineHeight}
					onChange={(v: number) => {
						setAttributes({
							titleLineHeight: v,
						});
					}}
					__nextHasNoMarginBottom
				/>

				<CardDivider />
				<RangeControl
					label={__("Title weight", "wp-custom-blocks")}
					value={titleWeight}
					onChange={(v) =>
						setAttributes({
							titleWeight: v,
						})
					}
					step={100}
					min={100}
					max={900}
					allowReset
					resetFallbackValue={100}
				/>

				<CardDivider />
				<SelectControl
					label={__("Select title transform", "wp-custom-blocks")}
					value={titleTransform}
					options={transforms}
					onChange={(v: string) => {
						setAttributes({
							titleTransform: v,
						});
					}}
				/>

				<PanelBody
					title={__(
						"Mobile title settings (display width < 769px)",
						"wp-custom-blocks"
					)}
					initialOpen={false}
				>
					<FontSizePicker
						fontSizes={fontSizes}
						value={titleMobileSize}
						onChange={(v) => {
							setAttributes({
								titleMobileSize:
									Number(v) ||
									Number(
										(
											templateAttributes.titleMobileSize as AttributeSource.Attribute
										)?.default
									),
							});
						}}
						__nextHasNoMarginBottom
					/>

					<CardDivider />
					<LineHeightControl
						__nextHasNoMarginBottom
						__unstableInputWidth="120px"
						value={titleMobileLineHeight}
						onChange={(v: number) => {
							setAttributes({
								titleMobileLineHeight: v,
							});
						}}
					/>
				</PanelBody>
			</PanelBody>

			<PanelBody
				title={__("Link settings", "wp-custom-blocks")}
				initialOpen={linkPanel}
				opened={linkPanel}
				onToggle={() => showLinkPanel(!linkPanel)}
			>
				<ColorControl
					name="linkTextColor"
					label={__("Link text color", "wp-custom-blocks")}
					disabled={!isWithLinkBlock}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="linkBtnArrowColor"
					label={__("Link button arrow color", "wp-custom-blocks")}
					disabled={!isWithLinkBlock}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="linkBackgroundBtnColor"
					label={__("Link background button color", "wp-custom-blocks")}
					disabled={!isWithLinkBlock}
					{...colorControlProps}
				/>
			</PanelBody>

			<PanelBody
				title={__("Slider settings", "wp-custom-blocks")}
				initialOpen={sliderPanel}
				opened={sliderPanel}
				onToggle={() => showSliderPanel(!sliderPanel)}
			>
				<ToggleControl
					label={__("Slider loop", "wp-custom-blocks")}
					checked={isLoopSlider}
					disabled={!isEnableSlider}
					onChange={() => setAttributes({ isLoopSlider: !isLoopSlider })}
				/>

				<CardDivider />
				<ToggleControl
					label={__("Disable slider autoplay", "wp-custom-blocks")}
					checked={isDisableAutoplay}
					disabled={!isEnableSlider}
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
					disabled={!isEnableSlider || isDisableAutoplay}
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
						disabled={!isEnableSlider}
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
						disabled={!isEnableSlider}
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
						disabled={!isEnableSlider}
						step={1}
						min={1}
						max={10}
						allowReset
						resetFallbackValue={1}
					/>

					{blockSlidesPerView && (
						<>
							<CardDivider />
							{blockSlidesPerView}
						</>
					)}
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
						disabled={!isEnableSlider}
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
						disabled={!isEnableSlider}
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
						disabled={!isEnableSlider}
						step={2}
						min={4}
						max={64}
						allowReset
						resetFallbackValue={baseSpaceBetween}
					/>

					{blockBetweenSlides && (
						<>
							<CardDivider />
							{blockBetweenSlides}
						</>
					)}
				</PanelBody>

				{blockSliderSettings}
			</PanelBody>

			<PanelBody
				title={__("Without slider settings", "wp-custom-blocks")}
				initialOpen={withoutSliderPanel}
				opened={withoutSliderPanel}
				onToggle={() => showWithoutSliderPanel(!withoutSliderPanel)}
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
						disabled={isEnableSlider}
						step={1}
						min={1}
						max={12}
						allowReset
						resetFallbackValue={3}
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
						disabled={isEnableSlider}
						step={1}
						min={1}
						max={12}
						allowReset
						resetFallbackValue={3}
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
						disabled={isEnableSlider}
						step={1}
						min={1}
						max={12}
						allowReset
						resetFallbackValue={4}
					/>

					{blockItemsCount && (
						<>
							<CardDivider />
							{blockItemsCount}
						</>
					)}
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
						disabled={isEnableSlider}
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
						disabled={isEnableSlider}
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
						disabled={isEnableSlider}
						step={2}
						min={4}
						max={64}
						allowReset
						resetFallbackValue={baseSpaceBetween}
					/>

					{blockItemsSpaceBetween && (
						<>
							<CardDivider />
							{blockItemsSpaceBetween}
						</>
					)}
				</PanelBody>

				{blockItemsSettings}
			</PanelBody>

			{children}
		</InspectorControls>
	);
};
