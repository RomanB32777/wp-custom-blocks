import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { hexToRgb } from "@/utils/hex-to-rgb";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IFaqBlockAttributes } from "./attributes";
import type { IFaqItemElementAttributes } from "./faq-item/attributes";

const allowedBlock = "wp-custom-blocks/faq-item";

const Edit: FC<BlockEditProps<IFaqBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
		backgroundColor,
		backgroundImage,
		title,
		titleColor,
		description,
		descriptionColor,
		isParentStyles,
		questionColor,
		answerColor,
		activeColor,
		borderColor,
		arrowBackgroundColor,
		arrowColor,
		activeArrowColor,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "font-notoSans"),
		style: {
			maxWidth: "none",
			margin: 0,
		},
	});

	const childBlocks =
		select("core/block-editor").getBlocksByClientId(clientId)?.[0]?.innerBlocks;

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "flex flex-col gap-y-3",
		},
		{
			allowedBlocks: [allowedBlock],
			template: [[allowedBlock]],
		}
	);

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "faq-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	useEffect(() => {
		childBlocks?.forEach((block, index) => {
			const childAttributes: Partial<IFaqItemElementAttributes> = {
				index,
				isParentStyles,
			};

			dispatch("core/block-editor").updateBlockAttributes(
				block.clientId,
				childAttributes
			);
		});
	}, [childBlocks, isParentStyles]);

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		.${uniqueId} .question {
			border-color: ${borderColor};
		}

		.${uniqueId} .question.active,
		.${uniqueId} .question:hover {
			background-color: rgb(${hexToRgb(activeColor.slice(1)).join(" ")} / 10%);
		}

		.${uniqueId} .question .question-title {
			color: ${questionColor};
		}

		.${uniqueId} .question .question-content {
			color: ${answerColor};
		}

		.${uniqueId} .question .arrow-wrapper {
			color: ${arrowColor};
		}

		.${uniqueId} .question .more-arrow {
			background-color: ${arrowBackgroundColor};
		}

		.${uniqueId} .question .more-arrow.active {
			background-color: ${activeColor};
		}

		.${uniqueId} .question .more-arrow.active {
			color: ${activeArrowColor};
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

			<div {...blockProps}>
				<div
					className="relative isolate overflow-hidden pt-36 pb-0 sm:py-24 lg:py-32"
					style={{ backgroundColor }}
				>
					{backgroundImage.url && (
						<img
							className="absolute inset-0 -z-10 h-36 w-full object-cover sm:object-center sm:!h-full"
							src={backgroundImage.url}
							alt={backgroundImage.alt}
							width={backgroundImage.width}
							height={backgroundImage.height}
						/>
					)}

					<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div
							className="rounded-none p-4 sm:p-10 sm:rounded-lg"
							style={{ backgroundColor }}
						>
							<RichText
								tagName="h5"
								className="text-xl font-black italic uppercase mb-6 md:!text-2xl"
								value={title}
								onChange={(v) => setAttributes({ title: v })}
								placeholder={__("Faq title..", "wp-landing-blocks")}
								style={{ color: titleColor }}
							/>
							<RichText
								tagName="p"
								className="text-sm font-normal mb-6 md:mb-11"
								value={description}
								onChange={(v) => setAttributes({ description: v })}
								placeholder={__("Faq description..", "wp-landing-blocks")}
								style={{ color: descriptionColor }}
							/>

							<div className="wp-custom-blocks-questions questions pb-10 border-b border-primary-light sm:pb-0 sm:border-none">
								<div {...innerBlocksProps} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
