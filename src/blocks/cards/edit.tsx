import React, { type FC } from "react";
import classNames from "classnames";
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

import { breakpoints } from "@/constants";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { ICardsBlockAttributes } from "./attributes";
import type { ICardElementAttributes } from "./card/attributes";

const allowedBlock = "wp-custom-blocks/card";

const Edit: FC<BlockEditProps<ICardsBlockAttributes>> = ({
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
		itemsTitleColor,
		itemsButtonTextColor,
		itemsButtonColor,
		mobileItemsPerView,
		tabletItemsPerView,
		laptopItemsPerView,
		desktopItemsPerView,
		mobileSpaceBetween,
		tabletSpaceBetween,
		laptopSpaceBetween,
		desktopSpaceBetween,
		mobileHeight,
		tabletHeight,
		laptopHeight,
		desktopHeight,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "wp-custom-blocks-cards font-roboto"),
	});

	const childBlocks =
		select("core/block-editor").getBlocksByClientId(clientId)?.[0]?.innerBlocks;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "cards-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "inner-wrapper !grid",
		},
		{
			allowedBlocks: [allowedBlock],
			template: [[allowedBlock]],
			renderAppender: () => <InnerBlocks.ButtonBlockAppender />,
		}
	);

	useEffect(() => {
		childBlocks?.forEach((block) => {
			const childAttributes: Partial<ICardElementAttributes> = {
				isParentStyles,
			};

			dispatch("core/block-editor").updateBlockAttributes(
				block.clientId,
				childAttributes
			);
		});
	}, [childBlocks, isParentStyles]);

	/**
	 * Block Styles
	 */
	const itemElementStyles = `
		.${uniqueId} .item-card .title {
			color: ${itemsTitleColor};
		}

		.${uniqueId} .item-card button {
			background-color: ${itemsButtonColor};
		}

		.${uniqueId} .item-card button span {
			color: ${itemsButtonTextColor};
		}
	`;

	const mobileStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${mobileSpaceBetween}px;
			grid-template-columns: repeat(${mobileItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .item-card {
			height: ${mobileHeight}px;
		}
	`;

	const tabletStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${tabletSpaceBetween}px;
			grid-template-columns: repeat(${tabletItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .item-card {
			height: ${tabletHeight}px;
		}
	`;

	const laptopStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${laptopSpaceBetween}px;
			grid-template-columns: repeat(${laptopItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .item-card {
			height: ${laptopHeight}px;
		}
	`;

	const desktopStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${desktopSpaceBetween}px;
			grid-template-columns: repeat(${desktopItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .item-card {
			height: ${desktopHeight}px;
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${itemElementStyles}

		${mobileStyles}

		@media (min-width: ${breakpoints.sm}px) {
			${tabletStyles}
		}

		@media (min-width: ${breakpoints.md}px) {
			${laptopStyles}
		}

		@media (min-width: ${breakpoints.xl}px) {
			${desktopStyles}
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
					className="text-2xl font-black mb-4 md:text-3xl"
					value={title}
					onChange={(v) => setAttributes({ title: v })}
					placeholder={__("Cards title..", "wp-custom-blocks")}
					style={{ color: titleColor }}
				/>
				<div {...innerBlocksProps} />
			</div>
		</Fragment>
	);
};

export default Edit;
