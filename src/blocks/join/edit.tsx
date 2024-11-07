import React from "react";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function Edit() {
	const blockProps = useBlockProps({
		className: "border-2 border-primary min-h-14",
		style: {
			marginRight: 0,
			marginLeft: 0,
			maxWidth: "none",
		},
	});

	const innerBlocksProps = useInnerBlocksProps({
		className: "[&>*]:!mx-0 [&>*]:!max-w-none [&>*]:my-7 [&>*]:md:!my-14",
	});

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}