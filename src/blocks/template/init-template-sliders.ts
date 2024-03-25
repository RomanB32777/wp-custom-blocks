import type { SwiperOptions } from "swiper/types/swiper-options";

import { breakpoints as baseBreakpoints } from "@/constants";
import { initSwiperSlider } from "@/utils/init-slider";

import { templateSliderElementName } from "./constants";

const sliders = document.querySelectorAll<HTMLDivElement>(
	`.${templateSliderElementName}`
);

sliders.forEach((slider) => {
	const { id } = slider;

	if (id) {
		const isLoop = slider.getAttribute("data-slider-loop") === "true";
		const isDisableAutoplay = slider.getAttribute(
			"data-slider-disable-autoplay"
		);
		const autoplayDelay = slider.getAttribute("data-slider-autoplay-delay");

		const xsSlidesPerView = slider.getAttribute("data-slides-per-view-xs");
		const smSlidesPerView = slider.getAttribute("data-slides-per-view-sm");
		const mdSlidesPerView = slider.getAttribute("data-slides-per-view-md");
		const xlSlidesPerView = slider.getAttribute("data-slides-per-view-xl");

		const xsSlidesSpaceBetween = slider.getAttribute(
			"data-slides-space-between-xs"
		);
		const smSlidesSpaceBetween = slider.getAttribute(
			"data-slides-space-between-sm"
		);
		const mdSlidesSpaceBetween = slider.getAttribute(
			"data-slides-space-between-md"
		);
		const xlSlidesSpaceBetween = slider.getAttribute(
			"data-slides-space-between-xl"
		);

		const baseSpaceBetween = 24;

		const swiperOptions: SwiperOptions = {
			loop: isLoop,
			breakpoints: {
				[baseBreakpoints.xs]: {
					slidesPerView: Number(xsSlidesPerView) || 1,
					spaceBetween: Number(xsSlidesSpaceBetween) || baseSpaceBetween,
				},
				[baseBreakpoints.sm]: {
					slidesPerView: Number(smSlidesPerView) || 2,
					spaceBetween: Number(smSlidesSpaceBetween) || baseSpaceBetween,
				},
				[baseBreakpoints.md]: {
					slidesPerView: Number(mdSlidesPerView) || 3,
					spaceBetween: Number(mdSlidesSpaceBetween) || baseSpaceBetween,
				},
				[baseBreakpoints.xl]: {
					slidesPerView: Number(xlSlidesPerView) || 4,
					spaceBetween: Number(xlSlidesSpaceBetween) || baseSpaceBetween,
				},
			},
			autoplay:
				isDisableAutoplay === "true"
					? false
					: {
							delay: Number(autoplayDelay) || 5000,
						},
		};

		initSwiperSlider(`#${id}`, swiperOptions);
	}
});