import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types/swiper-options";

import { breakpoints as baseBreakpoints } from "@/constants";

export const initSwiperSlider = (
	containerName: string,
	options: SwiperOptions = {}
) => {
	const { breakpoints, pagination, ...swiperOptions } = options;

	const paginationOptions = typeof pagination === "object" ? pagination : {};

	return new Swiper(containerName, {
		modules: [Navigation, Pagination, Autoplay],
		slidesPerView: 4,
		spaceBetween: 24,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			clickable: true,
			el: ".swiper-pagination",
			bulletClass: "group w-3 h-3",
			bulletActiveClass: "nav-active",
			renderBullet(_index: number, className: string) {
				return `
					<button class="${className}">
						<span class="inline-block w-full h-full duration-200 rounded-full bg-primary-brightest hover:bg-primary group-[.nav-active]:bg-primary"></span>
					</button>
				`;
			},
			...paginationOptions,
		},
		navigation: {
			nextEl: `.arrow-right-${containerName.replace(/[#.]/gm, "")}`,
			prevEl: `.arrow-left-${containerName.replace(/[#.]/gm, "")}`,
			disabledClass: "nav-disabled",
		},
		breakpoints: {
			[baseBreakpoints.xs]: {
				slidesPerView: 1,
			},
			[baseBreakpoints.sm]: {
				slidesPerView: 2,
			},
			[baseBreakpoints.md]: {
				slidesPerView: 3,
			},
			[baseBreakpoints.xl]: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			...breakpoints,
		},
		...swiperOptions,
	});
};
