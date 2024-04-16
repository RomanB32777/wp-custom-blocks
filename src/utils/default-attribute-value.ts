import type { AttributeSource } from "@wordpress/blocks";

import type { TBlockAttributes } from "@/types";

export const getDefaultAttributeValue = <T extends Record<keyof T, unknown>>(
	defaultAttributes: TBlockAttributes<T>,
	attrName: keyof T
) => {
	return (defaultAttributes[attrName] as AttributeSource.Attribute).default;
};
