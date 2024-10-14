import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Popover, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { breakpoints, sliderElementName } from "@/constants";
import { LinkControl } from "@/controls";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IBannerBlockAttributes } from "./attributes";

const allowedBlock = "wp-custom-blocks/sport-card";

const Edit: FC<BlockEditProps<IBannerBlockAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		uniqueId,
		blockStyle,
		backgroundColor,
		backgroundImage,
		subTitle,
		subTitleColor,
		title,
		titleColor,
		description,
		descriptionColor,
		sportsTitle,
		sportsTitleColor,
		sportsDescription,
		sportsDescriptionColor,
		buttonLink,
		buttonText,
		buttonTextColor,
		buttonColor,
		desktopItemsCount,
		desktopSpaceBetweenItems,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
		adviceBackgroundColor,
		adviceBackgroundImage,
		adviceTitle,
		adviceTitleColor,
		adviceDescription,
		adviceDescriptionColor,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	const handleShowLinkPanel = () => showLinkPanel((prev) => !prev);

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "bg-white-standard font-notoSans"),
		style: {
			maxWidth: "none",
			margin: 0,
		},
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "slider-wrapper flex flex-wrap overflow-hidden lg:!grid",
		},
		{
			allowedBlocks: [allowedBlock],
			template: [[allowedBlock, { linkText: "See more" }]],
			renderAppender: () => <InnerBlocks.DefaultBlockAppender />,
		}
	);

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "banner" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	/**
	 * Edit Styles
	 */
	const mobileEditStyles = `
		.${uniqueId} .slider-wrapper {
			gap: ${sliderMobileSpaceBetween}px;
		}

		.${uniqueId} .slider-item {
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
			flex-basis: calc(${
				100 / sliderLaptopSlidesPerView
			}% - ${sliderLaptopSpaceBetween}px);
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockEditStyleCss = `
		${mobileEditStyles}

		@media (min-width: ${breakpoints.sm}px) {
			${tabletEditStyles}
		}

		@media (min-width: ${breakpoints.md}px) {
			${laptopEditStyles}
		}
	`;

	/**
	 * Block Styles
	 */

	const blockLaptopStyles = `
		@media (min-width: ${breakpoints.lg}px) {
			.${uniqueId} .slider-wrapper {
				gap: ${desktopSpaceBetweenItems}px;
				grid-template-columns: repeat(${desktopItemsCount}, minmax(0, 1fr));
			}
		}
	`;

	const handleChangeAttributes = (attrs: Partial<IBannerBlockAttributes>) => {
		const newStyleCss = minifyCssStrings(blockLaptopStyles);

		if (blockStyle !== newStyleCss) {
			attrs.blockStyle = newStyleCss;
		}

		setAttributes(attrs);
	};

	return (
		<Fragment>
			<style>{blockEditStyleCss}</style>
			<style>{blockLaptopStyles}</style>

			<Inspector
				attributes={attributes}
				setAttributes={handleChangeAttributes}
			/>

			<BlockControls controls={[]}>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									backgroundImage: media,
								})
							}
							allowedTypes={["image"]}
							value={backgroundImage.id}
							render={({ open }) => (
								<ToolbarButton
									label={__("Edit background image", "wp-custom-blocks")}
									onClick={open}
									icon="format-image"
									placeholder={__("Edit background image", "wp-custom-blocks")}
								/>
							)}
						/>
					</MediaUploadCheck>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									adviceBackgroundImage: media,
								})
							}
							allowedTypes={["image"]}
							value={adviceBackgroundImage.id}
							render={({ open }) => (
								<ToolbarButton
									label={__("Edit advice background image", "wp-custom-blocks")}
									onClick={open}
									icon="format-image"
									placeholder={__(
										"Edit advice background image",
										"wp-custom-blocks"
									)}
								/>
							)}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			<BlockControls controls={[]}>
				<Fragment>
					<ToolbarGroup>
						<ToolbarButton
							label={__("Add Link", "wp-custom-blocks")}
							onClick={handleShowLinkPanel}
							icon="admin-links"
							placeholder={__("Add Link", "wp-custom-blocks")}
						/>
					</ToolbarGroup>
					{linkPanel && (
						<Popover
							position="bottom right"
							onFocusOutside={handleShowLinkPanel}
							offset={5}
						>
							<LinkControl
								link={buttonLink}
								linkName="link"
								label={__("Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
						</Popover>
					)}
				</Fragment>
			</BlockControls>

			<div {...blockProps}>
				<div className="relative md:mb-28">
					<div
						className="relative isolate py-16 lg:py-32"
						style={{ backgroundColor }}
					>
						{backgroundImage.url && (
							<img
								className="absolute inset-0 -z-10 !h-full w-full object-cover md:object-center"
								src={backgroundImage.url}
								alt={backgroundImage.alt}
								width={backgroundImage.width}
								height={backgroundImage.height}
							/>
						)}

						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="mx-auto mb-10 lg:mx-0">
								<h1 className="font-black uppercase">
									<RichText
										tagName="span"
										className="text-base italic tracking-wide lg:text-2xl lg:tracking-widest"
										value={subTitle}
										onChange={(v) => setAttributes({ subTitle: v })}
										placeholder={__("Subtitle..", "wp-custom-blocks")}
										style={{ color: subTitleColor }}
									/>
									<RichText
										tagName="span"
										className="mb-5 text-5xl lg:text-9xl block"
										value={title}
										onChange={(v) => setAttributes({ title: v })}
										placeholder={__("Site name..", "wp-custom-blocks")}
										style={{ color: titleColor }}
									/>
								</h1>
								<RichText
									tagName="p"
									className="text-base max-w-2xl mb-10"
									value={description}
									onChange={(v) => setAttributes({ description: v })}
									placeholder={__("Description title..", "wp-custom-blocks")}
									style={{ color: descriptionColor }}
								/>
								<button
									className="relative flex text-base italic font-black w-fit"
									type="button"
									aria-expanded="false"
								>
									<div
										className="absolute w-full h-full rounded-lg transform -skew-x-12"
										style={{ backgroundColor: buttonColor }}
									></div>
									<RichText
										tagName="span"
										className="relative uppercase py-5 px-8 mx-auto"
										value={buttonText}
										onChange={(v) => setAttributes({ buttonText: v })}
										placeholder={__("Button text..", "wp-custom-blocks")}
										style={{ color: buttonTextColor }}
									/>
								</button>
							</div>
							<div className="mx-auto mb-11 lg:mx-0">
								<RichText
									tagName="h4"
									className="mb-6 text-base font-black uppercase italic lg:text-2xl"
									value={sportsTitle}
									onChange={(v) => setAttributes({ sportsTitle: v })}
									placeholder={__("Title sports title..", "wp-custom-blocks")}
									style={{ color: sportsTitleColor }}
								/>
								<RichText
									tagName="p"
									className="text-base max-w-2xl lg:mb-10"
									value={sportsDescription}
									onChange={(v) => setAttributes({ sportsDescription: v })}
									placeholder={__(
										"Description sports description..",
										"wp-custom-blocks"
									)}
									style={{ color: sportsDescriptionColor }}
								/>
							</div>
							<div className="relative md:mb-28">
								<div className="overflow-hidden pb-14 lg:pb-0">
									<div
										className={classNames(sliderElementName, "w-full h-full")}
										id={uniqueId}
									>
										<div {...innerBlocksProps} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="md:absolute md:inset-x-0 md:-bottom-28">
						<div className="relative px-0 mx-auto max-w-7xl md:px-6 lg:px-8">
							<div className="border-hex bg-white-standard w-full h-full absolute inset-x-0 -top-2 hidden md:!block"></div>
							<div
								className="mask-hex relative isolate overflow-hidden w-full"
								style={{ backgroundColor: adviceBackgroundColor }}
							>
								{adviceBackgroundImage.url && (
									<img
										className="absolute inset-0 -z-10 !h-full w-full object-cover md:object-center"
										src={adviceBackgroundImage.url}
										alt={adviceBackgroundImage.alt}
										width={adviceBackgroundImage.width}
										height={adviceBackgroundImage.height}
									/>
								)}

								<div className="max-w-3xl p-6 md:py-12 md:px-24">
									<RichText
										tagName="h5"
										className="mb-6 text-base font-black italic md:text-2xl"
										value={adviceTitle}
										onChange={(v) => setAttributes({ adviceTitle: v })}
										placeholder={__("Advice title..", "wp-custom-blocks")}
										style={{ color: adviceTitleColor }}
									/>
									<RichText
										tagName="p"
										className="text-base mb-1.5 md:mb-0"
										value={adviceDescription}
										onChange={(v) => setAttributes({ adviceDescription: v })}
										placeholder={__("Advice description..", "wp-custom-blocks")}
										style={{ color: adviceDescriptionColor }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
