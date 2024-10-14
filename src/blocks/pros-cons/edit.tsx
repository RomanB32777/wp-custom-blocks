import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Button, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment, useEffect, useRef } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { hexToRgb } from "@/utils/hex-to-rgb";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type {
	IProsConsBlockAttributes,
	IProsConsItemAttributes,
	TProsCons,
} from "./attributes";
import { ProsConsItem } from "./components";

const Edit: FC<BlockEditProps<IProsConsBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
		title,
		titleColor,
		pros,
		cons,
		contentColor,
		prosColor,
		consColor,
		prosIcon,
		consIcon,
	} = attributes;

	const uniqKeys = useRef(new Set(pros.concat(cons).map(({ id }) => id)));

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "wp-custom-blocks-pros-cons font-notoSans"),
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "proc-cons-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	const handleAddItem = (type: TProsCons) => () => {
		const newKey = String(Math.random());

		if (!uniqKeys.current.has(newKey)) {
			uniqKeys.current.add(newKey);

			const newItem: IProsConsItemAttributes = {
				id: newKey,
				text: "",
				type,
			};

			setAttributes({
				[type]: [...attributes[type], newItem],
			});
		}
	};

	const handleChangeItem = (id: string, type: TProsCons) => (value: string) => {
		const updatedItems = attributes[type].map((item) => {
			if (item.id === id) {
				const updatedItem: IProsConsItemAttributes = { ...item, text: value };

				return updatedItem;
			}

			return item;
		});

		setAttributes({
			[type]: updatedItems,
		});
	};

	const handleDeleteItem = (id: string, type: TProsCons) => () => {
		uniqKeys.current.delete(id);

		setAttributes({
			[type]: attributes[type].filter((item) => item.id !== id),
		});
	};

	/**
	 * Block All Styles
	 */
	const rgbProsColor = hexToRgb(prosColor.slice(1)).join(" ");
	const rgbConsColor = hexToRgb(consColor.slice(1)).join(" ");

	const blockStyleCss = `
		.${uniqueId} .item .content {
			color: ${contentColor};
		}

		.${uniqueId} .item.pros {
			background-color: rgb(${rgbProsColor} / 5%);
			border-color: rgb(${rgbProsColor} / 30%);
		}

		.${uniqueId} .item.pros .icon {
			background-color: ${prosColor};
		}

		.${uniqueId} .item.cons {
			background-color: rgb(${rgbConsColor} / 5%);
			border-color: rgb(${rgbConsColor} / 30%);
		}

		.${uniqueId} .item.cons .icon {
			background-color: ${consColor};
		}
	`;

	const handleChangeAttributes = (attrs: Partial<IProsConsBlockAttributes>) => {
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

			<BlockControls controls={[]}>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									prosIcon: media,
								})
							}
							allowedTypes={["image"]}
							value={prosIcon.id}
							render={({ open }) => {
								return (
									<ToolbarButton
										label={__("Edit Pros Icon", "wp-custom-blocks")}
										placeholder={__("Edit Pros Icon", "wp-custom-blocks")}
										onClick={open}
										icon="yes"
									/>
								);
							}}
						/>
					</MediaUploadCheck>

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									consIcon: media,
								})
							}
							allowedTypes={["image"]}
							value={consIcon.id}
							render={({ open }) => {
								return (
									<ToolbarButton
										label={__("Edit Cons Icon", "wp-custom-blocks")}
										placeholder={__("Edit Cons Icon", "wp-custom-blocks")}
										onClick={open}
										icon="no"
									/>
								);
							}}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<RichText
					tagName="h5"
					className="text-xl font-black italic uppercase mb-6 md:!text-2xl"
					value={title}
					onChange={(v) => setAttributes({ title: v })}
					placeholder={__("Title text..", "wp-custom-blocks")}
					style={{
						color: titleColor,
					}}
				/>

				<div className="flex flex-col gap-x-8 gap-y-4 md:!flex-row">
					<div className="flex flex-1 flex-col gap-4">
						{pros.map(({ id, ...itemData }) => {
							return (
								<ProsConsItem
									key={id}
									icon={prosIcon}
									onChange={handleChangeItem(id, "pros")}
									onDelete={handleDeleteItem(id, "pros")}
									{...itemData}
								/>
							);
						})}
						<Button
							aria-pressed="mixed"
							variant="tertiary"
							label="Add new pros"
							icon="plus"
							onClick={handleAddItem("pros")}
							showTooltip
						/>
					</div>

					<div className="flex flex-1 flex-col gap-4">
						{cons.map(({ id, ...itemData }) => {
							return (
								<ProsConsItem
									key={id}
									icon={consIcon}
									onChange={handleChangeItem(id, "cons")}
									onDelete={handleDeleteItem(id, "cons")}
									{...itemData}
								/>
							);
						})}
						<Button
							aria-pressed="mixed"
							variant="tertiary"
							label="Add new cons"
							icon="plus"
							onClick={handleAddItem("cons")}
							showTooltip
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
