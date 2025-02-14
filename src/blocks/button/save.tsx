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
		className: "item-button w-full text-center",
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
					className="relative rounded-xl px-7 py-4"
					type="button"
					aria-expanded="false"
					style={{ backgroundColor: buttonColor }}
				>
					<RichText.Content
						tagName="span"
						className="mx-auto text-base font-medium"
						value={buttonText}
						style={{ color: buttonTextColor }}
					/>
				</button>
			</a>
		</div>
	);
};

export default Save;
