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

import { templateRounded, templateSliderItemName } from "../attributes";
import type { ICardElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ICardElementAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		title,
		titleColor,
		description,
		descriptionColor,
		backgroundColor,
		image,
		link,
		horizontalPosition,
		verticalPosition,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(templateSliderItemName, uniqueId, "swiper-slide"),
	});

	return (
		<div {...blockProps}>
			<a
				href={link.url}
				target={link.openInNewTab ? "_blank" : "_self"}
				rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
				className={classNames(
					"hover-block relative overflow-hidden block h-full no-underline rounded-xl p-4 transition xl:!p-6",
					templateRounded
				)}
				style={{ backgroundColor }}
			>
				{image.url && (
					<div
						className="absolute overflow-hidden rounded-xl"
						style={{
							right: horizontalPosition,
							bottom: verticalPosition,
						}}
					>
						<img
							className="object-cover h-full w-full xl:object-right"
							src={image.url}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					</div>
				)}

				<div className="relative flex flex-col h-full gap-y-8 text-white xl:w-4/6 xl:!gap-y-3">
					<RichText.Content
						tagName="h4"
						className="relative font-bold text-lg xl:!text-xl"
						value={title}
						style={{ color: titleColor }}
					/>

					<div className="flex flex-col flex-1 justify-between gap-y-8">
						<RichText.Content
							tagName="p"
							className="hidden text-lg xl:!block"
							value={description}
							style={{ color: descriptionColor }}
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="18"
							viewBox="0 0 28 18"
							fill="none"
						>
							<path
								d="M0 9H26M26 9L18.3607 1M26 9L18.3607 17"
								stroke="white"
								strokeWidth="2"
							></path>
						</svg>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Save;
