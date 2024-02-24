import React, { type FC } from "react";
import classNames from "classnames";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { store, type User } from "@wordpress/core-data";
import { select, useSelect } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IAuthorBlockAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IAuthorBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
		author,
		description,
		backgroundColor,
		avatarBorderColor,
		descriptionColor,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(
			uniqueId,
			"wp-custom-blocks-author flex items-center p-4 rounded-lg md:!p-7"
		),
	});

	const authorId = select("core/editor").getCurrentPostAttribute("author");

	const authorInfo = useSelect(
		(selectStore) =>
			selectStore(store).getEntityRecord<User | undefined>(
				"root",
				"user",
				authorId
			),
		[authorId]
	);

	useEffect(() => {
		if (authorInfo) {
			setAttributes({ author: authorInfo });
		}
	}, [authorInfo, setAttributes]);

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "banner-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		.${uniqueId} {
			background-color: ${backgroundColor};
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
				<div className="avatar relative">
					<div
						className="border1 absolute opacity-30 rounded-full"
						style={{ borderColor: avatarBorderColor }}
					></div>
					<div
						className="border2 absolute opacity-20 rounded-full"
						style={{ borderColor: avatarBorderColor }}
					></div>
					<img
						src={author.avatar_urls?.["48"]}
						alt={author.name}
						className="rounded-full"
						style={{
							borderColor: avatarBorderColor,
						}}
					/>
				</div>
				<RichText
					tagName="p"
					className="ml-5 my-0 mr-0 p-0 text-sm md:!ml-6 md:!text-base"
					value={description}
					onChange={(v) => setAttributes({ description: v })}
					placeholder={__("Description..", "wp-custom-blocks")}
					style={{ color: descriptionColor }}
				/>
			</div>
		</Fragment>
	);
};

export default Edit;