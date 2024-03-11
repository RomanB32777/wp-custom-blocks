import React, {
	type FC,
	type TdHTMLAttributes,
	type ThHTMLAttributes,
} from "react";
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

import type { ITableBlockAttributes } from "./attributes";
import { tableSliderElementName } from "./constants";

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
	} = attributes;

	const blockProps = useBlockProps.save({
		className: uniqueId,
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
				className="swiper-slide px-4 rounded-lg w-full"
				style={{ backgroundColor }}
			>
				<div className="h-full">
					{Object.entries(rowValues).map(([columnKey, { value }], index) => {
						return (
							<div key={index} className="py-4">
								<p
									className="font-notoSans text-sm font-medium mb-2"
									style={{ color: columnColor }}
								>
									{columns[columnKey]}
								</p>
								<RichText.Content
									tagName="p"
									value={value}
									className="font-notoSans font-semibold italic text-lg"
									style={{ color: rowColor }}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	});

	return (
		<TemplateWrapperSave attributes={attributes} blockProps={blockProps}>
			<div className="relative overflow-x-auto hidden lg:block">
				<table className="payments-table w-full text-sm text-left rtl:text-right">
					<thead className="text-sm font-medium" style={{ color: columnColor }}>
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
						{Object.entries(rows).map(([rowKey, rowValues]) => {
							return (
								<tr key={rowKey} className="font-semibold italic text-lg">
									{Object.values(rowValues).map(({ value }, index, arr) => {
										const isFirstCell = index === 0;

										const cellAttributes:
											| ThHTMLAttributes<HTMLTableCellElement>
											| TdHTMLAttributes<HTMLTableCellElement> = {
											className: classNames("px-3 py-6 font-notoSans", {
												"rounded-l-lg": isFirstCell,
												"rounded-r-lg": index === arr.length - 1,
											}),
										};

										if (isFirstCell) {
											cellAttributes.scope = "row";
										}

										const CellTag = isFirstCell ? "th" : "td";
										return (
											<CellTag key={index} {...cellAttributes}>
												<RichText.Content
													tagName="span"
													value={value}
													style={{ color: rowColor }}
												/>
											</CellTag>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className="relative mb-6 lg:hidden">
				<div className="overflow-hidden">
					<div
						className={
							isEnableSlider ? tableSliderElementName : "inner-wrapper grid"
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
