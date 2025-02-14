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
			<div className="w-full basis-full overflow-hidden md:!w-auto md:!basis-1/2">
				{image.url && (
					<img
						className="w-full rounded-xl object-cover object-center md:!rounded-3xl"
						src={image.url}
						alt={image.alt}
						width={image.width}
						height={image.height}
					/>
				)}
			</div>

			<div className="w-full basis-full md:!w-auto md:!basis-1/2 [&>*:not(:last-child)]:mb-7">
				{<InnerBlocks.Content />}
			</div>
		</div>
	);
};

export default Save;
