import React, { useCallback, type FC } from "react";
import classNames from "classnames";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import type { IGetBlockStyleProps } from "@/types";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IStepsBlockAttributes } from "./attributes";

const allowedBlock = "wp-custom-blocks/step";

const Edit: FC<BlockEditProps<IStepsBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const { uniqueId, blockStyle, description, descriptionColor, isOnlyText } =
		attributes;

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

	/**
	 * Block All Styles
	 */
	const getBlockStyleCss = useCallback(
		(getBlockStyleProps?: IGetBlockStyleProps<IStepsBlockAttributes>) => {
			const { blockId = uniqueId, blockAttributes = attributes } =
				getBlockStyleProps || {};

			return `
			.${blockId} .step .number {
				background-color: ${blockAttributes.mainColor};
			}

			.${blockId} .step .line {
				border: 2px ${blockAttributes.lineType} ${blockAttributes.mainColor};
			}

			.${blockId} .step .number {
				color: ${blockAttributes.stepColor};
			}

			.${blockId} .step .title {
				color: ${blockAttributes.titleColor};
			}

			.${blockId} .step .description {
				color: ${blockAttributes.descriptionColor};
				border-color: ${blockAttributes.borderColor};
			}
		`;
		},
		[uniqueId, attributes]
	);

	const handleChangeAttributes = (attrs: Partial<IStepsBlockAttributes>) => {
		const currBlockStyleCss = getBlockStyleCss({
			blockAttributes: {
				...attributes,
				...attrs,
			},
		});

		const newStyleCss = minifyCssStrings(currBlockStyleCss);

		if (blockStyle !== newStyleCss) {
			attrs.blockStyle = newStyleCss;
		}

		setAttributes(attrs);
	};

	useEffect(() => {
		if (!uniqueId) {
			const setUniqueId = "steps-" + clientId.slice(0, 8);

			setAttributes({
				uniqueId: setUniqueId,
				blockStyle: minifyCssStrings(
					getBlockStyleCss({ blockId: setUniqueId })
				),
			});
		}
	}, [clientId, uniqueId, getBlockStyleCss, setAttributes]);

	const blockStyleCss = getBlockStyleCss();

	return (
		<Fragment>
			<style>{blockStyleCss}</style>

			<Inspector
				attributes={attributes}
				setAttributes={handleChangeAttributes}
				clientId={clientId}
			/>

			<div {...blockProps}>
				<div className="flex flex-col gap-4 divide-y divide-primary md:!gap-6">
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
