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

import type { IStepElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IStepElementAttributes>> = ({ attributes }) => {
	const { uniqueId, step, photo, icon, title, description, isOnlyText } =
		attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "step relative pb-7 pl-10 md:!pl-16"),
	});

	return (
		<div {...blockProps}>
			<div className="line absolute top-0 h-full"></div>

			{step && (
				<span className="number absolute left-0 top-0 inline-block h-8 w-8 rounded-full p-1 text-center text-base font-semibold">
					{icon.url ? (
						<img
							src={icon.url}
							alt={icon.alt}
							width={icon.width}
							height={icon.height}
						/>
					) : (
						step
					)}
				</span>
			)}

			{title && (
				<RichText.Content
					tagName="h5"
					className="title text-base font-bold md:!text-xl"
					value={title}
				/>
			)}

			{description && (
				<RichText.Content
					tagName="p"
					className={classNames("description py-6 text-sm md:!text-lg", {
						"rounded-lg border p-4": isOnlyText,
					})}
					value={description}
				/>
			)}

			{photo.url && !isOnlyText && (
				<div className="photo">
					<img
						className="max-w-48 md:!max-w-96"
						src={photo.url}
						alt={photo.alt || title}
						width={photo.width}
						height={photo.height}
					/>
				</div>
			)}
		</div>
	);
};

export default Save;
