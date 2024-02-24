import breakpointsJson from "./breakpoints.json";
import * as fontSizesJson from "./font-sizes.json";
import * as tagsJson from "./tags.json";
import * as transformsJson from "./transforms.json";

export * from "./colors";
export const breakpoints = breakpointsJson;

export const tags = Array.from(tagsJson);
export const transforms = Array.from(transformsJson);
export const fontSizes = Array.from(fontSizesJson);
