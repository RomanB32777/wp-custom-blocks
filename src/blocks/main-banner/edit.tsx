import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import Inspector from "./inspector";
import type { IMainBannerBlockAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IMainBannerBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const { uniqueId, backgroundColor, backgroundImage, logoImage } = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "wp-custom-blocks-main-banner"),
		style: {
			maxWidth: "none",
			marginRight: 0,
			marginLeft: 0,
		},
	});

	const innerBlocksProps = useInnerBlocksProps({
		className: "flex-1 [&>*]:my-7",
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "main-banner-" + clientId.slice(0, 8),
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
									backgroundImage: media,
								})
							}
							allowedTypes={["image"]}
							value={backgroundImage.id}
							render={({ open }) => {
								return (
									<ToolbarButton
										label={__("Edit background image", "wp-custom-blocks")}
										icon="cover-image"
										placeholder={__(
											"Edit background image",
											"wp-custom-blocks"
										)}
										onClick={open}
									/>
								);
							}}
						/>
					</MediaUploadCheck>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									logoImage: media,
								})
							}
							allowedTypes={["image"]}
							value={logoImage.id}
							render={({ open }) => {
								return (
									<ToolbarButton
										label={__("Edit logo image", "wp-custom-blocks")}
										icon="format-image"
										placeholder={__("Edit logo image", "wp-custom-blocks")}
										onClick={open}
									/>
								);
							}}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div className="relative">
					<div
						className="relative isolate py-12 lg:!py-16"
						style={{ backgroundColor }}
					>
						{backgroundImage.url && (
							<img
								src={backgroundImage.url}
								alt={backgroundImage.alt}
								width={backgroundImage.width}
								height={backgroundImage.height}
								className="absolute inset-0 -z-10 !h-full w-full object-cover md:object-center"
							/>
						)}

						<div className="relative mx-auto flex max-w-7xl gap-x-10 px-4 sm:px-6 lg:px-8">
							<div {...innerBlocksProps} />

							<div className="hidden flex-1 lg:!block">
								<div className="flex h-full items-center lg:!justify-center">
									<img
										src={logoImage.url}
										alt={logoImage.alt}
										width={logoImage.width}
										height={logoImage.height}
										className="h-full max-h-96 w-full object-contain object-center lg:!max-w-none"
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
