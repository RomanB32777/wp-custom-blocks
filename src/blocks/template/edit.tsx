import React, { type FC } from "react";
import classNames from "classnames";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";

import { breakpoints, sliderElementName } from "@/constants";
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
		mobileHeight,
		tabletHeight,
		laptopHeight,
		desktopHeight,
		disableSliderBreakpoint,
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
		childBlocks?.forEach((block) => {
			if (block.name === "wp-custom-blocks/image") {
				dispatch("core/block-editor").updateBlockAttributes(block.clientId, {
					isEnableOpenInModal: isEnableOpenImageInModal,
				});
			}
		});
	}, [childBlocks, isEnableOpenImageInModal]);

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "font-roboto"),
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "inner-wrapper h-full flex flex-col",
		},
		{
			allowedBlocks,
		}
	);

	const disableSliderBreakpointPx =
		disableSliderBreakpoint && disableSliderBreakpoint !== "none"
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

	/**
	 * Edit Styles
	 */
	const mobileEditStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${
				isMobileDisableSliderBreakpoint
					? mobileSpaceBetween
					: sliderMobileSpaceBetween
			}px;
		}

		.${uniqueId} .${templateSliderItemName} {
			height: ${mobileHeight}px;
		}

		.${uniqueId} .${templateSliderItemName} {
			width: ${
				100 /
				(isMobileDisableSliderBreakpoint
					? mobileItemsCount
					: sliderMobileSlidesPerView)
			}%;
			height: ${isMobileDisableSliderBreakpoint ? mobileItemHeight : mobileHeight}px;
		}
	`;

	const tabletEditStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${
				isTabletDisableSliderBreakpoint
					? tabletSpaceBetween
					: sliderTabletSpaceBetween
			}px;
		}

		.${uniqueId} .${templateSliderItemName} {
			width: ${
				100 /
				(isTabletDisableSliderBreakpoint
					? tabletItemsCount
					: sliderTabletSlidesPerView)
			}%;
			height: ${isTabletDisableSliderBreakpoint ? tabletItemHeight : tabletHeight}px;
		}
	`;

	const laptopEditStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${
				isLaptopDisableSliderBreakpoint
					? laptopSpaceBetween
					: sliderLaptopSpaceBetween
			}px;
		}

		.${uniqueId} .${templateSliderItemName} {
			width: ${
				100 /
				(isLaptopDisableSliderBreakpoint
					? laptopItemsCount
					: sliderLaptopSlidesPerView)
			}%;
			height: ${isLaptopDisableSliderBreakpoint ? laptopItemHeight : laptopHeight}px;
		}
	`;

	const desktopEditStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${
				isDesktopDisableSliderBreakpoint
					? desktopSpaceBetween
					: sliderDesktopSpaceBetween
			}px;
		}

		.${uniqueId} .${templateSliderItemName} {
			width: ${
				100 /
				(isDesktopDisableSliderBreakpoint
					? desktopItemsCount
					: sliderDesktopSlidesPerView)
			}%;
			height: ${
				isDesktopDisableSliderBreakpoint ? desktopItemHeight : desktopHeight
			}px;
		}
	`;

	/**
	 * Block Edit All Styles
	 */
	const blockEditStyleCss = `
		@media (max-width: ${breakpoints.sm}px) {
			${mobileEditStyles}
		}

		@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg}px) {
			${tabletEditStyles}
		}

		@media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl}px) {
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

		${
			isMobileDisableSliderBreakpoint
				? `
					.${uniqueId} .inner-wrapper {
						gap: ${mobileSpaceBetween}px;
					}
				`
				: ""
		}
	`;

	const tabletSaveStyles = `
		.${uniqueId} .${sliderElementName} {
			height: ${tabletHeight}px;
		}

		${
			isTabletDisableSliderBreakpoint
				? `
					.${uniqueId} .inner-wrapper {
						gap: ${tabletSpaceBetween}px;
					}
				`
				: ""
		}
	`;

	const laptopSaveStyles = `
		.${uniqueId} .${sliderElementName} {
			height: ${laptopHeight}px;
		}

		${
			isLaptopDisableSliderBreakpoint
				? `
					.${uniqueId} .inner-wrapper {
						gap: ${laptopSpaceBetween}px;
					}
				`
				: ""
		}
	`;

	const desktopSaveStyles = `
		.${uniqueId} .${sliderElementName} {
			height: ${desktopHeight}px;
		}

		${
			isDesktopDisableSliderBreakpoint
				? `
					.${uniqueId} .inner-wrapper {
						gap: ${desktopSpaceBetween}px;
					}
				`
				: ""
		}
	`;

	/**
	 * Block Save All Styles
	 */
	const blockSaveStyleCss = `
		@media (max-width: ${breakpoints.sm}px) {
			${mobileSaveStyles}
		}

		@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg}px) {
			${tabletSaveStyles}
		}

		@media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl}px) {
			${laptopSaveStyles}
		}

		@media (min-width: ${breakpoints.xl}px) {
			${desktopSaveStyles}
		}
	`;

	/**
	 * Block Styles
	 */

	const mobileStyles = `
		.${uniqueId} .inner-wrapper {
			grid-template-columns: repeat(${
				isMobileDisableSliderBreakpoint
					? mobileItemsCount
					: sliderMobileSlidesPerView
			}, minmax(0, 1fr));
		}

		.${uniqueId} .${templateSliderItemName} {
			height: ${isMobileDisableSliderBreakpoint ? `${mobileItemHeight}px` : "auto"};
		}
	`;

	const tabletStyles = `
		.${uniqueId} .inner-wrapper {
			grid-template-columns: repeat(${
				isTabletDisableSliderBreakpoint
					? tabletItemsCount
					: sliderTabletSlidesPerView
			}, minmax(0, 1fr));
		}

		.${uniqueId} .${templateSliderItemName} {
			height: ${isTabletDisableSliderBreakpoint ? `${tabletItemHeight}px` : "auto"};
		}
	`;

	const laptopStyles = `
		.${uniqueId} .inner-wrapper {
			grid-template-columns: repeat(${
				isLaptopDisableSliderBreakpoint
					? laptopItemsCount
					: sliderLaptopSlidesPerView
			}, minmax(0, 1fr));
		}

		.${uniqueId} .${templateSliderItemName} {
			height: ${isLaptopDisableSliderBreakpoint ? `${laptopItemHeight}px` : "auto"};
		}
	`;

	const desktopStyles = `
		.${uniqueId} .inner-wrapper {
			grid-template-columns: repeat(${
				isDesktopDisableSliderBreakpoint
					? desktopItemsCount
					: sliderDesktopSlidesPerView
			}, minmax(0, 1fr));
		}

		.${uniqueId} .${templateSliderItemName} {
			height: ${isDesktopDisableSliderBreakpoint ? `${desktopItemHeight}px` : "auto"};
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		.${uniqueId} .${templateSliderItemName} .${templateRounded} {
			border-radius: ${borderRadius}px;
		}

		@media (max-width: ${breakpoints.sm}px) {
			${mobileStyles}
		}

		@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg}px) {
			${tabletStyles}
		}

		@media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl}px) {
			${laptopStyles}
		}

		@media (min-width: ${breakpoints.xl}px) {
			${desktopStyles}
		}
	`;

	const sliderResponsiveDisable = disableSliderBreakpointPx
		? `
				@media (min-width: ${disableSliderBreakpointPx}px) {
					.${uniqueId} .${sliderElementName} {
						height: auto !important;
					}

					.${uniqueId} .inner-wrapper {
						display: grid !important;
					}
				}
			`
		: "";

	useEffect(() => {
		const newStyleCss = `
			${blockStyleCss}
			${blockSaveStyleCss}
			${sliderResponsiveDisable}
		`;

		if (JSON.stringify(blockStyle) !== JSON.stringify(newStyleCss)) {
			setAttributes({ blockStyle: newStyleCss });
		}
	}, [
		blockStyle,
		blockStyleCss,
		blockSaveStyleCss,
		sliderResponsiveDisable,
		setAttributes,
	]);

	return (
		<Fragment>
			<style>{`${minifyCssStrings(blockStyleCss)}`}</style>
			<style>{`${minifyCssStrings(blockEditStyleCss)}`}</style>

			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<Fragment>
				<div {...blockProps}>
					<div className="relative mb-6">
						<div className="overflow-hidden">
							<div
								className={classNames("relative", sliderElementName)}
								id={uniqueId}
							>
								<div {...innerBlocksProps} />
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		</Fragment>
	);
};

export default Edit;
