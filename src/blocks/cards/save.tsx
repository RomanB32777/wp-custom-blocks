import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { ICardsBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ICardsBlockAttributes>> = ({ attributes }) => {
	const { uniqueId, title, titleColor } = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "wp-custom-blocks-cards"),
	});

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="h2"
				className="font-roboto text-2xl font-black mb-4 md:text-3xl"
				value={title}
				style={{ color: titleColor }}
			/>
			<div className="inner-wrapper grid">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
