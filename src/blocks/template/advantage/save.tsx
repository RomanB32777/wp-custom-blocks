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
	const {
		uniqueId,
		title,
		titleColor,
		backgroundColor,
		image,
		horizontalPosition,
		verticalPosition,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(templateSliderItemName, uniqueId, "swiper-slide"),
	});

	return (
		<div {...blockProps}>
			<div
				className={classNames(
					"relative w-full h-full overflow-hidden p-8",
					templateRounded
				)}
				style={{ backgroundColor }}
			>
				{image.url && (
					<div
						className="absolute w-full overflow-hidden rounded-xl h-full"
						style={{
							right: horizontalPosition,
							bottom: verticalPosition,
						}}
					>
						<img
							className="h-full !max-w-fit object-cover object-center"
							src={image.url}
							alt={image.alt}
						/>
					</div>
				)}

				<RichText.Content
					tagName="p"
					className="elative font-medium text-xl"
					value={title}
					style={{ color: titleColor }}
				/>
			</div>
		</div>
	);
};

export default Save;
