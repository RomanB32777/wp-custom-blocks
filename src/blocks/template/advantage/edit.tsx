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
		modificatorClass,
		isSlideItem,
		title,
		titleColor,
		backgroundColor,
		image,
	} = attributes;

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
				uniqueId: "advantage-" + clientId.slice(0, 8),
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

			<div {...blockProps}>
				<div
					className={classNames(
						"w-full h-full overflow-hidden",
						templateRounded
					)}
					style={{ backgroundColor }}
				>
					<div className="bg-white overflow-hidden rounded-full w-28 h-28 mx-auto mt-10 mb-6 flex items-center justify-center">
						{image.url ? (
							<img
								className="w-8"
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
					<RichText
						tagName="p"
						className="font-bold text-base text-center uppercase px-6"
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
