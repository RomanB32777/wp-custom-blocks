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

import type { IBonusElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IBonusElementAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		link,
		isParentStyles,
		backgroundColor,
		title,
		titleColor,
		buttonText,
		buttonTextColor,
		buttonColor,
		image,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "bonus w-full p-2 rounded-lg"),
		style: {
			backgroundColor: !isParentStyles ? backgroundColor : undefined,
		},
	});

	return (
		<div {...blockProps}>
			<div className="relative h-full flex flex-col items-center justify-between">
				{image.url && (
					<div className="overflow-hidden max-h-48 w-full rounded-lg">
						<a
							href={link.url}
							target={link.openInNewTab ? "_blank" : "_self"}
							rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
							className="no-underline"
						>
							<img
								className="!h-full w-full object-cover object-center"
								src={image.url}
								alt={image.alt}
							/>
						</a>
					</div>
				)}

				<RichText.Content
					tagName="p"
					className="title font-roboto m-0 text-3xl font-semibold text-center"
					value={title}
					style={{ color: !isParentStyles ? titleColor : undefined }}
				/>

				<a
					href={link.url}
					target={link.openInNewTab ? "_blank" : "_self"}
					rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
					className="no-underline"
				>
					<button
						className="bonus-button relative rounded-lg py-5 px-10"
						type="button"
						aria-expanded="false"
						style={{
							backgroundColor: !isParentStyles ? buttonColor : undefined,
						}}
					>
						<RichText.Content
							tagName="span"
							className="button-text font-roboto text-4xl font-black mx-auto"
							value={buttonText}
							style={{ color: !isParentStyles ? buttonTextColor : undefined }}
						/>
					</button>
				</a>
			</div>
		</div>
	);
};

export default Save;
