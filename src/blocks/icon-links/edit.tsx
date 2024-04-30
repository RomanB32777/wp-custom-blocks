import React, { type FC } from "react";
import classNames from "classnames";
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
import type { IIconLinksBlockAttributes } from "./attributes";

const allowedBlock = "wp-custom-blocks/icon-link";

const Edit: FC<BlockEditProps<IIconLinksBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
		backgroundColor,
		paddingX,
		paddingY,
		mobilePaddingX,
		mobilePaddingY,
		borderRadius,
		itemsColor,
		itemsTitleColor,
		itemsWidth,
		itemsHeight,
		itemsPaddingX,
		itemsPaddingY,
		itemsBorderWidth,
		itemsBorderRadius,
		itemsBorderColor,
		spaceBetween,
		isFillItemsWidth,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "font-inter"),
		style: {
			borderRadius,
			backgroundColor,
		},
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "icon-links-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "flex flex-wrap items-stretch",
			style: {
				gap: spaceBetween,
			},
		},
		{
			allowedBlocks: [allowedBlock],
			template: [[allowedBlock]],
			renderAppender: () => <InnerBlocks.DefaultBlockAppender />,
		}
	);

	/**
	 * Block Styles
	 */
	const mobileStyles = `
		.${uniqueId} {
			padding: ${mobilePaddingY}px ${mobilePaddingX}px;
		}

		.${uniqueId} .icon-link {
			background-color: ${itemsColor};
			color: ${itemsTitleColor} !important;
			padding: ${itemsPaddingY}px ${itemsPaddingX}px;
			border-width: ${itemsBorderWidth}px;
			border-radius: ${itemsBorderRadius}px;
			border-color: ${itemsBorderColor};
			flex: ${isFillItemsWidth ? "1 1 0%" : "none"};
		}

		.${uniqueId} .icon-link .icon-image {
			width: ${itemsWidth}px;
			height: ${itemsHeight}px;
		}
	`;

	const tabletStyles = `
		.${uniqueId} {
			padding: ${paddingY}px ${paddingX}px;
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
