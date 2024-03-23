import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import type { IImageElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IImageElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const { uniqueId, image } = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "image w-full relative"),
		style: {
			margin: 0,
		},
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "image-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	return (
		<Fragment>
			{image.id && (
				<BlockControls controls={undefined}>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {
									setAttributes({
										image: media,
									});
								}}
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
				{image.url ? (
					<Fragment>
						<img
							className="!h-full w-full object-cover"
							src={image.url}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
						<div className="absolute inset-x-0 bottom-0">
							<p className="title font-lineSeedJp m-0 px-3 pb-1 text-base font-semibold">
								{image.alt}
							</p>
						</div>
					</Fragment>
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
		</Fragment>
	);
};

export default Edit;
