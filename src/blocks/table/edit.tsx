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
import { useViewportMatch } from "@wordpress/compose";
import { select } from "@wordpress/data";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { TemplateWrapperEdit } from "@/components";
import { breakpoints, sliderElementName } from "@/constants";
import type { TCellHTMLAttributes } from "@/types";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type {
	ICellValues,
	ISelectedCeil,
	ITableBlockAttributes,
} from "./attributes";
import { ToolbarCeilActions } from "./components";

const Edit: FC<BlockEditProps<ITableBlockAttributes>> = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		rows,
		columns,
		uniqueId,
		blockStyle,
		titleSize,
		titleLineHeight,
		titleMobileSize,
		titleMobileLineHeight,
		titleWeight,
		titleTransform,
		isEnableSlider,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
		mobileItemsCount,
		tabletItemsCount,
		laptopItemsCount,
		mobileSpaceBetween,
		tabletSpaceBetween,
		laptopSpaceBetween,
		backgroundColor,
		columnColor,
		rowColor,
		borderRadius,
	} = attributes;

	const blockProps = useBlockProps({
		className: classNames(uniqueId, "font-notoSans"),
	});

	const previewDeviceType =
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		select("core/edit-post").__experimentalGetPreviewDeviceType();

	const isDesktopDevice = previewDeviceType === "Desktop";
	const isDesktopViewport = useViewportMatch("large", ">=");

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

	/**
	 * Edit Styles
	 */
	const mobileEditStyles = `
		.${uniqueId} .slider-wrapper {
			gap: ${sliderMobileSpaceBetween}px;
		}

		.${uniqueId} .slider-item {
			flex-basis: calc(${
				100 / sliderMobileSlidesPerView
			}% - ${sliderMobileSpaceBetween}px);
		}
	`;

	const tabletEditStyles = `
		.${uniqueId} .slider-wrapper {
			gap: ${sliderTabletSpaceBetween}px;
		}

		.${uniqueId} .slider-item {
			flex-basis: calc(${
				100 / sliderTabletSlidesPerView
			}% - ${sliderTabletSpaceBetween}px);
		}
	`;

	const laptopEditStyles = `
		.${uniqueId} .slider-wrapper {
			gap: ${sliderLaptopSpaceBetween}px;
		}

		.${uniqueId} .slider-item {
			flex-basis: calc(${
				100 / sliderLaptopSlidesPerView
			}% - ${sliderLaptopSpaceBetween}px);
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockEditStyleCss = `
		${mobileEditStyles}

		@media (min-width: ${breakpoints.sm}px) {
			${tabletEditStyles}
		}

		@media (min-width: ${breakpoints.md}px) {
			${laptopEditStyles}
		}
	`;

	/**
	 * Block Styles
	 */
	const mobileStyles = `
		.${uniqueId} .title {
			font-size: ${titleMobileSize}px;
			line-height: ${titleMobileLineHeight}rem;
			font-weight: ${titleWeight};
			text-transform: ${titleTransform};
		}

		.${uniqueId} .inner-wrapper {
			gap: ${mobileSpaceBetween}px;
			grid-template-columns: repeat(${mobileItemsCount}, minmax(0, 1fr));
		}

		.${uniqueId} tbody tr:nth-child(odd) > * {
			background-color: ${backgroundColor};
		}
	`;

	const tabletStyles = `
		.${uniqueId} .inner-wrapper {
			gap: ${tabletSpaceBetween}px;
			grid-template-columns: repeat(${tabletItemsCount}, minmax(0, 1fr));
		}
	`;

	const laptopStyles = `
		.${uniqueId} .title {
			font-size: ${titleSize}px;
			line-height: ${titleLineHeight}rem;
		}

		.${uniqueId} .inner-wrapper {
			gap: ${laptopSpaceBetween}px;
			grid-template-columns: repeat(${laptopItemsCount}, minmax(0, 1fr));
		}
	`;

	const desktopStyles = "";

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
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

	const handleChangeAttributes = (attrs: Partial<ITableBlockAttributes>) => {
		const newStyleCss = minifyCssStrings(blockStyleCss);

		if (blockStyle !== newStyleCss) {
			attrs.blockStyle = newStyleCss;
		}

		setAttributes(attrs);
	};

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "table-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	return (
		<Fragment>
			<style>{blockStyleCss}</style>
			<style>{blockEditStyleCss}</style>

			<Inspector
				attributes={attributes}
				setAttributes={handleChangeAttributes}
			/>

			{isDesktopDevice && isDesktopViewport && (
				<BlockControls controls={undefined}>
					<ToolbarGroup>
						<DropdownMenu
							controls={dropdownOptions}
							icon="grid-view"
							label="Select a direction."
						/>

						{selectedCeil && (
							<ToolbarCeilActions
								selectedCeil={selectedCeil}
								attributes={attributes}
								setAttributes={setAttributes}
							/>
						)}
					</ToolbarGroup>
				</BlockControls>
			)}

			<TemplateWrapperEdit
				attributes={attributes}
				setAttributes={setAttributes}
				blockProps={blockProps}
			>
				<div className="relative overflow-x-auto hidden lg:!block">
					<table className="payments-table w-full text-sm text-left rtl:text-right">
						<thead
							className="text-sm font-medium"
							style={{ color: columnColor }}
						>
							<tr>
								{Object.entries(columns).map(([column, value], index) => (
									<th
										key={column}
										className="px-3 py-2"
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
							{Array.from(uniqRowKeys).map((rowKey) => {
								const rowValues = rows[rowKey];

								return (
									<tr
										key={rowKey}
										className={classNames("font-semibold italic text-lg", {
											"border-4 border-red": selectedCeil?.rowId === rowKey,
										})}
									>
										{Object.entries(rowValues).map(
											([columnKey, { value, icon, isReverse }], index, arr) => {
												const currentRow = rows[rowKey];
												const currentCell = currentRow?.[columnKey];

												const isFirstCell = index === 0;
												const isLastCell = index === arr.length - 1;

												const cellAttributes: TCellHTMLAttributes = {
													className: classNames("px-3 py-6 relative", {
														"border-x-4 border-red":
															selectedCeil?.colId === columnKey,
													}),
													onClick: () =>
														setSelectedCeil({
															colId: columnKey,
															rowId: rowKey,
														}),
												};

												if (isFirstCell) {
													cellAttributes.scope = "row";

													cellAttributes.style = {
														...cellAttributes.style,
														borderTopLeftRadius: borderRadius,
														borderBottomLeftRadius: borderRadius,
													};
												}

												if (isLastCell) {
													cellAttributes.style = {
														...cellAttributes.style,
														borderTopRightRadius: borderRadius,
														borderBottomRightRadius: borderRadius,
													};
												}

												const CellTag = isFirstCell ? "th" : "td";

												return (
													<CellTag key={index} {...cellAttributes}>
														<div
															className={classNames(
																"flex items-center whitespace-nowrap w-fit gap-x-3",
																{ "flex-row-reverse": isReverse }
															)}
														>
															<RichText
																tagName="span"
																value={value}
																onChange={(v) => {
																	currentCell.value = v;

																	setAttributes({
																		rows: {
																			...rows,
																			[rowKey]: currentRow,
																		},
																	});
																}}
																placeholder={__(
																	"Cell text..",
																	"wp-custom-blocks"
																)}
																style={{ color: rowColor }}
															/>
															{icon?.url && (
																<div className="max-w-2xl">
																	<img
																		className="w-6 h-6 object-cover"
																		src={icon.url}
																		alt={icon.alt}
																		width={icon.width}
																		height={icon.height}
																	/>
																</div>
															)}
														</div>
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

				<div className="relative lg:hidden">
					<div className="overflow-hidden pb-14">
						<div
							className={classNames("relative", {
								[sliderElementName]: isEnableSlider,
							})}
							id={uniqueId}
						>
							<div
								className={
									isEnableSlider
										? "slider-wrapper flex flex-wrap overflow-hidden"
										: "inner-wrapper grid"
								}
							>
								{Array.from(uniqRowKeys).map((rowKey) => {
									const rowValues = rows[rowKey];

									return (
										<div
											key={rowKey}
											className="slider-item px-4 w-full"
											style={{ backgroundColor, borderRadius }}
										>
											<div className="h-full">
												{Object.entries(rowValues).map(
													([columnKey, { value, icon, isReverse }], index) => {
														const currentRow = rows[rowKey];
														const currentCell = currentRow[columnKey];

														return (
															<div key={index} className="py-4">
																<p
																	className="text-sm font-medium mb-2"
																	style={{ color: columnColor }}
																>
																	{columns[columnKey]}
																</p>
																<div
																	className={classNames(
																		"flex items-center whitespace-nowrap w-fit gap-x-3",
																		{ "flex-row-reverse": isReverse }
																	)}
																>
																	<RichText
																		tagName="p"
																		value={value}
																		className="font-semibold italic text-lg"
																		onChange={(v) => {
																			currentCell.value = v;

																			setAttributes({
																				rows: {
																					...rows,
																					[rowKey]: currentRow,
																				},
																			});
																		}}
																		placeholder={__(
																			"Value..",
																			"wp-custom-blocks"
																		)}
																		style={{ color: rowColor }}
																	/>
																	{icon?.url && (
																		<div className="max-w-2xl">
																			<img
																				className="w-6 h-6 object-cover"
																				src={icon.url}
																				alt={icon.alt}
																				width={icon.width}
																				height={icon.height}
																			/>
																		</div>
																	)}
																</div>
															</div>
														);
													}
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</TemplateWrapperEdit>
		</Fragment>
	);
};

export default Edit;
