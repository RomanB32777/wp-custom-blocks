import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type {
	IPaymentTableBlockAttributes,
	TCellHTMLAttributes,
} from "./attributes";

const Save: FC<BlockSaveProps<IPaymentTableBlockAttributes>> = ({
	attributes,
}) => {
	const {
		rows,
		columns,
		uniqueId,
		columnColor,
		rowColor,
		headBackgroundColor,
		bodyBackgroundColor,
		borderColor,
		borderRadius,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<div className="relative overflow-x-auto">
				<table className="payment-table w-full border-separate border-spacing-0 text-base">
					<thead
						className="text-base font-medium"
						style={{ color: columnColor }}
					>
						<tr>
							{Object.entries(columns).map(([column, value], colIndex, arr) => {
								const isFirstCell = colIndex === 0;
								const isLastCell = colIndex === arr.length - 1;

								const cellAttributes: TCellHTMLAttributes = {
									scope: "col",
									className: classNames("p-2 border text-center", {
										"!border-l-0": !isFirstCell,
									}),
									style: {
										backgroundColor: headBackgroundColor,
										borderColor,
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
										{value}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{Object.entries(rows).map(
							([rowKey, rowValues], rowIndex, rowArr) => {
								return (
									<tr key={rowKey} className="text-base font-semibold">
										{Object.values(rowValues).map(
											({ value, icon }, index, arr) => {
												const isFirstCell = index === 0;
												const isLastCell = index === arr.length - 1;

												const cellAttributes: TCellHTMLAttributes = {
													className: classNames(
														"p-2 border-b border-r text-center",
														{
															"border-l": isFirstCell,
														}
													),
													style: {
														backgroundColor: bodyBackgroundColor,
														borderColor,
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

												return (
													<CellTag key={index} {...cellAttributes}>
														{icon?.url ? (
															<div className="mx-auto h-12 overflow-hidden">
																<img
																	className="mx-auto h-full w-auto object-cover object-center"
																	src={icon.url}
																	alt={icon.alt}
																	width={icon.width}
																	height={icon.height}
																/>
															</div>
														) : (
															<RichText.Content
																tagName="span"
																value={value}
																style={{ color: rowColor }}
															/>
														)}
													</CellTag>
												);
											}
										)}
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Save;
