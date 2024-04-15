import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IIconLinksBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IIconLinksBlockAttributes>> = ({
	attributes,
}) => {
	const { uniqueId, backgroundColor, borderRadius, spaceBetween } = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
		style: {
			borderRadius,
			backgroundColor,
		},
	});

	return (
		<div {...blockProps}>
			<div
				className="flex flex-wrap items-stretch"
				style={{ gap: spaceBetween }}
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
