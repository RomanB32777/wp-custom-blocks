import React, { type FC } from "react";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Fragment, useEffect } from "@wordpress/element";

import { breakpoints } from "@/constants";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IImagesBlockAttributes } from "./attributes";

const allowedBlocks = ["wp-custom-blocks/image"];

const Edit: FC<BlockEditProps<IImagesBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
		itemsTitleColor,
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
		className: uniqueId,
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "images-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "inner-wrapper grid",
		},
		{
			allowedBlocks,
			renderAppender: () => <InnerBlocks.ButtonBlockAppender />,
		}
	);

	/**
	 * Block Styles
	 */
	const mobileStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${mobileSpaceBetween}px;
			grid-template-columns: repeat(${mobileItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .image {
			height: ${mobileHeight}px;
		}

		.${uniqueId} .image .title {
			color: ${itemsTitleColor};
		}
	`;

	const tabletStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${tabletSpaceBetween}px;
			grid-template-columns: repeat(${tabletItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .image {
			height: ${tabletHeight}px;
		}
	`;

	const laptopStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${laptopSpaceBetween}px;
			grid-template-columns: repeat(${laptopItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .image {
			height: ${laptopHeight}px;
		}
	`;

	const desktopStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${desktopSpaceBetween}px;
			grid-template-columns: repeat(${desktopItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .image {
			height: ${desktopHeight}px;
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
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
				<div {...innerBlocksProps} />
			</div>
		</Fragment>
	);
};

export default Edit;
