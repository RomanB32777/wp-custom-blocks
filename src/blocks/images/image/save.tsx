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
import { Fragment } from "@wordpress/element";

import type { IImageElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IImageElementAttributes>> = ({ attributes }) => {
	const { uniqueId, image } = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "image w-full relative"),
	});

	return (
		<div {...blockProps}>
			{image.url && (
				<Fragment>
					<img
						className="!h-full w-full object-cover rounded-lg"
						src={image.url}
						alt={image.alt}
					/>
					<div className="absolute inset-x-0 bottom-0">
						<p className="title font-roboto m-0 px-3 pb-1 text-base font-semibold">
							{image.alt}
						</p>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default Save;
