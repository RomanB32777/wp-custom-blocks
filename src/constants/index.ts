import breakpointsJson from "./breakpoints.json";
import * as fontSizesJson from "./font-sizes.json";
import * as tagsJson from "./tags.json";
import * as transformsJson from "./transforms.json";

export * from "./colors";
export const breakpoints = breakpointsJson;

export const breakpointNames: Record<keyof typeof breakpoints, string> = {
	xs: "Mini",
	sm: "Mobile",
	md: "Tablet",
	lg: "Laptop",
	xl: "Desktop",
};

export const tags = Array.from(tagsJson);
export const transforms = Array.from(transformsJson);
export const fontSizes = Array.from(fontSizesJson);
export const sliderElementName = "swiper-slider";
