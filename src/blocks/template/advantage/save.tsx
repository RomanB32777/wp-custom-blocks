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

import { templateSliderItemName } from "../constants";
import type { IAdvantageElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IAdvantageElementAttributes>> = ({
	attributes,
}) => {
	const { uniqueId, isSlideItem, title, titleColor, backgroundColor, image } =
		attributes;

	const blockProps = useBlockProps.save({
		className: classNames(templateSliderItemName, {
			"swiper-slide": isSlideItem,
			[uniqueId]: !isSlideItem,
		}),
	});

	return (
		<div {...blockProps}>
			<div
				className="rounded-lg w-full h-full overflow-hidden"
				style={{ backgroundColor }}
			>
				<div className="bg-white overflow-hidden rounded-full w-28 h-28 mx-auto mt-10 mb-6 flex items-center justify-center">
					{image.url && <img className="w-8" src={image.url} alt={image.alt} />}
				</div>
				<RichText.Content
					tagName="p"
					className="font-bold text-base text-center italic uppercase px-6"
					value={title}
					style={{ color: titleColor }}
				/>
			</div>
		</div>
	);
};

export default Save;
