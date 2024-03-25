import React, { type FC } from "react";
import classNames from "classnames";
import { RichText } from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import type { IImageAttributes } from "@/types";

import type { IProsConsItemAttributes } from "../attributes";

interface IProsConsItemSave extends Omit<IProsConsItemAttributes, "id"> {
	icon: IImageAttributes;
}

interface IProsConsItem extends IProsConsItemSave {
	onChange: (v: string) => void;
	onDelete: () => void;
}

export const ProsConsItem: FC<IProsConsItem> = ({
	type,
	text,
	icon,
	onChange,
	onDelete,
}) => {
	return (
		<div
			className={classNames(
				"item flex items-center gap-3 border rounded-lg px-6 py-5 relative",
				type
			)}
		>
			{icon.url && (
				<div className="icon min-w-5 min-h-5 w-5 h-5 p-1 rounded-full overflow-hidden">
					<img
						className="!w-full !h-full"
						src={icon.url}
						alt={icon.alt}
						width={icon.width}
						height={icon.height}
					/>
				</div>
			)}
			<div className="absolute top-2 right-2 z-10">
				<ToolbarButton
					variant="primary"
					label={__("Delete", "wp-custom-blocks")}
					onClick={onDelete}
					icon="trash"
					placeholder={__("Delete", "wp-custom-blocks")}
				/>
			</div>
			<RichText
				tagName="p"
				className="content font-notoSans text-base"
				value={text}
				onChange={onChange}
				placeholder={__("Text..", "wp-custom-blocks")}
			/>
		</div>
	);
};

export const ProsConsItemSave: FC<IProsConsItemSave> = ({
	type,
	text,
	icon,
}) => {
	return (
		<div
			className={classNames(
				"item flex items-center gap-3 border rounded-lg px-6 py-5 relative",
				type
			)}
		>
			{icon.url && (
				<div className="icon min-w-5 min-h-5 w-5 h-5 p-1 rounded-full overflow-hidden">
					<img
						className="!w-full !h-full"
						src={icon.url}
						alt={icon.alt}
						width={icon.width}
						height={icon.height}
					/>
				</div>
			)}

			<RichText.Content
				tagName="p"
				className="content font-notoSans text-base"
				value={text}
			/>
		</div>
	);
};
