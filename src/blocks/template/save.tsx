import React, { type FC } from "react";
import classNames from "classnames";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import { sliderElementName } from "@/constants";

import type { ITemplateBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ITemplateBlockAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		isLoopSlider,
		isDisableAutoplay,
		sliderAutoplayDelay,
		disableSliderBreakpoint,
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
		className: classNames(uniqueId, "font-roboto"),
	});

	const isExistSliderDisableBreakpoint =
		disableSliderBreakpoint && disableSliderBreakpoint !== "none";

	const sliderAttributes = {
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
		"data-slider-destroy-breakpoint": isExistSliderDisableBreakpoint
			? disableSliderBreakpoint
			: undefined,
	};

	return (
		<div {...blockProps}>
			<div className="my-10 sm:my-20">
				<div className="relative">
					<div className="overflow-hidden pt-6 pb-14 lg:pt-11">
						<div
							className={classNames("relative", sliderElementName)}
							id={uniqueId}
							{...sliderAttributes}
						>
							<div
								className={classNames("swiper-wrapper", {
									"inner-wrapper": isExistSliderDisableBreakpoint,
								})}
							>
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
