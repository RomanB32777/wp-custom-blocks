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
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { templateRounded, templateSliderItemName } from "../attributes";
import Inspector from "./inspector";
import type { IAdvantageElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IAdvantageElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		uniqueId,
		title,
		titleColor,
		backgroundColor,
		image,
		horizontalPosition,
		verticalPosition,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(templateSliderItemName, uniqueId, "w-full h-full"),
		style: { margin: 0 },
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "advantage-" + clientId.slice(0, 8),
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

			<div {...blockProps}>
				<div
					className={classNames(
						"relative w-full h-full overflow-hidden p-6",
						templateRounded
					)}
					style={{ backgroundColor }}
				>
					{image.url && (
						<div
							className="absolute w-full overflow-hidden rounded-xl h-full"
							style={{
								right: horizontalPosition,
								bottom: verticalPosition,
							}}
						>
							<img
								className="!h-full !w-auto !max-w-fit object-cover object-center"
								src={image.url}
								alt={image.alt}
								width={image.width}
								height={image.height}
							/>
						</div>
					)}

					<RichText
						tagName="p"
						className="relative font-medium text-lg"
						value={title}
						onChange={(v) => setAttributes({ title: v })}
						placeholder={__("Title..", "wp-custom-blocks")}
						style={{ color: titleColor }}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
