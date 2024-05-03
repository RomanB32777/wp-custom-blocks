import React, { type FC } from "react";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import type { IInspectorProps } from "@/types";

import type { ISelectedCeil, ITableBlockAttributes } from "../attributes";

interface IToolbarCeilActions extends IInspectorProps<ITableBlockAttributes> {
	selectedCeil: ISelectedCeil;
}

export const ToolbarCeilActions: FC<IToolbarCeilActions> = ({
	selectedCeil: { rowId, colId },
	attributes: { rows },
	setAttributes,
}) => {
	const currentRow = rows[rowId];
	const currentCell = currentRow?.[colId];

	if (!currentCell) {
		return;
	}

	const handleReverseCeil = () => {
		currentCell.isReverse = !currentCell.isReverse;

		setAttributes({
			rows: {
				...rows,
				[rowId]: currentRow,
			},
		});
	};

	return (
		<>
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

			{currentCell.value && currentCell.icon?.id && (
				<ToolbarButton
					label={__("Reverse", "wp-custom-blocks")}
					onClick={handleReverseCeil}
					icon="update"
					placeholder={__("Reverse", "wp-custom-blocks")}
				/>
			)}
		</>
	);
};
