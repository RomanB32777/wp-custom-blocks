import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IFaqBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IFaqBlockAttributes>> = ({ attributes }) => {
	const { uniqueId, isOpenDefault, isOpenMultiple } = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	const faqAttributes = {
		"data-faq-open-default": isOpenDefault,
		"data-faq-open-multiple": isOpenMultiple,
	};

	return (
		<div {...blockProps}>
			<div className="wp-custom-blocks-questions questions" {...faqAttributes}>
				<div className="flex flex-col gap-y-3">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default Save;
