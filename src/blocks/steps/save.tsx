import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IStepsBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IStepsBlockAttributes>> = ({
	attributes: { uniqueId, description, descriptionColor },
}) => {
	const blockProps = useBlockProps.save({
		className: classNames(
			uniqueId,
			"wp-custom-blocks-steps bg-white rounded-xl py-6 px-4 md:!p-8 md:!rounded-3xl"
		),
	});

	return (
		<div {...blockProps}>
			<div className="divide-y divide-primary flex flex-col gap-4 md:!gap-6">
				{description && (
					<RichText.Content
						tagName="p"
						className="text-base md:!text-lg"
						value={description}
						style={{ color: descriptionColor }}
					/>
				)}

				<div className="pt-4 md:!pt-6">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default Save;
