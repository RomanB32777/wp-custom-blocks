import React, { type FC } from "react";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Fragment, useEffect } from "@wordpress/element";

import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { ISocialsBlockAttributes } from "./attributes";

const allowedBlock = "wp-custom-blocks/social-network";

const Edit: FC<BlockEditProps<ISocialsBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
		itemsColor,
		itemsSize,
		itemsPadding,
		spaceBetween,
	} = attributes;

	const blockProps = useBlockProps({
		className: uniqueId,
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "socials-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "flex flex-wrap items-center",
			style: {
				gap: spaceBetween,
			},
		},
		{
			allowedBlocks: [allowedBlock],
			template: [[allowedBlock]],
			renderAppender: () => <InnerBlocks.ButtonBlockAppender />,
		}
	);

	/**
	 * Block Styles
	 */
	const blockStyleCss = `
		.${uniqueId} .social-network {
			background-color: ${itemsColor};
			padding: ${itemsPadding}px;
			width: ${itemsSize}px;
			height: ${itemsSize}px;
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
