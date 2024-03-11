import React, {
	type FC,
	type TdHTMLAttributes,
	type ThHTMLAttributes,
} from "react";
import classNames from "classnames";
import {
	BlockControls,
	MediaPlaceholder,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Button, DropdownMenu, ToolbarGroup } from "@wordpress/components";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { TemplateWrapperEdit } from "@/components";
import { breakpoints } from "@/constants";
import { minifyCssStrings } from "@/utils/minify-css";

import Inspector from "./inspector";
import type { ICellValues, ITableBlockAttributes } from "./attributes";
import { tableSliderElementName } from "./constants";

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
		isPreviewIcons,
	} = attributes;

	const blockProps = useBlockProps({
		className: uniqueId,
		style: {
			margin: 0,
			maxWidth: "none",
		},
	});

	const [uniqKeys, setUniqKeys] = useState(() => new Set(Object.keys(rows)));

	const handleDeleteRow = (deletedRow: string) => () => {
		setUniqKeys((keys) => {
			keys.delete(deletedRow);

			return keys;
		});

		setAttributes({
			rows: Object.fromEntries(
				Object.entries(rows).filter(([rowKey]) => rowKey !== deletedRow)
			),
		});
	};

	const handleAddRow = () => {
		const newKey = String(Math.random());

		if (!uniqKeys.has(newKey)) {
			setUniqKeys(uniqKeys.add(newKey));
			setAttributes({
				rows: {
					...rows,
					[newKey]: Object.fromEntries(
						Object.entries(columns).map(([columnKey, columnName]) => {
							const cell: ICellValues = {
								column: columnName,
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

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({
				blockStyle: blockStyleCss,
			});
		}
	}, [blockStyle, blockStyleCss, setAttributes]);

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "table-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, setAttributes, uniqueId]);

	return (
		<Fragment>
			<style>{`${minifyCssStrings(blockStyleCss)}`}</style>
			<style>{`${minifyCssStrings(blockEditStyleCss)}`}</style>

			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<BlockControls
				controls={undefined}
				children={
					<ToolbarGroup>
						<DropdownMenu
							controls={[
								{
									icon: "grid-view",
									onClick: function noRefCheck() {},
									title: "First Menu Item Label",
								},
								{
									icon: "grid-view",
									onClick: function noRefCheck() {},
									title: "Second Menu Item Label",
								},
							]}
							icon="grid-view"
							label="Select a direction."
						/>
					</ToolbarGroup>
				}
			/>

			<TemplateWrapperEdit
				attributes={attributes}
				setAttributes={setAttributes}
				blockProps={blockProps}
			>
				<div className="relative overflow-x-auto hidden lg:block">
					<table className="payments-table w-full text-sm text-left rtl:text-right">
						<thead
							className="text-sm font-medium"
							style={{ color: columnColor }}
						>
							<tr>
								{Object.entries(columns).map(([column, value]) => (
									<th
										key={column}
										className="px-3 py-2 font-notoSans"
										scope="col"
									>
										{value}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{Array.from(uniqKeys).map((rowKey) => {
								const rowValues = rows[rowKey];

								return (
									<tr key={rowKey} className="font-semibold italic text-lg">
										{Object.entries(rowValues).map(
											([columnKey, { value, icon }], index, arr) => {
												const currentRow = rows[rowKey];
												const currentCell = currentRow[columnKey];

												const isFirstCell = index === 0;
												const isLastCell = index === arr.length - 1;

												const cellAttributes:
													| ThHTMLAttributes<HTMLTableCellElement>
													| TdHTMLAttributes<HTMLTableCellElement> = {
													className: classNames(
														"px-3 py-6 font-notoSans relative",
														{
															"rounded-l-lg": isFirstCell,
															"rounded-r-lg": isLastCell,
														}
													),
													onClick: () => {},
												};

												if (isFirstCell) {
													cellAttributes.scope = "row";
												}

												const CellTag = isFirstCell ? "th" : "td";

												return (
													<CellTag key={index} {...cellAttributes}>
														<div className="flex items-center whitespace-nowrap gap-x-6">
															{/* gap-x-3 */}
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
															{(isPreviewIcons || icon) && (
																<div className="max-w-2xl">
																	{icon.url && (
																		<img
																			className="w-6 h-6 object-cover"
																			src={icon.url}
																			alt={icon.alt}
																		/>
																	)}
																	{isPreviewIcons && (
																		<MediaPlaceholder
																			onSelect={(media) => {
																				currentCell.icon = media;

																				setAttributes({
																					rows: {
																						...rows,
																						[rowKey]: currentRow,
																					},
																				});
																			}}
																			allowedTypes={["image"]}
																			multiple={false}
																			labels={{
																				title: __("Icon", "wp-custom-blocks"),
																				instructions: __(
																					"Upload icon",
																					"wp-custom-blocks"
																				),
																			}}
																			icon="format-image"
																			className="w-full h-full"
																			onHTMLDrop={undefined}
																		/>
																	)}
																</div>
															)}
														</div>

														{isLastCell && (
															<div
																className="absolute"
																style={{
																	top: "24px",
																	right: "12px",
																}}
															>
																<Button
																	variant="primary"
																	onClick={handleDeleteRow(rowKey)}
																>
																	X
																</Button>
															</div>
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

				<div className="relative lg:hidden">
					<div className="overflow-hidden pb-14">
						<div
							className={classNames("relative", {
								[tableSliderElementName]: isEnableSlider,
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
								{Array.from(uniqKeys).map((rowKey) => {
									const rowValues = rows[rowKey];

									return (
										<div
											key={rowKey}
											className="slider-item px-4 rounded-lg w-full"
											style={{ backgroundColor }}
										>
											<div className="h-full">
												{Object.entries(rowValues).map(
													([columnKey, { value }], index) => {
														const currentRow = rows[rowKey];
														const currentCell = currentRow[columnKey];

														return (
															<div key={index} className="py-4">
																<p
																	className="font-notoSans text-sm font-medium mb-2"
																	style={{ color: columnColor }}
																>
																	{columns[columnKey]}
																</p>
																<RichText
																	tagName="p"
																	value={value}
																	className="font-notoSans font-semibold italic text-lg"
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

				{Boolean(Object.keys(columns).length) && (
					<div className="mt-10">
						<Button variant="primary" onClick={handleAddRow}>
							Add new row
						</Button>
					</div>
				)}
			</TemplateWrapperEdit>
		</Fragment>
	);
};

export default Edit;
