import React, { type FC } from "react";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import type { IInspectorProps } from "@/types";

import type { ISelectedCeil, ITableBlockAttributes } from "../attributes";

interface IUploadTableCeilIcon extends IInspectorProps<ITableBlockAttributes> {
	selectedCeil: ISelectedCeil;
}

export const UploadTableCeilIcon: FC<IUploadTableCeilIcon> = ({
	selectedCeil: { rowId, colId },
	attributes: { rows },
	setAttributes,
}) => {
	const currentRow = rows[rowId];
	const currentCell = currentRow?.[colId];

	if (!currentCell) {
		return;
	}

	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={(media) => {
					currentCell.icon = media;

					setAttributes({
						rows: {
							...rows,
							[rowId]: currentRow,
						},
					});
				}}
				allowedTypes={["image"]}
				value={currentCell.icon?.id}
				render={({ open }) => {
					return (
						<ToolbarButton
							label={__("Edit Icon", "wp-custom-blocks")}
							onClick={open}
							icon="format-image"
							placeholder={__("Edit Icon", "wp-custom-blocks")}
						/>
					);
				}}
			/>
		</MediaUploadCheck>
	);
};
