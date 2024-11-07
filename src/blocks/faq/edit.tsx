import React, { type FC } from "react";
import classNames from "classnames";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";

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
		isParentStyles,
		questionColor,
		answerColor,
		arrowColor,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "font-inter"),
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
		.${uniqueId} .question .question-title {
			color: ${questionColor};
		}

		.${uniqueId} .question .question-content {
			color: ${answerColor};
		}

		.${uniqueId} .question .arrow-wrapper {
			color: ${arrowColor};
		}
	`;

	const handleChangeAttributes = (attrs: Partial<IFaqBlockAttributes>) => {
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

			<div {...blockProps}>
				<div className="wp-custom-blocks-questions questions">
					<div {...innerBlocksProps} />
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
