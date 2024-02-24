import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	InnerBlocks,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Popover, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { dispatch, select } from "@wordpress/data";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { breakpoints } from "@/constants";
import { LinkControl } from "@/controls";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IBonusesBlockAttributes } from "./attributes";
import type { IBonusElementAttributes } from "./bonus/attributes";

const allowedBlock = "wp-custom-blocks/bonus";

const Edit: FC<BlockEditProps<IBonusesBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
		buttonText,
		buttonTextColor,
		buttonColor,
		link,
		isParentStyles,
		itemsBackgroundColor,
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

	const [linkPanel, showLinkPanel] = useState(false);

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "wp-custom-blocks-bonuses"),
	});

	const childBlocks =
		select("core/block-editor").getBlocksByClientId(clientId)?.[0]?.innerBlocks;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "bonuses-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	useEffect(() => {
		childBlocks?.forEach((block) => {
			const childAttributes: Partial<IBonusElementAttributes> = {
				isParentStyles,
			};

			dispatch("core/block-editor").updateBlockAttributes(
				block.clientId,
				childAttributes
			);
		});
	}, [childBlocks, isParentStyles]);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "inner-wrapper grid",
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
	const itemElementStyles = `
		.${uniqueId} .bonus {
			background-color: ${itemsBackgroundColor};
		}

		.${uniqueId} .bonus .title {
			color: ${itemsTitleColor};
		}

		.${uniqueId} .bonus .bonus-button {
			background-color: ${itemsButtonColor};
		}

		.${uniqueId} .bonus .bonus-button .button-text {
			color: ${itemsButtonTextColor};
		}
	`;

	const mobileStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${mobileSpaceBetween}px;
			grid-template-columns: repeat(${mobileItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .bonus {
			height: ${mobileHeight}px;
		}

		.${uniqueId} .link-button {
			background-color: ${buttonColor};
		}
	`;

	const tabletStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${tabletSpaceBetween}px;
			grid-template-columns: repeat(${tabletItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .bonus {
			height: ${tabletHeight}px;
		}
	`;

	const laptopStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${laptopSpaceBetween}px;
			grid-template-columns: repeat(${laptopItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .bonus {
			height: ${laptopHeight}px;
		}
	`;

	const desktopStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${desktopSpaceBetween}px;
			grid-template-columns: repeat(${desktopItemsPerView}, minmax(0, 1fr));
		}

		.${uniqueId} .bonus {
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

			<BlockControls controls={undefined}>
				<Fragment>
					<ToolbarGroup>
						<ToolbarButton
							label={__("Add Link", "wp-custom-blocks")}
							onClick={() => showLinkPanel(true)}
							icon="admin-links"
							placeholder={__("Add Link", "wp-custom-blocks")}
						/>
					</ToolbarGroup>
					{linkPanel && (
						<Popover
							position="bottom right"
							onFocusOutside={() => showLinkPanel(false)}
							offset={5}
						>
							<LinkControl
								link={link}
								linkName="link"
								label={__("Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
						</Popover>
					)}
				</Fragment>
			</BlockControls>

			<div {...blockProps}>
				<div {...innerBlocksProps} />

				<div className="mt-6 text-center">
					<button
						className="link-button relative rounded-lg py-5 px-10"
						type="button"
						aria-expanded="false"
					>
						<RichText
							tagName="span"
							className="font-roboto text-4xl font-black mx-auto"
							value={buttonText}
							onChange={(v) => setAttributes({ buttonText: v })}
							placeholder={__("Button text..", "wp-custom-blocks")}
							style={{ color: buttonTextColor }}
						/>
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
