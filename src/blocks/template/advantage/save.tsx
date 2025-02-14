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

import { templateRounded, templateSliderItemName } from "../attributes";
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
				className={classNames("h-full w-full overflow-hidden", templateRounded)}
				style={{ backgroundColor }}
			>
				<div className="mx-auto mb-6 mt-10 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-white">
					{image.url && <img className="w-8" src={image.url} alt={image.alt} />}
				</div>

				<RichText.Content
					tagName="p"
					className="px-6 text-center text-base font-bold uppercase"
					value={title}
					style={{ color: titleColor }}
				/>
			</div>
		</div>
	);
};

export default Save;
