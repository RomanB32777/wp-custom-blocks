import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	InnerBlocks,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import Inspector from "./inspector";
import type { IContentBlockAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IContentBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { isReverse, image } = attributes;

	const blockProps = useBlockProps({
		className: classNames(
			"font-notoSans flex flex-col items-center gap-6 md:!flex-row",
			{
				"flex-col-reverse": isReverse,
				"md:!flex-row-reverse": isReverse,
			}
		),
	});

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			{image.id && (
				<BlockControls controls={[]}>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										image: media,
									})
								}
								allowedTypes={["image"]}
								value={image.id}
								render={({ open }) => {
									return (
										<ToolbarButton
											label={__("Edit image", "wp-custom-blocks")}
											onClick={open}
											icon="format-image"
											placeholder={__("Edit image", "wp-custom-blocks")}
										/>
									);
								}}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				</BlockControls>
			)}

			<div {...blockProps}>
				<div className="overflow-hidden basis-full w-full md:!basis-1/2 md:!w-auto">
					{image.url ? (
						<img
							className="w-full object-cover object-center"
							src={image.url}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					) : (
						<MediaPlaceholder
							onSelect={(media) =>
								setAttributes({
									image: media,
								})
							}
							allowedTypes={["image"]}
							multiple={false}
							labels={{
								title: __("Image", "wp-custom-blocks"),
								instructions: __("Upload image", "wp-custom-blocks"),
							}}
							icon="format-image"
							onHTMLDrop={undefined}
						/>
					)}
				</div>

				<div className="basis-full w-full md:!basis-1/2 md:!w-auto">
					<InnerBlocks />
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
