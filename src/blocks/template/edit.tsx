import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Popover, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { breakpoints, sliderElementName } from "@/constants";
import { LinkControl } from "@/controls";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import {
	templateRounded,
	templateSliderItemName,
	type ITemplateBlockAttributes,
} from "./attributes";

const allowedBlocks = [
	"wp-custom-blocks/template-card",
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
		title,
		titleColor,
		titleTag,
		description,
		descriptionColor,
		link,
		isWithLinkBlock,
		linkText,
		linkTextColor,
		linkBtnArrowColor,
		linkBackgroundBtnColor,
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
		borderRadius,
		mobileItemsCount,
		tabletItemsCount,
		laptopItemsCount,
		desktopItemsCount,
		mobileSpaceBetween,
		tabletSpaceBetween,
		laptopSpaceBetween,
		desktopSpaceBetween,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

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
			if (block.name === "wp-custom-blocks/template-card") {
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

		.${uniqueId} .${templateSliderItemName} .${templateRounded} {
			border-radius: ${borderRadius}px;
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

	const handleChangeAttributes = (attrs: Partial<ITemplateBlockAttributes>) => {
		const newStyleCss = minifyCssStrings(`
			${blockStyleCss}
			${isEnableSlider ? blockSaveStyleCss : itemStyleCss}
		`);

		if (blockStyle !== newStyleCss) {
			attrs.blockStyle = newStyleCss;
		}

		setAttributes(attrs);
	};

	return (
		<Fragment>
			<style>{blockStyleCss}</style>
			<style>{blockEditStyleCss}</style>

			{!isEnableSlider && <style>{itemStyleCss}</style>}

			<Inspector
				attributes={attributes}
				setAttributes={handleChangeAttributes}
			/>

			<Fragment>
				{isWithLinkBlock && (
					<BlockControls controls={undefined}>
						<Fragment>
							<ToolbarGroup>
								<ToolbarButton
									label={__("Add Link", "wp-custom-blocks")}
									onClick={() => showLinkPanel(!linkPanel)}
									icon="admin-links"
									placeholder={__("Add Link", "wp-custom-blocks")}
								/>
							</ToolbarGroup>

							{linkPanel && (
								<Popover
									position="bottom right"
									onFocusOutside={() => showLinkPanel(false)}
									offset={5}
								>
									<LinkControl
										link={link}
										linkName="link"
										label={__("More link", "wp-custom-blocks")}
										setAttributes={setAttributes}
									/>
								</Popover>
							)}
						</Fragment>
					</BlockControls>
				)}

				<div {...blockProps}>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="my-10 sm:my-20">
							<div className="flex justify-between items-center mb-8">
								<RichText
									tagName={titleTag}
									className="title"
									value={title}
									onChange={(v) => setAttributes({ title: v })}
									placeholder={__("Block title..", "wp-custom-blocks")}
									style={{ color: titleColor }}
								/>

								{isWithLinkBlock && (
									<div className="flex items-center cursor-pointer">
										<RichText
											tagName="span"
											className="hidden text-sm font-bold uppercase md:!inline-block md:mr-3"
											value={linkText}
											onChange={(v) => setAttributes({ linkText: v })}
											placeholder={__("Link text..", "wp-custom-blocks")}
											style={{ color: linkTextColor }}
										/>
										<div
											className="more-arrow w-6 h-6 rounded-full flex items-center justify-center"
											style={{
												color: linkBtnArrowColor,
												background: linkBackgroundBtnColor,
											}}
										>
											<svg
												width="6"
												height="8"
												viewBox="0 0 6 8"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</div>
								)}
							</div>

							<RichText
								tagName="p"
								className="max-w-3xl text-base mb-6 md:mb-11"
								value={description}
								onChange={(v) => setAttributes({ description: v })}
								placeholder={__("Block description..", "wp-custom-blocks")}
								style={{ color: descriptionColor }}
							/>

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
						</div>
					</div>
				</div>
			</Fragment>
		</Fragment>
	);
};

export default Edit;
