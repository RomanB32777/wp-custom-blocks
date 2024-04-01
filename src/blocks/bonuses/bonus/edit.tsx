import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	MediaPlaceholder,
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

import Inspector from "./inspector";
import type { IBonusElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IBonusElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		uniqueId,
		link,
		isParentStyles,
		backgroundColor,
		title,
		titleColor,
		buttonText,
		buttonTextColor,
		buttonColor,
		image,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "bonus w-full p-2 rounded-lg"),
		style: {
			backgroundColor: !isParentStyles ? backgroundColor : undefined,
			margin: 0,
		},
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "bonus-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

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
				<div className="relative h-full flex flex-col items-center justify-between">
					{image.url ? (
						<div className="overflow-hidden max-h-48 w-full rounded-lg">
							<img
								className="!h-full w-full object-cover object-center"
								src={image.url}
								alt={image.alt}
								width={image.width}
								height={image.height}
							/>
						</div>
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

					<RichText
						tagName="p"
						className="title m-0 text-3xl font-semibold text-center"
						value={title}
						onChange={(v) => setAttributes({ title: v })}
						placeholder={__("Title name..", "wp-custom-blocks")}
						style={{ color: !isParentStyles ? titleColor : undefined }}
					/>

					<button
						className="bonus-button relative rounded-lg py-5 px-10"
						type="button"
						aria-expanded="false"
						style={{
							backgroundColor: !isParentStyles ? buttonColor : undefined,
						}}
					>
						<RichText
							tagName="span"
							className="button-text text-4xl font-black mx-auto"
							value={buttonText}
							onChange={(v) => setAttributes({ buttonText: v })}
							placeholder={__("Button text..", "wp-custom-blocks")}
							style={{ color: !isParentStyles ? buttonTextColor : undefined }}
						/>
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
