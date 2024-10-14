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
import {
	CheckboxControl,
	DropdownMenu,
	ToolbarButton,
	ToolbarGroup,
} from "@wordpress/components";
import type { DropdownOption } from "@wordpress/components/build-types/dropdown-menu/types";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import type { TCellHTMLAttributes } from "@/types";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { IAvailableTableBlockAttributes } from "./attributes";

interface ISelectedCeil {
	colId: string | undefined;
	rowId: string | undefined;
}

const Edit: FC<BlockEditProps<IAvailableTableBlockAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		rows,
		columns,
		uniqueId,
		blockStyle,
		backgroundOddColor,
		backgroundEvenColor,
		columnColor,
		rowColor,
		borderRadius,
		activeIcon,
		inactiveIcon,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "font-roboto"),
	});

	const [uniqRowKeys, setUniqRowKeys] = useState(
		() => new Set(Object.keys(rows))
	);
	const [uniqColKeys, setUniqColKeys] = useState(
		() => new Set(Object.keys(columns))
	);
	const [selectedCeil, setSelectedCeil] = useState<ISelectedCeil | undefined>();

	const handleAddRow = () => {
		const newKey = String(Math.random());

		if (!uniqRowKeys.has(newKey)) {
			setUniqRowKeys(uniqRowKeys.add(newKey));

			setAttributes({
				rows: {
					...rows,
					[newKey]: Object.fromEntries(
						Object.keys(columns).map((columnKey, index) => [
							columnKey,
							index === 0 ? "" : false,
						])
					),
				},
			});
		}
	};

	const handleDeleteRow = () => {
		if (!selectedCeil?.rowId) {
			return;
		}

		setUniqRowKeys((keys) => {
			keys.delete(selectedCeil.rowId);

			return keys;
		});

		setAttributes({
			rows: Object.fromEntries(
				Object.entries(rows).filter(([rowKey]) => rowKey !== selectedCeil.rowId)
			),
		});

		setSelectedCeil(undefined);
	};

	const handleAddColumn = () => {
		const newKey = String(Math.random());

		if (!uniqColKeys.has(newKey)) {
			setUniqColKeys(uniqColKeys.add(newKey));

			const updatedRows = Object.entries(rows).map(([key, values]) => [
				key,
				{
					...values,
					[newKey]: uniqColKeys.size === 1 ? "" : false,
				},
			]);

			setAttributes({ rows: Object.fromEntries(updatedRows) });
			setAttributes({ columns: { ...columns, [newKey]: "" } });
		}
	};

	const handleDeleteCol = () => {
		if (!selectedCeil?.colId) {
			return;
		}

		setUniqColKeys((keys) => {
			keys.delete(selectedCeil.colId);

			return keys;
		});

		setAttributes({
			columns: Object.fromEntries(
				Object.entries(columns).filter(
					([colKey]) => colKey !== selectedCeil.colId
				)
			),
			rows: Object.fromEntries(
				Object.entries(rows).map(([rowKey, values]) => [
					rowKey,
					Object.fromEntries(
						Object.entries(values).filter(
							([colKey]) => colKey !== selectedCeil.colId
						)
					),
				])
			),
		});

		setSelectedCeil(undefined);
	};

	const dropdownOptions: DropdownOption[] = [
		{
			icon: "table-row-after",
			title: __("Insert row", "wp-custom-blocks"),
			onClick: handleAddRow,
		},
		{
			icon: "table-row-delete",
			title: __("Delete row", "wp-custom-blocks"),
			isDisabled: !selectedCeil?.rowId,
			onClick: handleDeleteRow,
		},
		{
			icon: "table-col-after",
			title: __("Insert column", "wp-custom-blocks"),
			onClick: handleAddColumn,
		},
		{
			icon: "table-col-delete",
			title: __("Delete column", "wp-custom-blocks"),
			isDisabled: !selectedCeil?.colId,
			onClick: handleDeleteCol,
		},
	];

	/**
	 * Block Styles
	 */
	const blockStyleCss = `
		.${uniqueId} tbody tr:nth-child(odd) > * {
			background-color: ${backgroundOddColor};
		}

		.${uniqueId} tbody tr:nth-child(even) > * {
			background-color: ${backgroundEvenColor};
		}
	`;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "available-table-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	const handleChangeAttributes = (
		attrs: Partial<IAvailableTableBlockAttributes>
	) => {
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
									activeIcon: media,
								})
							}
							allowedTypes={["image"]}
							value={activeIcon.id}
							render={({ open }) => (
								<ToolbarButton
									label={__("Edit Active Icon", "wp-custom-blocks")}
									placeholder={__("Edit Active Icon", "wp-custom-blocks")}
									onClick={open}
									icon="yes"
								/>
							)}
						/>
					</MediaUploadCheck>

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									inactiveIcon: media,
								})
							}
							allowedTypes={["image"]}
							value={inactiveIcon.id}
							render={({ open }) => (
								<ToolbarButton
									label={__("Edit Inactive Icon", "wp-custom-blocks")}
									placeholder={__("Edit Inactive Icon", "wp-custom-blocks")}
									onClick={open}
									icon="no"
								/>
							)}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			<BlockControls controls={undefined}>
				<ToolbarGroup>
					<DropdownMenu
						controls={dropdownOptions}
						icon="grid-view"
						label="Select a direction."
					/>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div className="relative overflow-x-auto">
					<table className="available-table w-full text-base">
						<thead className="text-base font-medium">
							<tr>
								{Object.entries(columns).map(([column, value], index) => (
									<th
										key={column}
										className={classNames(
											"p-2",
											index > 0 ? "text-center" : "text-left"
										)}
										scope="col"
										onClick={() =>
											setSelectedCeil({
												colId: index > 0 ? column : undefined,
												rowId: undefined,
											})
										}
									>
										<RichText
											tagName="span"
											value={value}
											onChange={(v) => {
												setAttributes({ columns: { ...columns, [column]: v } });
											}}
											placeholder={__("Column text..", "wp-custom-blocks")}
											style={{ color: columnColor }}
										/>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{Array.from(uniqRowKeys).map((rowKey, rowIndex, rowArr) => {
								const rowValues = rows[rowKey];

								return (
									<tr
										key={rowKey}
										className={classNames("font-semibold text-base", {
											"border-4 border-red": selectedCeil?.rowId === rowKey,
										})}
									>
										{Object.entries(rowValues).map(
											([columnKey, value], index, arr) => {
												const currentRow = rows[rowKey];

												const isFirstCell = index === 0;
												const isLastCell = index === arr.length - 1;

												const cellAttributes: TCellHTMLAttributes = {
													className: classNames("p-2 text-left relative", {
														"border-x-4 border-red":
															selectedCeil?.colId === columnKey,
													}),
												};

												if (isFirstCell) {
													cellAttributes.scope = "row";

													if (rowIndex === 0) {
														cellAttributes.style = {
															...cellAttributes.style,
															borderTopLeftRadius: borderRadius,
														};
													}

													if (rowIndex === rowArr.length - 1) {
														cellAttributes.style = {
															...cellAttributes.style,
															borderBottomLeftRadius: borderRadius,
														};
													}
												} else {
													cellAttributes.onClick = () =>
														setSelectedCeil({
															colId: columnKey,
															rowId: rowKey,
														});
												}

												if (isLastCell) {
													if (rowIndex === 0) {
														cellAttributes.style = {
															...cellAttributes.style,
															borderTopRightRadius: borderRadius,
														};
													}

													if (rowIndex === rowArr.length - 1) {
														cellAttributes.style = {
															...cellAttributes.style,
															borderBottomRightRadius: borderRadius,
														};
													}
												}

												const CellTag = isFirstCell ? "th" : "td";

												const changeCeil = (v: string | boolean) => {
													currentRow[columnKey] = v;

													setAttributes({
														rows: {
															...rows,
															[rowKey]: currentRow,
														},
													});
												};

												return (
													<CellTag key={index} {...cellAttributes}>
														{typeof value === "boolean" ? (
															<CheckboxControl
																checked={value}
																onChange={changeCeil}
																className="flex justify-center"
															/>
														) : (
															<RichText
																tagName="span"
																value={value}
																onChange={changeCeil}
																placeholder={__(
																	"Row name..",
																	"wp-custom-blocks"
																)}
																style={{ color: rowColor }}
															/>
														)}
													</CellTag>
												);
											}
										)}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
