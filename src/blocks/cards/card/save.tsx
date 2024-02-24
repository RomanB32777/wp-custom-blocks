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
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 h-full lg:aspect-none">
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
						className="title font-roboto m-0 px-3 pb-1 text-base font-semibold"
						value={title}
						style={{ color: !isParentStyles ? titleColor : undefined }}
					/>
				</div>

				<div className="absolute inset-0 rounded-lg flex justify-center items-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-dark-opacity duration-200">
					<a
						href={link.url}
						target={link.openInNewTab ? "_blank" : "_self"}
						rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
						className="no-underline"
					>
						<button
							className="relative rounded-lg p-3 mx-3 min-w-28"
							type="button"
							aria-expanded="false"
							style={{
								backgroundColor: !isParentStyles ? buttonColor : undefined,
							}}
						>
							<RichText.Content
								tagName="span"
								className="font-roboto text-base font-black mx-auto"
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
