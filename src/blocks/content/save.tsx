import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IContentBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IContentBlockAttributes>> = ({ attributes }) => {
	const { image, isReverse } = attributes;

	const blockProps = useBlockProps.save({
		className: classNames("flex flex-col items-center gap-6 md:!flex-row", {
			"flex-col-reverse": isReverse,
			"md:!flex-row-reverse": isReverse,
		}),
	});

	return (
		<div {...blockProps}>
			<div className="overflow-hidden basis-full w-full md:!basis-1/2 md:!w-auto">
				{image.url && (
					<img
						className="w-full object-cover object-center"
						src={image.url}
						alt={image.alt}
						width={image.width}
						height={image.height}
					/>
				)}
			</div>

			<div className="basis-full w-full md:!basis-1/2 md:!w-auto [&>*:not(:last-child)]:mb-7">
				{<InnerBlocks.Content />}
			</div>
		</div>
	);
};

export default Save;
