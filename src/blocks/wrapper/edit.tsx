import React from "react";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
	const blockProps = useBlockProps({
		className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-96",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks renderAppender={() => <InnerBlocks.ButtonBlockAppender />} />
		</div>
	);
}
