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

import type { IStepElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IStepElementAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const { uniqueId, step, photo, icon, title, description, isOnlyText } =
		attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "step relative pb-7 pl-10 md:!pl-16"),
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "step-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	return (
		<Fragment>
			<BlockControls controls={[]}>
				<ToolbarGroup>
					{photo.id && (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										photo: media,
									})
								}
								allowedTypes={["image"]}
								value={photo.id}
								render={({ open }) => {
									return (
										<ToolbarButton
											label={__("Edit Logo", "wp-custom-blocks")}
											placeholder={__("Edit Logo", "wp-custom-blocks")}
											onClick={open}
											icon="format-image"
										/>
									);
								}}
							/>
						</MediaUploadCheck>
					)}

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									icon: media,
								})
							}
							allowedTypes={["image"]}
							value={icon.id}
							render={({ open }) => {
								return (
									<ToolbarButton
										label={__("Edit Icon", "wp-custom-blocks")}
										placeholder={__("Edit Icon", "wp-custom-blocks")}
										onClick={open}
										icon="star-empty"
									/>
								);
							}}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div className="line absolute top-0 h-full"></div>
				<span className="number absolute text-base top-0 left-0 inline-block w-8 h-8 rounded-full p-1 font-semibold text-center">
					{icon.url ? (
						<img
							src={icon.url}
							alt={icon.alt}
							width={icon.width}
							height={icon.height}
						/>
					) : (
						step
					)}
				</span>
				<RichText
					tagName="h5"
					className="title font-bold text-base md:!text-xl"
					value={title}
					onChange={(v) => setAttributes({ title: v })}
					placeholder={__("step text..", "wp-custom-blocks")}
				/>
				<RichText
					tagName="p"
					className={classNames("description py-6 text-sm md:!text-base", {
						"border rounded-lg p-4": isOnlyText,
					})}
					value={description}
					onChange={(v) => setAttributes({ description: v })}
					placeholder={__("description..", "wp-custom-blocks")}
				/>
				{!isOnlyText && (
					<div>
						{photo.url ? (
							<img
								className="max-w-48 md:!max-w-96"
								src={photo.url}
								alt={photo.alt || title}
								width={photo.width}
								height={photo.height}
							/>
						) : (
							<MediaPlaceholder
								onSelect={(media) =>
									setAttributes({
										photo: media,
									})
								}
								allowedTypes={["image"]}
								multiple={false}
								labels={{
									title: __("Logo", "wp-custom-blocks"),
									instructions: __(
										"Upload your company logo",
										"wp-custom-blocks"
									),
								}}
								icon="format-image"
								onHTMLDrop={undefined}
							/>
						)}
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default Edit;
