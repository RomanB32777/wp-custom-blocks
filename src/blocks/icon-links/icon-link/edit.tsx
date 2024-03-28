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
import { Popover, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { LinkControl } from "@/controls";

import type { IIconLinkElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IIconLinkElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const { uniqueId, image, link } = attributes;
	const [linkPanel, showLinkPanel] = useState(false);

	const blockProps = useBlockProps({
		className: classNames(
			uniqueId,
			"icon-link flex items-center justify-center rounded-full cursor-pointer"
		),
		style: {
			margin: 0,
		},
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "icon-link-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	return (
		<Fragment>
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

			<BlockControls controls={undefined}>
				<Fragment>
					<ToolbarGroup>
						<ToolbarButton
							label={__("Add Link", "wp-custom-blocks")}
							onClick={() => showLinkPanel(true)}
							icon="admin-links"
							placeholder={__("Add Link", "wp-custom-blocks")}
						/>
					</ToolbarGroup>
					{linkPanel && (
						<Popover
							position="bottom right"
							onFocusOutside={() => showLinkPanel(false)}
							offset={5}
						>
							<LinkControl
								link={link}
								linkName="link"
								label={__("Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
						</Popover>
					)}
				</Fragment>
			</BlockControls>

			<div {...blockProps}>
				{image.url ? (
					<img
						className="!h-full w-full object-cover"
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
