import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type {
	IAvailableTableBlockAttributes,
	TCellHTMLAttributes,
} from "./attributes";

const Save: FC<BlockSaveProps<IAvailableTableBlockAttributes>> = ({
	attributes,
}) => {
	const {
		rows,
		columns,
		uniqueId,
		columnColor,
		rowColor,
		borderRadius,
		activeIcon,
		inactiveIcon,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<div className="relative overflow-x-auto">
				<table className="available-table w-full text-base">
					<thead
						className="text-base font-medium"
						style={{ color: columnColor }}
					>
						<tr>
							{Object.entries(columns).map(([column, value], index) => (
								<th
									key={column}
									className={classNames(
										"p-2 font-roboto",
										index > 0 ? "text-center" : "text-left"
									)}
									scope="col"
								>
									{value}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{Object.entries(rows).map(
							([rowKey, rowValues], rowIndex, rowArr) => {
								return (
									<tr key={rowKey} className="font-semibold text-base">
										{Object.values(rowValues).map((value, index, arr) => {
											const isFirstCell = index === 0;
											const isLastCell = index === arr.length - 1;

											const cellAttributes: TCellHTMLAttributes = {
												className: "p-2 font-roboto",
												style: { color: rowColor },
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

											let cellContent = null;

											if (typeof value === "boolean") {
												const cellIcon = value ? activeIcon : inactiveIcon;

												if (!cellIcon.url) {
													cellContent = String(value);
												} else {
													cellContent = (
														<div className="flex justify-center">
															<div className="min-w-6 min-h-6 w-6 h-6 overflow-hidden">
																<img
																	className="!w-full !h-full"
																	src={cellIcon.url}
																	alt={cellIcon.alt}
																	width={cellIcon.width}
																	height={cellIcon.height}
																/>
															</div>
														</div>
													);
												}
											} else {
												cellContent = value;
											}

											return (
												<CellTag key={index} {...cellAttributes}>
													<div
														className={
															isFirstCell ? "text-left" : "text-center"
														}
													>
														{cellContent}
													</div>
												</CellTag>
											);
										})}
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
