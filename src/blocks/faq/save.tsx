import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IFaqBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IFaqBlockAttributes>> = ({ attributes }) => {
	const { title, titleColor, uniqueId } = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="h2"
				className="text-2xl font-black mb-4 md:text-3xl"
				value={title}
				style={{ color: titleColor }}
			/>

			<div className="wp-custom-blocks-questions questions">
				<div className="flex flex-col gap-y-3">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default Save;
