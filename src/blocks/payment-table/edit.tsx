import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { DropdownMenu, ToolbarGroup } from "@wordpress/components";
import type { DropdownOption } from "@wordpress/components/build-types/dropdown-menu/types";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import Inspector from "./inspector";
import type {
	ICellValues,
	IPaymentTableBlockAttributes,
	ISelectedCeil,
	TCellHTMLAttributes,
} from "./attributes";
import { ToolbarCeilActions } from "./components";

const Edit: FC<BlockEditProps<IPaymentTableBlockAttributes>> = ({
	clientId,
	attributes,
	setAttributes,
}) => {
	const {
		rows,
		columns,
		uniqueId,
		columnColor,
		headBackgroundColor,
		bodyBackgroundColor,
		rowColor,
		borderColor,
		borderRadius,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "font-inter"),
	});

	const [uniqRowKeys, setUniqRowKeys] = useState(
		() => new Set(Object.keys(rows))
	);

	const [uniqColKeys, setUniqColKeys] = useState(
		() => new Set(Object.keys(columns))
	);

	const [selectedCeil, setSelectedCeil] = useState<ISelectedCeil | undefined>();

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "payment-table-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	const handleAddRow = () => {
		const newKey = String(Math.random());

		if (!uniqRowKeys.has(newKey)) {
			setUniqRowKeys(uniqRowKeys.add(newKey));

			setAttributes({
				rows: {
					...rows,
					[newKey]: Object.fromEntries(
						Object.keys(columns).map((columnKey) => {
							const cell: ICellValues = {
								value: "",
								icon: {},
							};

							return [columnKey, cell];
						})
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

			const updatedRows = Object.entries(rows).map(([key, values]) => {
				const cell: ICellValues = {
					value: "",
					icon: {},
				};

				return [
					key,
					{
						...values,
						[newKey]: cell,
					},
				];
			});

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

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<BlockControls controls={[]}>
				<ToolbarGroup>
					{selectedCeil && (
						<ToolbarCeilActions
							attributes={attributes}
							selectedCeil={selectedCeil}
							setAttributes={setAttributes}
						/>
					)}
				</ToolbarGroup>
			</BlockControls>

			<BlockControls
				controls={undefined}
				children={
					<ToolbarGroup>
						<DropdownMenu
							controls={dropdownOptions}
							icon="grid-view"
							label="Select a direction."
						/>
					</ToolbarGroup>
				}
			/>

			<div {...blockProps}>
				<div className="relative overflow-x-auto">
					<table className="payment-table w-full border-separate border-spacing-0 text-base">
						<thead className="text-base font-medium">
							<tr>
								{Object.entries(columns).map(
									([column, value], colIndex, arr) => {
										const isFirstCell = colIndex === 0;
										const isLastCell = colIndex === arr.length - 1;

										const isSelectedCell =
											!selectedCeil?.rowId &&
											selectedCeil?.rowIndex === 0 &&
											selectedCeil?.colIndex === colIndex;

										const cellAttributes: TCellHTMLAttributes = {
											scope: "col",
											className: classNames(
												"p-2 border-t border-r border-b text-center",
												{
													"border-l": isFirstCell,
													"!border-4": isSelectedCell,
												}
											),
											style: {
												backgroundColor: headBackgroundColor,
												borderColor: isSelectedCell ? "red" : borderColor,
											},
											onClick: () => {
												setSelectedCeil({
													colIndex,
													rowIndex: 0,
													colId: colIndex > 0 ? column : undefined,
													rowId: undefined,
												});
											},
										};

										if (isFirstCell) {
											cellAttributes.style = {
												...cellAttributes.style,
												borderTopLeftRadius: borderRadius,
											};
										}

										if (isLastCell) {
											cellAttributes.style = {
												...cellAttributes.style,
												borderTopRightRadius: borderRadius,
											};
										}

										return (
											<th key={column} {...cellAttributes}>
												<RichText
													tagName="span"
													value={value}
													onChange={(v) => {
														setAttributes({
															columns: { ...columns, [column]: v },
														});
													}}
													placeholder={__("Column text..", "wp-custom-blocks")}
													style={{ color: columnColor }}
												/>
											</th>
										);
									}
								)}
							</tr>
						</thead>

						<tbody>
							{Array.from(uniqRowKeys).map((rowKey, rowIndex, rowArr) => {
								const rowValues = rows[rowKey];

								return (
									<tr key={rowKey} className="text-base font-semibold">
										{Object.entries(rowValues).map(
											([columnKey, { value, icon }], index, arr) => {
												const currentRow = rows[rowKey];
												const currentCell = currentRow[columnKey];

												const isFirstCell = index === 0;
												const isLastCell = index === arr.length - 1;

												const isSelectedCell =
													selectedCeil?.rowId === rowKey &&
													selectedCeil?.colId === columnKey;

												const cellAttributes: TCellHTMLAttributes = {
													className: classNames(
														"p-2 border-b border-r text-center relative",
														{
															"border-l": isFirstCell,
															"!border-4": isSelectedCell,
														}
													),
													style: {
														backgroundColor: bodyBackgroundColor,
														borderColor: isSelectedCell ? "red" : borderColor,
													},
													onClick: () => {
														setSelectedCeil({
															rowIndex,
															colIndex: index,
															rowId: rowKey,
															colId: columnKey,
														});
													},
												};

												if (isFirstCell) {
													cellAttributes.scope = "row";

													if (rowIndex === rowArr.length - 1) {
														cellAttributes.style = {
															...cellAttributes.style,
															borderBottomLeftRadius: borderRadius,
														};
													}
												}

												if (isLastCell) {
													if (rowIndex === rowArr.length - 1) {
														cellAttributes.style = {
															...cellAttributes.style,
															borderBottomRightRadius: borderRadius,
														};
													}
												}

												const CellTag = isFirstCell ? "th" : "td";

												const changeCeil = (v: string) => {
													currentCell.value = v;

													setAttributes({
														rows: { ...rows, [rowKey]: currentRow },
													});
												};

												return (
													<CellTag key={index} {...cellAttributes}>
														{icon?.url ? (
															<div className="mx-auto h-12 w-16 overflow-hidden">
																<img
																	className="mx-auto h-full w-auto object-cover object-center"
																	src={icon.url}
																	alt={icon.alt}
																	width={icon.width}
																	height={icon.height}
																/>
															</div>
														) : (
															<RichText
																tagName="span"
																value={value}
																style={{ color: rowColor }}
																placeholder={__(
																	"Row name..",
																	"wp-custom-blocks"
																)}
																onChange={changeCeil}
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
