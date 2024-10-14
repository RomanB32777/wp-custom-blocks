import React, { type FC } from "react";
import classNames from "classnames";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";

import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IStepsBlockAttributes } from "./attributes";

const allowedBlock = "wp-custom-blocks/step";

const Edit: FC<BlockEditProps<IStepsBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
		mainColor,
		stepColor,
		titleColor,
		descriptionColor,
		borderColor,
		lineType,
		isOnlyText,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "wp-custom-blocks-steps font-notoSans"),
	});

	const childBlocks =
		select("core/block-editor").getBlocksByClientId(clientId)?.[0]?.innerBlocks;

	useEffect(() => {
		childBlocks?.forEach((block, index) => {
			dispatch("core/block-editor").updateBlockAttributes(block.clientId, {
				isOnlyText,
				step: index + 1,
			});
		});
	}, [childBlocks, isOnlyText]);

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "steps-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		.${uniqueId} .step .number {
			background-color: ${mainColor};
		}

		.${uniqueId} .step .line {
			border: 2px ${lineType} ${mainColor};
		}

		.${uniqueId} .step .number {
			color: ${stepColor};
		}

		.${uniqueId} .step .title {
			color: ${titleColor};
		}

		.${uniqueId} .step .description {
			color: ${descriptionColor};
			border-color: ${borderColor};
		}
	`;

	const handleChangeAttributes = (attrs: Partial<IStepsBlockAttributes>) => {
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
				clientId={clientId}
			/>
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={[allowedBlock]}
					template={[[allowedBlock]]}
				/>
			</div>
		</Fragment>
	);
};

export default Edit;
