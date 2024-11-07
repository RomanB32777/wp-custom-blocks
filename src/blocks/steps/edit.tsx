import React, { type FC } from "react";
import classNames from "classnames";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

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
		description,
		mainColor,
		stepColor,
		titleColor,
		descriptionColor,
		borderColor,
		lineType,
		isOnlyText,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(
			uniqueId,
			"wp-custom-blocks-steps font-inter bg-white rounded-xl py-6 px-4 md:!p-8 md:!rounded-3xl"
		),
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
				<div className="divide-y divide-primary flex flex-col gap-4 md:!gap-6">
					<RichText
						tagName="p"
						className="text-base md:!text-lg"
						value={description}
						onChange={(v) => setAttributes({ description: v })}
						placeholder={__("Description text..", "wp-custom-blocks")}
						style={{ color: descriptionColor }}
					/>

					<InnerBlocks
						allowedBlocks={[allowedBlock]}
						template={[[allowedBlock]]}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
