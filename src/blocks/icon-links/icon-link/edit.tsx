import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
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
	const { uniqueId, image, link, title } = attributes;
	const [linkPanel, showLinkPanel] = useState(false);

	const blockProps = useBlockProps({
		className: classNames(
			uniqueId,
			"icon-link h-auto flex flex-col items-center justify-center rounded-full cursor-pointer"
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
				<div className="icon-image flex items-center justify-center">
					<img
						className={classNames(
							"!h-full w-auto object-cover",
							image.url ? "w-auto" : "w-full bg-gray-200"
						)}
						src={image.url}
						alt={image.alt}
						width={image.width}
						height={image.height}
					/>
				</div>
				<RichText
					tagName="p"
					className="text-base font-medium mt-3 text-center"
					value={title}
					onChange={(v) => setAttributes({ title: v })}
					placeholder={__("Icon title..", "wp-custom-blocks")}
				/>
			</div>
		</Fragment>
	);
};

export default Edit;
