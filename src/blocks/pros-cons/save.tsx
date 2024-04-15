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

import type { IProsConsBlockAttributes } from "./attributes";
import { ProsConsItemSave } from "./components";

const Save: FC<BlockSaveProps<IProsConsBlockAttributes>> = ({ attributes }) => {
	const { uniqueId, title, titleColor, pros, cons, prosIcon, consIcon } =
		attributes;

	const blockProps = useBlockProps.save({
		className: classNames(
			uniqueId,
			"wp-custom-blocks-pros-cons bg-white rounded-xl py-6 px-4 md:!p-8 md:!rounded-3xl"
		),
	});

	return (
		<div {...blockProps}>
			{title && (
				<RichText.Content
					tagName="h5"
					className="text-2xl font-semibold mb-4 md:!mb-8"
					value={title}
					style={{
						color: titleColor,
					}}
				/>
			)}

			<div className="flex flex-col gap-x-8 gap-y-4 md:!flex-row">
				<div className="flex flex-1 flex-col gap-4">
					{pros.map(({ id, ...itemData }) => {
						return <ProsConsItemSave key={id} icon={prosIcon} {...itemData} />;
					})}
				</div>

				<div className="flex flex-1 flex-col gap-4">
					{cons.map(({ id, ...itemData }) => {
						return <ProsConsItemSave key={id} icon={consIcon} {...itemData} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Save;
