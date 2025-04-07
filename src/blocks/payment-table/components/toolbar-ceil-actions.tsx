import React, { type FC } from "react";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import type { IInspectorProps } from "@/types";

import type {
	IPaymentTableBlockAttributes,
	ISelectedCeil,
} from "../attributes";

interface IToolbarCeilActions
	extends IInspectorProps<IPaymentTableBlockAttributes> {
	selectedCeil: ISelectedCeil;
}

export const ToolbarCeilActions: FC<IToolbarCeilActions> = ({
	selectedCeil: { rowId, colId, colIndex },
	attributes: { rows },
	setAttributes,
}) => {
	const currentRow = rows[rowId];
	const currentCell = currentRow?.[colId];

	if (!currentCell || colIndex > 0) {
		return;
	}

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
								icon="format-image"
								label={__("Edit Icon", "wp-custom-blocks")}
								placeholder={__("Edit Icon", "wp-custom-blocks")}
								onClick={open}
							/>
						);
					}}
				/>
			</MediaUploadCheck>
		</>
	);
};
