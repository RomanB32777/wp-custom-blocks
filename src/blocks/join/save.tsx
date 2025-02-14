import React from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save() {
	const { className, ...blockProps } = useBlockProps.save();

	const blockClassName = (className as string)?.split(" ")[0];

	return (
		<div
			{...blockProps}
			className={classNames(
				blockClassName,
				"[&>*]:!mx-0 [&>*]:my-7 [&>*]:!max-w-none [&>*]:first:!mt-0 [&>*]:last:!mb-0 [&>*]:md:!my-14"
			)}
		>
			<InnerBlocks.Content />
		</div>
	);
}
