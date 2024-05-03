import React, { type FC } from "react";
import classNames from "classnames";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";

import { TemplateWrapperEdit } from "@/components";
import { breakpoints, sliderElementName } from "@/constants";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { ITemplateBlockAttributes } from "./attributes";
import { templateSliderItemName } from "./constants";

const allowedBlocks = [
	"wp-custom-blocks/card",
	"wp-custom-blocks/advantage",
	"wp-custom-blocks/template-image",
];

const Edit: FC<BlockEditProps<ITemplateBlockAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		uniqueId,
		blockStyle,
		mobileHeight,
		tabletHeight,
		laptopHeight,
		desktopHeight,
		titleSize,
		titleLineHeight,
		titleMobileSize,
		titleMobileLineHeight,
		titleWeight,
		titleTransform,
		isWithItemIndex,
		isEnableSlider,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderDesktopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
		sliderDesktopSpaceBetween,
		isEnableOpenImageInModal,
		mobileItemHeight,
		tabletItemHeight,
		laptopItemHeight,
		desktopItemHeight,
		mobileItemsCount,
		tabletItemsCount,
		laptopItemsCount,
		desktopItemsCount,
		mobileSpaceBetween,
		tabletSpaceBetween,
		laptopSpaceBetween,
		desktopSpaceBetween,
	} = attributes;

	const childBlocks =
		select("core/block-editor").getBlocksByClientId(clientId)?.[0]?.innerBlocks;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "template-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	useEffect(() => {
		childBlocks?.forEach((block, index) => {
			if (block.name === "wp-custom-blocks/card") {
				dispatch("core/block-editor").updateBlockAttributes(block.clientId, {
					index,
					isWithIndex: isWithItemIndex,
				});
			}
		});
	}, [childBlocks, isWithItemIndex]);

	useEffect(() => {
		childBlocks?.forEach((block) => {
			if (block.name === "wp-custom-blocks/image") {
				dispatch("core/block-editor").updateBlockAttributes(block.clientId, {
					isEnableOpenInModal: isEnableOpenImageInModal,
				});
			}
		});
	}, [childBlocks, isEnableOpenImageInModal]);

	useEffect(() => {
		childBlocks?.forEach((block) => {
			dispatch("core/block-editor").updateBlockAttributes(block.clientId, {
				isSlideItem: isEnableSlider,
				modificatorClass: classNames({
					"slider-item": isEnableSlider,
				}),
			});
		});
	}, [childBlocks, isEnableSlider]);

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "font-notoSans"),
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: isEnableSlider
				? "flex slider-wrapper h-full flex-wrap"
				: "inner-wrapper grid",
		},
		{
			allowedBlocks,
		}
	);

	/**
	 * Edit Styles
	 */
	const mobileEditStyles = `
		.${uniqueId} .slider-wrapper {
			gap: ${sliderMobileSpaceBetween}px;
		}

		.${uniqueId} .slider-item {
			height: ${mobileHeight}px;
			flex-basis: calc(${
				100 / sliderMobileSlidesPerView
			}% - ${sliderMobileSpaceBetween}px);
		}
	`;

	const tabletEditStyles = `
		.${uniqueId} .slider-wrapper {
			gap: ${sliderTabletSpaceBetween}px;
		}

		.${uniqueId} .slider-item {
			height: ${tabletHeight}px;
			flex-basis: calc(${
				100 / sliderTabletSlidesPerView
			}% - ${sliderTabletSpaceBetween}px);
		}
	`;

	const laptopEditStyles = `
		.${uniqueId} .slider-wrapper {
			gap: ${sliderLaptopSpaceBetween}px;
		}

		.${uniqueId} .slider-item {
			height: ${laptopHeight}px;
			flex-basis: calc(${
				100 / sliderLaptopSlidesPerView
			}% - ${sliderLaptopSpaceBetween}px);
		}
	`;

	const desktopEditStyles = `
		.${uniqueId} .slider-wrapper {
			gap: ${sliderDesktopSpaceBetween}px;
		}

		.${uniqueId} .slider-item {
			height: ${desktopHeight}px;
			flex-basis: calc(${
				100 / sliderDesktopSlidesPerView
			}% - ${sliderDesktopSpaceBetween}px);
		}
	`;

	/**
	 * Block Edit All Styles
	 */
	const blockEditStyleCss = `
		${mobileEditStyles}

		@media (min-width: ${breakpoints.sm}px) {
			${tabletEditStyles}
		}

		@media (min-width: ${breakpoints.md}px) {
			${laptopEditStyles}
		}

		@media (min-width: ${breakpoints.xl}px) {
			${desktopEditStyles}
		}
	`;

	/**
	 * Block Save Styles
	 */
	const mobileSaveStyles = `
		.${uniqueId} .${sliderElementName} {
			height: ${mobileHeight}px;
		}
	`;

	const tabletSaveStyles = `
		.${uniqueId} .${sliderElementName} {
			height: ${tabletHeight}px;
		}
	`;

	const laptopSaveStyles = `
		.${uniqueId} .${sliderElementName} {
			height: ${laptopHeight}px;
		}
	`;

	const desktopSaveStyles = `
		.${uniqueId} .${sliderElementName} {
			height: ${desktopHeight}px;
		}
	`;

	/**
	 * Block Save All Styles
	 */
	const blockSaveStyleCss = `
		${mobileSaveStyles}

		@media (min-width: ${breakpoints.sm}px) {
			${tabletSaveStyles}
		}

		@media (min-width: ${breakpoints.md}px) {
			${laptopSaveStyles}
		}

		@media (min-width: ${breakpoints.xl}px) {
			${desktopSaveStyles}
		}
	`;

	/**
	 * Items Styles
	 */
	const mobileItemStyles = `
		.${uniqueId} .${templateSliderItemName} {
			height: ${mobileItemHeight}px;
		}
	`;

	const tabletItemStyles = `
		.${uniqueId} .${templateSliderItemName} {
			height: ${tabletItemHeight}px;
		}
	`;

	const laptopItemStyles = `
		.${uniqueId} .${templateSliderItemName} {
			height: ${laptopItemHeight}px;
		}
	`;

	const desktopItemStyles = `
		.${uniqueId} .${templateSliderItemName} {
			height: ${desktopItemHeight}px;
		}
	`;

	/**
	 * Items All Styles
	 */
	const itemStyleCss = `
		${mobileItemStyles}

		@media (min-width: ${breakpoints.sm}px) {
			${tabletItemStyles}
		}

		@media (min-width: ${breakpoints.md}px) {
			${laptopItemStyles}
		}

		@media (min-width: ${breakpoints.xl}px) {
			${desktopItemStyles}
		}
	`;

	/**
	 * Block Styles
	 */
	const mobileStyles = `
		.${uniqueId} .title {
			font-size: ${titleMobileSize}px;
			line-height: ${titleMobileLineHeight}rem;
			font-weight: ${titleWeight};
			text-transform: ${titleTransform};
		}

		.${uniqueId} .inner-wrapper {
			gap: ${mobileSpaceBetween}px;
			grid-template-columns: repeat(${mobileItemsCount}, minmax(0, 1fr));
		}
	`;

	const tabletStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${tabletSpaceBetween}px;
			grid-template-columns: repeat(${tabletItemsCount}, minmax(0, 1fr));
		}
	`;

	const laptopStyles = `
		.${uniqueId} .title {
			font-size: ${titleSize}px;
			line-height: ${titleLineHeight}rem;
		}

		.${uniqueId} .inner-wrapper {
			gap: ${laptopSpaceBetween}px;
			grid-template-columns: repeat(${laptopItemsCount}, minmax(0, 1fr));
		}
	`;

	const desktopStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${desktopSpaceBetween}px;
			grid-template-columns: repeat(${desktopItemsCount}, minmax(0, 1fr));
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${mobileStyles}

		@media (min-width: ${breakpoints.sm}px) {
			${tabletStyles}
		}

		@media (min-width: ${breakpoints.md}px) {
			${laptopStyles}
		}

		@media (min-width: ${breakpoints.xl}px) {
			${desktopStyles}
		}
	`;

	useEffect(() => {
		const newStyleCss =
			blockStyleCss +
			`
			${isEnableSlider ? blockSaveStyleCss : itemStyleCss}
		`;

		if (JSON.stringify(blockStyle) !== JSON.stringify(newStyleCss)) {
			setAttributes({ blockStyle: newStyleCss });
		}
	}, [
		blockStyle,
		blockStyleCss,
		blockSaveStyleCss,
		isEnableSlider,
		itemStyleCss,
		setAttributes,
	]);

	return (
		<Fragment>
			<style>{`${minifyCssStrings(blockStyleCss)}`}</style>
			<style>{`${minifyCssStrings(blockEditStyleCss)}`}</style>

			{!isEnableSlider && <style>{`${minifyCssStrings(itemStyleCss)}`}</style>}

			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<TemplateWrapperEdit
				attributes={attributes}
				setAttributes={setAttributes}
				blockProps={blockProps}
			>
				<div
					className={classNames("relative", {
						"mb-6": isEnableSlider,
					})}
				>
					<div
						className={classNames("overflow-hidden pt-6 lg:pt-11", {
							"pb-14": isEnableSlider,
						})}
					>
						<div
							className={classNames("relative", {
								[sliderElementName]: isEnableSlider,
							})}
							id={uniqueId}
						>
							<div {...innerBlocksProps} />
						</div>
					</div>
				</div>
			</TemplateWrapperEdit>
		</Fragment>
	);
};

export default Edit;
