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

import { templateRounded, templateSliderItemName } from "../attributes";
import crownIcon from "./assets/crown.svg";
import primaryFlagImage from "./assets/flag-primary.png";
import flagImage from "./assets/flag.png";
import Inspector from "./inspector";
import type { ICardElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<ICardElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		uniqueId,
		modificatorClass,
		index,
		isWithIndex,
		isSlideItem,
		link,
		title,
		titleColor,
		category,
		categoryColor,
		buttonText,
		buttonTextColor,
		buttonColor,
		review,
		reviewColor,
		image,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	const blockProps = useBlockProps({
		className: classNames(templateSliderItemName, modificatorClass, {
			"h-96": isSlideItem,
			"w-full": !isSlideItem,
			[uniqueId]: !isSlideItem,
		}),
		style: { margin: 0 },
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
				<div className="group relative h-full">
					<div
						className={classNames(
							"aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 h-full lg:aspect-none group-hover:opacity-75",
							templateRounded
						)}
					>
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

					{isWithIndex && (
						<div className="absolute -top-2 left-2.5">
							{index === 0 ? (
								<>
									<img
										src={primaryFlagImage}
										alt="flag alt"
										width={52}
										height={67}
									/>
									<div className="absolute left-0 bottom-0 flex items-center justify-center right-1 -top-1">
										<img src={crownIcon} alt="crown" width={21} height={18} />
									</div>
								</>
							) : (
								<>
									<img src={flagImage} alt="flag alt" width={52} height={56} />
									<div className="absolute left-0 bottom-0 flex items-center justify-center -top-1.5 right-1.5">
										<p className="font-black text-2xl text-white">
											{index + 1}
										</p>
									</div>
								</>
							)}
						</div>
					)}

					<div className="absolute inset-x-0 bottom-0">
						<div className="mx-4">
							<div className="mx-7">
								<RichText
									tagName="p"
									className="mb-2 text-xs font-semibold"
									value={category}
									onChange={(v) => setAttributes({ category: v })}
									placeholder={__("Category name..", "wp-custom-blocks")}
									style={{ color: categoryColor }}
								/>
								<RichText
									tagName="p"
									className="mb-6 text-base font-semibold"
									value={title}
									onChange={(v) => setAttributes({ title: v })}
									placeholder={__("Title name..", "wp-custom-blocks")}
									style={{ color: titleColor }}
								/>
							</div>

							<button
								className="relative rounded-xl py-4 px-7 w-full"
								type="button"
								aria-expanded="false"
								style={{ backgroundColor: buttonColor }}
							>
								<RichText
									tagName="span"
									className="text-base font-medium mx-auto"
									value={buttonText}
									onChange={(v) => setAttributes({ buttonText: v })}
									placeholder={__("Button text..", "wp-custom-blocks")}
									style={{ color: buttonTextColor }}
								/>
							</button>

							<div className="text-center py-5">
								<div className="text-sm font-medium no-underline">
									<RichText
										tagName="span"
										value={review}
										onChange={(v) => setAttributes({ review: v })}
										placeholder={__("Review text..", "wp-custom-blocks")}
										style={{ color: reviewColor }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
