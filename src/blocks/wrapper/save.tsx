import React from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save() {
	const blockProps = useBlockProps.save({
		className: "[&>*]:my-14 [&>*]:md:!my-24",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
