import React, { type FC } from "react";
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

import { breakpoints } from "@/constants";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IBorderBlockAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IBorderBlockAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		uniqueId,
		blockStyle,
		backgroundColor,
		borderColor,
		borderRadius,
		borderWidth,
		blockHeight,
		text,
		textColor,
		mobileTextFontSize,
		laptopTextFontSize,
		bigValue,
		bigValueColor,
		mobileBigValueFontSize,
		laptopBigValueFontSize,
		icon,
		mobileIconWidth,
		laptopIconWidth,
		horizontalPosition,
		verticalPosition,
	} = attributes;

	const blockProps = useBlockProps({
		className: uniqueId,
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "border-block-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	/**
	 * Block Styles
	 */

	const mobileStyles = `
		.${uniqueId} .big-value {
			font-size: ${mobileBigValueFontSize}px;
		}

		.${uniqueId} .icon {
			width: ${mobileIconWidth}px;
		}

		.${uniqueId} .text-content {
			font-size: ${mobileTextFontSize}px;
		}
	`;

	const laptopStyles = `
		.${uniqueId} .big-value {
			font-size: ${laptopBigValueFontSize}px;
		}

		.${uniqueId} .icon {
			width: ${laptopIconWidth}px;
		}

		.${uniqueId} .text-content {
			font-size: ${laptopTextFontSize}px;
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${mobileStyles}

		@media (min-width: ${breakpoints.lg}px) {
			${laptopStyles}
		}
	`;

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [blockStyle, blockStyleCss, setAttributes]);

	return (
		<Fragment>
			<style>{`${minifyCssStrings(blockStyleCss)}`}</style>

			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<BlockControls controls={undefined}>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									icon: media,
								});
							}}
							allowedTypes={["image"]}
							value={icon.id}
							render={({ open }) => {
								return (
									<ToolbarButton
										label={__("Edit icon", "wp-custom-blocks")}
										onClick={open}
										icon="format-image"
										placeholder={__("Edit icon", "wp-custom-blocks")}
									/>
								);
							}}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div
					className="relative overflow-hidden"
					style={{ height: blockHeight }}
				>
					<div
						className="relative p-4 h-full"
						style={{
							backgroundColor,
							borderColor,
							borderRadius,
							borderWidth,
						}}
					>
						<RichText
							tagName="p"
							className="text-content font-bold"
							value={text}
							onChange={(v) => setAttributes({ text: v })}
							placeholder={__("Block text..", "wp-custom-blocks")}
							style={{
								color: textColor,
							}}
						/>
					</div>

					{icon.url ? (
						<div
							className="absolute"
							style={{
								right: horizontalPosition,
								bottom: verticalPosition,
							}}
						>
							<span className="sr-only">Icon</span>
							<img
								className="icon"
								src={icon.url}
								alt={icon.alt}
								width={icon.width}
								height={icon.height}
							/>
						</div>
					) : (
						<RichText
							tagName="span"
							className="big-value stroke-number absolute font-black tracking-[-5px] !leading-[5rem]"
							value={bigValue}
							onChange={(v) => setAttributes({ bigValue: v })}
							placeholder={__("Big value text..", "wp-custom-blocks")}
							style={{
								color: bigValueColor,
								right: horizontalPosition,
								bottom: verticalPosition,
							}}
						/>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
