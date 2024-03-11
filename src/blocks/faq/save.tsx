import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IFaqBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IFaqBlockAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		backgroundColor,
		backgroundImage,
		title,
		description,
		titleColor,
		descriptionColor,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
		style: { margin: 0 },
	});

	return (
		<div {...blockProps}>
			<div
				className="relative isolate overflow-hidden pt-36 pb-0 sm:py-24 lg:py-32"
				style={{ backgroundColor }}
			>
				{backgroundImage.url && (
					<img
						className="absolute inset-0 -z-10 h-36 w-full object-cover sm:object-center sm:h-full"
						src={backgroundImage.url}
						alt={backgroundImage.alt}
						width={backgroundImage.width}
						height={backgroundImage.height}
					/>
				)}

				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div
						className="rounded-none p-4 sm:p-10 sm:rounded-lg"
						style={{ backgroundColor }}
					>
						<RichText.Content
							tagName="h5"
							className="font-notoSans text-xl font-black italic uppercase mb-6 md:!text-2xl"
							value={title}
							style={{ color: titleColor }}
						/>
						<RichText.Content
							tagName="p"
							className="font-notoSans text-sm font-normal mb-6 md:mb-11"
							value={description}
							style={{ color: descriptionColor }}
						/>
						<div className="wp-custom-blocks-questions questions grid grid-cols-1 gap-y-4 text-dark pb-10 border-b border-primary-light sm:pb-0 sm:border-none lg:grid-cols-10 lg:gap-y-8 lg:gap-x-6">
							<div className="col-span-4 col-start-1">
								<div className="flex flex-col gap-y-3">
									<InnerBlocks.Content />
								</div>
							</div>
							<div className="col-span-6 hidden relative lg:block">
								<div className="question-desktop-content absolute inset-0 h-full overflow-y-auto">
									{/* eslint-disable-next-line jsx-a11y/heading-has-content */}
									<h5 className="font-notoSans mb-6 text-lg font-semibold italic"></h5>
									<p className="font-notoSans text-base"></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
