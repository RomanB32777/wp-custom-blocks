import React, { type FC } from "react";
import {
	InnerBlocks,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
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
		title,
		titleColor,
		isParentStyles,
		questionColor,
		answerColor,
		activeColor,
		borderColor,
		arrowBackgroundColor,
		arrowColor,
	} = attributes;

	const blockProps = useBlockProps({
		className: uniqueId,
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
			renderAppender: () => <InnerBlocks.ButtonBlockAppender />,
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

			<div {...blockProps}>
				<RichText
					tagName="h2"
					className="font-roboto text-2xl font-black mb-4 md:text-3xl"
					value={title}
					onChange={(v) => setAttributes({ title: v })}
					placeholder={__("Faq title..", "wp-custom-blocks")}
					style={{ color: titleColor }}
				/>

				<div className="wp-custom-blocks-questions questions">
					<div {...innerBlocksProps} />
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
