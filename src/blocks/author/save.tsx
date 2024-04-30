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

import type { IAuthorBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IAuthorBlockAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		description,
		author,
		backgroundColor,
		avatarBorderColor,
		descriptionColor,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(
			uniqueId,
			"wp-custom-blocks-author font-notoSans flex items-center p-4 rounded-lg md:!p-7"
		),
		style: { backgroundColor },
	});

	return (
		<div {...blockProps}>
			<div className="avatar relative">
				<div
					className="border1 absolute opacity-30 rounded-full"
					style={{ borderColor: avatarBorderColor }}
				></div>
				<div
					className="border2 absolute opacity-20 rounded-full"
					style={{ borderColor: avatarBorderColor }}
				></div>
				<img
					src={author.avatar_urls?.["48"]}
					alt={author.name}
					width="48"
					height="48"
					className="w-[60px] !h-[60px] !max-w-none object-cover border-[5px] rounded-full"
					style={{
						borderColor: avatarBorderColor,
					}}
				/>
			</div>
			<RichText.Content
				tagName="p"
				className="ml-5 text-sm md:!ml-6 md:!text-base"
				value={description}
				style={{ color: descriptionColor }}
			/>
		</div>
	);
};

export default Save;
