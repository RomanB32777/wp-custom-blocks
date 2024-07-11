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

import { templateRounded, templateSliderItemName } from "../attributes";
import Inspector from "./inspector";
import type { IImageElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IImageElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const { image, uniqueId, isSlideItem, modificatorClass } = attributes;

	const blockProps = useBlockProps({
		className: classNames(templateSliderItemName, modificatorClass, {
			"h-full": isSlideItem,
			"w-full": !isSlideItem,
			[uniqueId]: !isSlideItem,
		}),
		style: { margin: 0 },
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
			<Inspector attributes={attributes} setAttributes={setAttributes} />

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
					<img
						className={classNames(
							"!h-full w-full object-cover",
							templateRounded
						)}
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
		</Fragment>
	);
};

export default Edit;
