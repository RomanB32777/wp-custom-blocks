import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IIconLinkElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IIconLinkElementAttributes>> = ({
	attributes,
}) => {
	const { uniqueId, image, link } = attributes;

	if (!image.url) {
		return null;
	}

	const blockProps = useBlockProps.save({
		className: classNames(
			uniqueId,
			"icon-link flex items-center justify-center rounded-full"
		),
	});

	return (
		<a
			href={link.url}
			target={link.openInNewTab ? "_blank" : "_self"}
			rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
			className="h-full w-full no-underline"
			{...blockProps}
		>
			<img
				className="!h-full w-full object-cover"
				src={image.url}
				alt={image.alt}
				width={image.width}
				height={image.height}
			/>
		</a>
	);
};

export default Save;
