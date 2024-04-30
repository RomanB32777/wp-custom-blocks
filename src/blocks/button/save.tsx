import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IButtonBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IButtonBlockAttributes>> = ({ attributes }) => {
	const { link, buttonText, buttonTextColor, buttonColor } = attributes;

	const blockProps = useBlockProps.save({
		className: "item-button font-notoSans",
	});

	return (
		<div {...blockProps}>
			<a
				href={link.url}
				target={link.openInNewTab ? "_blank" : "_self"}
				rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
				className="no-underline"
			>
				<button
					className="relative flex text-base italic font-black w-fit mx-auto"
					type="button"
					aria-expanded="false"
				>
					<div
						className="absolute w-full h-full rounded-lg transform -skew-x-12"
						style={{ backgroundColor: buttonColor }}
					></div>
					<RichText.Content
						tagName="span"
						className="relative py-5 px-8 mx-auto"
						value={buttonText}
						style={{ color: buttonTextColor }}
					/>
				</button>
			</a>
		</div>
	);
};

export default Save;
