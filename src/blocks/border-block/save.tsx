import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IBorderBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IBorderBlockAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		backgroundColor,
		borderColor,
		borderRadius,
		borderWidth,
		blockHeight,
		text,
		textColor,
		bigValue,
		bigValueColor,
		icon,
		horizontalPosition,
		verticalPosition,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<div className="relative overflow-hidden" style={{ height: blockHeight }}>
				<div
					className="relative p-6 h-full"
					style={{ backgroundColor, borderColor, borderRadius, borderWidth }}
				>
					<RichText.Content
						tagName="p"
						className="text-content font-bold"
						value={text}
						style={{
							color: textColor,
						}}
					/>
				</div>

				{icon.url ? (
					<div
						className="absolute"
						style={{
							right: horizontalPosition,
							bottom: verticalPosition,
						}}
					>
						<span className="sr-only">Icon</span>
						<img
							className="icon"
							src={icon.url}
							alt={icon.alt}
							width={icon.width}
							height={icon.height}
						/>
					</div>
				) : (
					<RichText.Content
						tagName="span"
						className="big-value stroke-number absolute font-black tracking-[-5px] !leading-[5rem]"
						value={bigValue}
						style={{
							color: bigValueColor,
							right: horizontalPosition,
							bottom: verticalPosition,
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Save;
