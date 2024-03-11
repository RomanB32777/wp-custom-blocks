import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IBannerBlockAttributes } from "./attributes";
import { bannerSliderElementName } from "./constants";

const Save: FC<BlockSaveProps<IBannerBlockAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		backgroundColor,
		backgroundImage,
		title,
		description,
		titleColor,
		descriptionColor,
		sportsTitle,
		sportsTitleColor,
		sportsDescription,
		sportsDescriptionColor,
		buttonLink,
		buttonText,
		buttonTextColor,
		buttonColor,
		isLoopSlider,
		isDisableAutoplay,
		sliderAutoplayDelay,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
		adviceTitle,
		adviceBackgroundColor,
		adviceBackgroundImage,
		adviceTitleColor,
		adviceDescription,
		adviceDescriptionColor,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "!mt-0", "md:!mb-32"),
	});

	const sliderAttributes = {
		"data-slider-loop": isLoopSlider,
		"data-slider-disable-autoplay": isDisableAutoplay,
		"data-slider-autoplay-delay": sliderAutoplayDelay,
		"data-slides-per-view-xs": sliderMobileSlidesPerView,
		"data-slides-per-view-sm": sliderTabletSlidesPerView,
		"data-slides-per-view-md": sliderLaptopSlidesPerView,
		"data-slides-space-between-xs": sliderMobileSpaceBetween,
		"data-slides-space-between-sm": sliderTabletSpaceBetween,
		"data-slides-space-between-md": sliderLaptopSpaceBetween,
	};

	return (
		<div {...blockProps}>
			<div className="relative md:mb-28">
				<div
					className="relative isolate py-16 lg:py-32"
					style={{ backgroundColor }}
				>
					{backgroundImage.url && (
						<img
							className="absolute inset-0 -z-10 h-full w-full object-cover md:object-center"
							src={backgroundImage.url}
							alt={backgroundImage.alt}
							width={backgroundImage.width}
							height={backgroundImage.height}
						/>
					)}

					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto mb-10 lg:mx-0">
							<h1 className="font-notoSans font-black uppercase">
								<span className="text-base italic text-white tracking-wide lg:text-2xl lg:tracking-widest">
									Welcome to
								</span>
								<RichText.Content
									tagName="span"
									className="mb-5 text-5xl lg:text-9xl block"
									value={title}
									style={{ color: titleColor }}
								/>
							</h1>
							<RichText.Content
								tagName="p"
								className="font-notoSans text-base max-w-2xl mb-10"
								value={description}
								style={{ color: descriptionColor }}
							/>
							{buttonText && (
								<a
									href={buttonLink.url}
									target={buttonLink.openInNewTab ? "_blank" : "_self"}
									rel={
										buttonLink.openInNewTab ? "noopener noreferrer" : "noopener"
									}
									className="no-underline inline-block"
								>
									<button
										className="relative flex text-white text-base italic font-black w-fit"
										type="button"
										aria-expanded="false"
									>
										<div
											className="absolute w-full h-full rounded-lg transform -skew-x-12"
											style={{ backgroundColor: buttonColor }}
										></div>
										<RichText.Content
											tagName="span"
											className="font-notoSans relative uppercase py-5 px-8 mx-auto"
											value={buttonText}
											style={{ color: buttonTextColor }}
										/>
									</button>
								</a>
							)}
						</div>
						<div className="mx-auto mb-11 lg:mx-0">
							<RichText.Content
								tagName="h4"
								className="font-notoSans mb-6 text-base font-black text-white uppercase italic lg:text-2xl"
								value={sportsTitle}
								style={{ color: sportsTitleColor }}
							/>
							<RichText.Content
								tagName="p"
								className="font-notoSans text-base text-white max-w-2xl lg:mb-10"
								value={sportsDescription}
								style={{ color: sportsDescriptionColor }}
							/>
						</div>
						<div className="relative md:mb-28">
							<div className="overflow-hidden pb-14 lg:pb-0">
								<div
									className={classNames(
										bannerSliderElementName,
										"w-full h-full"
									)}
									id={uniqueId}
									{...sliderAttributes}
								>
									<div className="swiper-wrapper slider-wrapper lg:!grid">
										<InnerBlocks.Content />
									</div>
									<div className="swiper-pagination [&>*]:mr-3 [&>*:last-child]:mr-0 lg:!hidden"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{(adviceTitle || adviceDescription) && (
					<div className="md:absolute md:inset-x-0 md:-bottom-28">
						<div className="relative px-0 mx-auto max-w-7xl md:px-6 lg:px-8">
							<div className="border-hex bg-white-standard w-full h-full absolute inset-x-0 -top-2 hidden md:!block"></div>
							<div
								className="mask-hex relative isolate overflow-hidden w-full"
								style={{ backgroundColor: adviceBackgroundColor }}
							>
								{adviceBackgroundImage && (
									<img
										className="absolute inset-0 -z-10 h-full w-full object-cover md:object-center"
										src={adviceBackgroundImage.url}
										alt={adviceBackgroundImage.alt}
										width={adviceBackgroundImage.width}
										height={adviceBackgroundImage.height}
									/>
								)}

								<div className="max-w-3xl p-6 md:!py-12 md:!px-24">
									<RichText.Content
										tagName="h5"
										className="font-notoSans mb-6 text-base font-black italic md:!text-2xl"
										value={adviceTitle}
										style={{ color: adviceTitleColor }}
									/>
									<RichText.Content
										tagName="p"
										className="font-notoSans text-base mb-1.5 md:!mb-0"
										value={adviceDescription}
										style={{ color: adviceDescriptionColor }}
									/>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Save;
