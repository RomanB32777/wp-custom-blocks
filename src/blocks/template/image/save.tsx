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

import { templateRounded, templateSliderItemName } from "../attributes";
import type { IImageElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IImageElementAttributes>> = ({ attributes }) => {
	const { uniqueId, image, isEnableOpenInModal } = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(templateSliderItemName, uniqueId, "swiper-slide"),
	});

	return (
		<div {...blockProps}>
			{image.url && (
				<img
					className={classNames(
						"slide-image h-full w-full object-cover",
						templateRounded,
						{
							"light-modal-image": isEnableOpenInModal,
						}
					)}
					src={image.url}
					alt={image.alt}
					width={image.width}
					height={image.height}
				/>
			)}
		</div>
	);
};

export default Save;
