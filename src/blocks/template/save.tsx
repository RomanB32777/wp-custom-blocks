import React, { type FC } from "react";
import classNames from "classnames";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import { sliderElementName } from "@/constants";

import type { ITemplateBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ITemplateBlockAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
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
		isEnableSlider,
		isLoopSlider,
		isDisableAutoplay,
		sliderAutoplayDelay,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderDesktopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
		sliderDesktopSpaceBetween,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "font-notoSans"),
	});

	const sliderAttributes = isEnableSlider
		? {
				"data-slider-loop": isLoopSlider,
				"data-slider-disable-autoplay": isDisableAutoplay,
				"data-slider-autoplay-delay": sliderAutoplayDelay,
				"data-slides-per-view-xs": sliderMobileSlidesPerView,
				"data-slides-per-view-sm": sliderTabletSlidesPerView,
				"data-slides-per-view-md": sliderLaptopSlidesPerView,
				"data-slides-per-view-xl": sliderDesktopSlidesPerView,
				"data-slides-space-between-xs": sliderMobileSpaceBetween,
				"data-slides-space-between-sm": sliderTabletSpaceBetween,
				"data-slides-space-between-md": sliderLaptopSpaceBetween,
				"data-slides-space-between-xl": sliderDesktopSpaceBetween,
			}
		: {};

	return (
		<div {...blockProps}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="my-10 sm:my-20">
					<div className="flex justify-between items-center mb-8">
						<RichText.Content
							tagName={titleTag}
							className="title"
							value={title}
							style={{ color: titleColor }}
						/>

						{isWithLinkBlock && (
							<a
								href={link.url}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
								className="no-underline"
							>
								<div className="flex items-center cursor-pointer">
									<RichText.Content
										tagName="span"
										className="hidden text-sm font-bold uppercase md:!inline-block md:mr-3"
										value={linkText}
										style={{ color: linkTextColor }}
									/>
									<div
										className="more-arrow w-6 h-6 rounded-full flex items-center justify-center bg-white-light"
										style={{
											color: linkBtnArrowColor,
											backgroundColor: linkBackgroundBtnColor,
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
							</a>
						)}
					</div>

					<RichText.Content
						tagName="p"
						className="max-w-3xl text-base mb-6 md:mb-11"
						value={description}
						style={{ color: descriptionColor }}
					/>

					<div className="relative">
						<div
							className={classNames("overflow-hidden pt-6 lg:pt-11", {
								"pb-14": isEnableSlider,
							})}
						>
							<div
								className={
									isEnableSlider ? sliderElementName : "inner-wrapper grid"
								}
								id={uniqueId}
								{...sliderAttributes}
							>
								{isEnableSlider ? (
									<>
										<div className="swiper-wrapper">
											<InnerBlocks.Content />
										</div>
										<div className="swiper-pagination [&>*]:mr-3 [&>*:last-child]:mr-0"></div>
									</>
								) : (
									<InnerBlocks.Content />
								)}
							</div>
						</div>
						{isEnableSlider && (
							<div className="absolute -inset-x-16 hidden top-1/2 2xl:flex 2xl:justify-between">
								<div
									className={`group text-white rotate-180 arrow-left-${uniqueId}`}
								>
									<div className="flex items-center cursor-pointer group-[.nav-disabled]:opacity-50 group-[.nav-disabled]:pointer-events-none">
										<div className="more-arrow w-6 h-6 rounded-full flex items-center justify-center bg-primary">
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
								</div>
								<div className={`group text-white arrow-right-${uniqueId}`}>
									<div className="flex items-center cursor-pointer group-[.nav-disabled]:opacity-50 group-[.nav-disabled]:pointer-events-none">
										<div className="more-arrow w-6 h-6 rounded-full flex items-center justify-center bg-primary">
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
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
