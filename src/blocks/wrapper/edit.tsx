import React from "react";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function Edit() {
	const blockProps = useBlockProps({
		className: "border-2 border-primary px-4 sm:px-6 lg:px-8",
		style: {
			margin: 0,
			maxWidth: "none",
		},
	});

	const innerBlocksProps = useInnerBlocksProps({
		className: "[&>*]:!mx-0 [&>*]:!max-w-none [&>*]:my-14 [&>*]:md:!my-24",
	});

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}
