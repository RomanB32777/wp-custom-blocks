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

import type { ISocialNetworkElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ISocialNetworkElementAttributes>> = ({
	attributes,
}) => {
	const { uniqueId, image, link } = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(
			uniqueId,
			"social-network flex items-center justify-center rounded-full"
		),
	});

	return (
		<div {...blockProps}>
			{image.url && (
				<a
					href={link.url}
					target={link.openInNewTab ? "_blank" : "_self"}
					rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
					className="h-full w-full no-underline"
				>
					<img
						className="!h-full w-full object-cover"
						src={image.url}
						alt={image.alt}
						width={image.width}
						height={image.height}
					/>
				</a>
			)}
		</div>
	);
};

export default Save;
