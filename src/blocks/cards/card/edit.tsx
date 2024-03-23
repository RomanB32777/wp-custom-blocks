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

import Inspector from "./inspector";
import type { ICardElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<ICardElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		uniqueId,
		link,
		title,
		isParentStyles,
		titleColor,
		buttonText,
		buttonTextColor,
		buttonColor,
		image,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "item-card w-full"),
		style: {
			margin: 0,
		},
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "card-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

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
				<div className="group relative h-full">
					<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 h-full lg:aspect-none">
						{image.url && (
							<img
								className="!h-full w-full object-cover object-center"
								src={image.url}
								alt={image.alt}
								width={image.width}
								height={image.height}
							/>
						)}
					</div>

					<div className="absolute inset-0 flex justify-center items-center">
						<button
							className="relative p-3 mx-3 min-w-28"
							type="button"
							aria-expanded="false"
							style={{
								backgroundColor: !isParentStyles ? buttonColor : undefined,
							}}
						>
							<RichText
								tagName="span"
								className="font-lineSeedJp text-base font-black mx-auto"
								value={buttonText}
								onChange={(v) => setAttributes({ buttonText: v })}
								placeholder={__("Button text..", "wp-custom-blocks")}
								style={{ color: !isParentStyles ? buttonTextColor : undefined }}
							/>
						</button>
					</div>

					<div className="absolute inset-x-0 bottom-0">
						<RichText
							tagName="p"
							className="title font-lineSeedJp m-0 px-3 pb-1 text-base font-semibold"
							value={title}
							onChange={(v) => setAttributes({ title: v })}
							placeholder={__("Title name..", "wp-custom-blocks")}
							style={{ color: !isParentStyles ? titleColor : undefined }}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
