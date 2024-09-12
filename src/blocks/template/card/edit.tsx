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
import { minifyCssStrings } from "@/utils/minify-css";

import { templateRounded, templateSliderItemName } from "../attributes";
import Inspector from "./inspector";
import type { ICardElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<ICardElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		uniqueId,
		blockStyle,
		title,
		titleColor,
		description,
		descriptionColor,
		backgroundColor,
		hoverBackgroundColor,
		image,
		link,
		horizontalPosition,
		verticalPosition,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	const blockProps = useBlockProps({
		className: classNames(templateSliderItemName, uniqueId, "h-full w-full"),
		style: { margin: 0 },
	});

	const blockStyleCss = `
		.${uniqueId} .hover-block:hover {
			background-color: ${hoverBackgroundColor} !important;
		}
	`;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "card-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	const handleChangeAttributes = (attrs: Partial<ICardElementAttributes>) => {
		const newStyleCss = minifyCssStrings(blockStyleCss);

		if (blockStyle !== newStyleCss) {
			attrs.blockStyle = newStyleCss;
		}

		setAttributes(attrs);
	};

	return (
		<Fragment>
			<style>{blockStyleCss}</style>

			<Inspector
				attributes={attributes}
				setAttributes={handleChangeAttributes}
			/>

			<BlockControls controls={undefined}>
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
				<div
					className={classNames(
						"hover-block relative w-full h-full overflow-hidden p-6",
						templateRounded
					)}
					style={{ backgroundColor }}
				>
					{image.url && (
						<div
							className="absolute overflow-hidden rounded-xl"
							style={{
								right: horizontalPosition,
								bottom: verticalPosition,
							}}
						>
							<img
								className="object-cover !h-full w-full xl:object-right"
								src={image.url}
								alt={image.alt}
								width={image.width}
								height={image.height}
							/>
						</div>
					)}

					<div className="relative flex flex-col h-full gap-y-8 text-white xl:w-4/6 xl:!gap-y-3">
						<RichText
							tagName="h4"
							className="relative font-bold text-lg xl:!text-xl"
							value={title}
							onChange={(v) => setAttributes({ title: v })}
							placeholder={__("Title..", "wp-custom-blocks")}
							style={{ color: titleColor }}
						/>

						<div className="flex flex-col flex-1 justify-between gap-y-8">
							<RichText
								tagName="p"
								className="hidden text-lg xl:!block"
								value={description}
								onChange={(v) => setAttributes({ description: v })}
								placeholder={__("Description..", "wp-custom-blocks")}
								style={{ color: descriptionColor }}
							/>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="18"
								viewBox="0 0 28 18"
								fill="none"
							>
								<path
									d="M0 9H26M26 9L18.3607 1M26 9L18.3607 17"
									stroke="white"
									strokeWidth="2"
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
