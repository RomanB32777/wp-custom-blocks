import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import classNames from "classnames";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import { TemplateWrapperSave } from "@/components";
import { sliderElementName } from "@/constants";
import type { TCellHTMLAttributes } from "@/types";

import type { ITableBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ITableBlockAttributes>> = ({ attributes }) => {
	const {
		rows,
		columns,
		uniqueId,
		isEnableSlider,
		isLoopSlider,
		isDisableAutoplay,
		sliderAutoplayDelay,
		sliderMobileSlidesPerView,
		sliderTabletSlidesPerView,
		sliderLaptopSlidesPerView,
		sliderMobileSpaceBetween,
		sliderTabletSpaceBetween,
		sliderLaptopSpaceBetween,
		backgroundColor,
		columnColor,
		rowColor,
		borderRadius,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(uniqueId, "font-notoSans"),
	});

	const sliderAttributes = isEnableSlider
		? {
				"data-slider-loop": isLoopSlider,
				"data-slider-disable-autoplay": isDisableAutoplay,
				"data-slider-autoplay-delay": sliderAutoplayDelay,
				"data-slides-per-view-xs": sliderMobileSlidesPerView,
				"data-slides-per-view-sm": sliderTabletSlidesPerView,
				"data-slides-per-view-md": sliderLaptopSlidesPerView,
				"data-slides-space-between-xs": sliderMobileSpaceBetween,
				"data-slides-space-between-sm": sliderTabletSpaceBetween,
				"data-slides-space-between-md": sliderLaptopSpaceBetween,
			}
		: {};

	const tableSlidesItems = Object.entries(rows).map(([rowKey, rowValues]) => {
		return (
			<div
				key={rowKey}
				className="swiper-slide px-4 w-full"
				style={{ backgroundColor, borderRadius }}
			>
				<div className="h-full">
					{Object.entries(rowValues).map(
						([columnKey, { value, icon, isReverse }], index) => {
							return (
								<div key={index} className="py-4">
									<p className="text-sm font-medium mb-2">
										<RichText.Content
											tagName="span"
											value={columns[columnKey]}
											style={{ color: columnColor }}
										/>
									</p>
									<div
										className={classNames(
											"flex items-center whitespace-nowrap w-fit gap-x-3",
											{ "flex-row-reverse": isReverse }
										)}
									>
										{value && (
											<RichText.Content
												tagName="p"
												value={value}
												className="font-semibold italic text-lg"
												style={{ color: rowColor }}
											/>
										)}

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
	});

	return (
		<TemplateWrapperSave attributes={attributes} blockProps={blockProps}>
			<div className="relative overflow-x-auto hidden lg:block">
				<table className="payments-table w-full text-sm text-left rtl:text-right">
					<thead className="text-sm font-medium">
						<tr>
							{Object.entries(columns).map(([column, value]) => (
								<th key={column} className="px-3 py-2" scope="col">
									<RichText.Content
										tagName="span"
										value={value}
										style={{ color: columnColor }}
									/>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{Object.entries(rows).map(([rowKey, rowValues]) => {
							return (
								<tr key={rowKey} className="font-semibold italic text-lg">
									{Object.values(rowValues).map(
										({ value, icon, isReverse }, index, arr) => {
											const isFirstCell = index === 0;
											const isLastCell = index === arr.length - 1;

											const cellAttributes: TCellHTMLAttributes = {
												className: "px-3 py-6",
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
														{value && (
															<RichText.Content
																tagName="span"
																value={value}
																style={{ color: rowColor }}
															/>
														)}

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

			<div className="relative mb-6 lg:hidden">
				<div
					className={classNames("overflow-hidden", {
						"pb-14 lg:pb-0": isEnableSlider,
					})}
				>
					<div
						className={
							isEnableSlider ? sliderElementName : "inner-wrapper grid"
						}
						id={uniqueId}
						{...sliderAttributes}
					>
						{isEnableSlider ? (
							<>
								<div className="swiper-wrapper">{tableSlidesItems}</div>
								<div className="swiper-pagination [&>*]:mr-3 [&>*:last-child]:mr-0"></div>
							</>
						) : (
							tableSlidesItems
						)}
					</div>
				</div>
			</div>
		</TemplateWrapperSave>
	);
};

export default Save;
