import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IMainBannerBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IMainBannerBlockAttributes>> = ({
	attributes,
}) => {
	const { uniqueId, backgroundColor, backgroundImage, logoImage } = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(
			uniqueId,
			"wp-custom-blocks-main-banner relative left-1/2 w-screen -translate-x-2/4"
		),
		style: {
			marginTop: "0 !important",
		},
	});

	return (
		<div {...blockProps}>
			<div className="relative">
				<div
					className="relative isolate py-12 lg:!py-16"
					style={{ backgroundColor }}
				>
					{backgroundImage.url && (
						<img
							src={backgroundImage.url}
							alt={backgroundImage.alt}
							width={backgroundImage.width}
							height={backgroundImage.height}
							className="absolute inset-0 -z-10 h-full w-full object-cover md:object-center"
						/>
					)}

					<div className="relative mx-auto flex max-w-7xl gap-x-10 px-4 sm:px-6 lg:px-8">
						<div className="flex-1 [&>*]:my-7 [&>*]:last:!mb-0">
							<InnerBlocks.Content />
						</div>

						<div className="hidden flex-1 lg:!block">
							<div className="flex h-full items-center lg:!justify-center">
								<img
									src={logoImage.url}
									alt={logoImage.alt}
									width={logoImage.width}
									height={logoImage.height}
									className="h-full max-h-96 w-full object-contain object-center lg:!max-w-none"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
