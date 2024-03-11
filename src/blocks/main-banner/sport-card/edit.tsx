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
import { Fragment, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { LinkControl } from "@/controls";

import { bannerSliderItemName } from "../constants";
import Inspector from "./inspector";
import type { ISportCardElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<ISportCardElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		name,
		nameColor,
		backgroundImg,
		link,
		icon,
		arrowColor,
		linkText,
		linkColor,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	const blockProps = useBlockProps({
		className: classNames(bannerSliderItemName, "slider-item w-full"),
		style: {
			margin: 0,
		},
	});

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<BlockControls controls={[]}>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									backgroundImg: media,
								})
							}
							allowedTypes={["image"]}
							value={backgroundImg.id}
							render={({ open }) => {
								return (
									<ToolbarButton
										label={__("Edit background image", "wp-custom-blocks")}
										onClick={open}
										icon="format-image"
										placeholder={__(
											"Edit background image",
											"wp-custom-blocks"
										)}
									/>
								);
							}}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			{!linkText && (
				<BlockControls controls={[]}>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										icon: media,
									})
								}
								allowedTypes={["image"]}
								value={icon && icon.id}
								render={({ open }) => {
									return (
										<ToolbarButton
											label={__("Edit icon", "wp-custom-blocks")}
											onClick={open}
											icon="info-outline"
											placeholder={__("Edit icon", "wp-custom-blocks")}
										/>
									);
								}}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				</BlockControls>
			)}

			<BlockControls controls={[]}>
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
				<div className="group relative">
					<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none h-96">
						{backgroundImg ? (
							<img
								className="!h-full w-full object-cover object-center"
								src={backgroundImg.url}
								alt={backgroundImg.alt}
							/>
						) : (
							<div className="h-96 w-96 bg-gray-200" />
						)}
					</div>
					{linkText ? (
						<div className="absolute inset-0 flex items-center">
							<RichText
								tagName="span"
								className="font-notoSans mx-auto text-primary font-black italic text-base uppercase no-underline"
								value={linkText}
								onChange={(v) => setAttributes({ linkText: v })}
								placeholder={__("Link text..", "wp-custom-blocks")}
								style={{ color: linkColor }}
							/>
						</div>
					) : (
						<div className="absolute inset-x-0 bottom-0 bg-white mx-4 mb-4 rounded-lg lg:mx-6 lg:mb-6">
							<div className="px-4 py-3 flex justify-between items-center">
								<div className="flex items-center">
									<div className="bg-primary overflow-hidden rounded-md w-10 h-10 mr-3 p-2">
										{icon && (
											<img
												className="!h-full w-full object-cover object-center"
												src={icon.url}
												alt={icon.alt}
											/>
										)}
									</div>
									<RichText
										tagName="p"
										className="font-notoSans ml-3 text-sm font-semibold italic lg:text-lg"
										value={name}
										onChange={(v) => setAttributes({ name: v })}
										placeholder={__("Sport name..", "wp-custom-blocks")}
										style={{ color: nameColor }}
									/>
								</div>
								<div className="rotate-6" style={{ color: arrowColor }}>
									<svg
										width="9"
										height="13"
										viewBox="0 0 6 8"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z"
											fill="currentColor"
										></path>
									</svg>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
