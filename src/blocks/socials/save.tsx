import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { ISocialsBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ISocialsBlockAttributes>> = ({ attributes }) => {
	const { uniqueId, spaceBetween } = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<div
				className="flex flex-wrap items-center"
				style={{ gap: spaceBetween }}
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
