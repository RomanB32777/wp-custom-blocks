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
	const { uniqueId, image, link, title } = attributes;

	if (!image.url) {
		return null;
	}

	const blockProps = useBlockProps.save({
		className: classNames(
			uniqueId,
			"icon-link flex flex-col items-center justify-center rounded-full no-underline"
		),
	});

	return (
		<a
			href={link.url}
			target={link.openInNewTab ? "_blank" : "_self"}
			rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
			{...blockProps}
		>
			<div className="icon-image flex items-center justify-center">
				<img
					className="!h-full w-auto object-cover"
					src={image.url}
					alt={image.alt}
					width={image.width}
					height={image.height}
				/>
			</div>
			{title && (
				<p className="text-base font-medium mt-3 text-center">{title}</p>
			)}
		</a>
	);
};

export default Save;
