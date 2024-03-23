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

import type { IBonusesBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IBonusesBlockAttributes>> = ({ attributes }) => {
	const { uniqueId, buttonText, buttonTextColor, link } = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "wp-custom-blocks-bonuses"),
	});

	return (
		<div {...blockProps}>
			<div className="inner-wrapper !grid">
				<InnerBlocks.Content />
			</div>
			{Boolean(buttonText?.length) && (
				<div className="mt-6 text-center">
					<a
						href={link.url}
						target={link.openInNewTab ? "_blank" : "_self"}
						rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
						className="no-underline"
					>
						<button
							className="link-button relative py-5 px-10"
							type="button"
							aria-expanded="false"
						>
							<RichText.Content
								tagName="span"
								className="font-lineSeedJp text-4xl font-black mx-auto"
								value={buttonText}
								style={{ color: buttonTextColor }}
							/>
						</button>
					</a>
				</div>
			)}
		</div>
	);
};

export default Save;
