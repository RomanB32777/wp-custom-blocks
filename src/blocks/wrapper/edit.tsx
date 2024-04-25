import React from "react";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function Edit() {
	const blockProps = useBlockProps({
		className: "border-2 border-primary mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
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
