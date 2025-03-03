import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { ICardElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ICardElementAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		link,
		title,
		isParentStyles,
		titleColor,
		buttonText,
		buttonTextColor,
		buttonColor,
		image,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "item-card w-full"),
	});

	return (
		<div {...blockProps}>
			<div className="group relative h-full">
				<div className="aspect-h-1 aspect-w-1 lg:aspect-none h-full w-full overflow-hidden rounded-xl bg-gray-200 md:!rounded-3xl">
					{image.url && (
						<img
							className="!h-full w-full object-cover object-center"
							src={image.url}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					)}
				</div>

				<div className="absolute inset-x-0 bottom-0">
					<RichText.Content
						tagName="p"
						className="title m-0 px-3 pb-1 text-base font-semibold"
						value={title}
						style={{ color: !isParentStyles ? titleColor : undefined }}
					/>
				</div>

				<div className="invisible absolute inset-0 flex items-center justify-center rounded-xl bg-dark-opacity opacity-0 duration-200 group-hover:visible group-hover:opacity-100">
					<a
						href={link.url}
						target={link.openInNewTab ? "_blank" : "_self"}
						rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
						className="no-underline"
					>
						<button
							className="relative mx-3 min-w-28 rounded-xl p-3"
							type="button"
							aria-expanded="false"
							style={{
								backgroundColor: !isParentStyles ? buttonColor : undefined,
							}}
						>
							<RichText.Content
								tagName="span"
								className="mx-auto text-base font-black"
								value={buttonText}
								style={{ color: !isParentStyles ? buttonTextColor : undefined }}
							/>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Save;
