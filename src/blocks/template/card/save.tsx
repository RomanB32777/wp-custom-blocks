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
import crownIcon from "./assets/crown.svg";
import primaryFlagImage from "./assets/flag-primary.png";
import flagImage from "./assets/flag.png";
import type { ICardElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ICardElementAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		index,
		isWithIndex,
		isSlideItem,
		link,
		title,
		titleColor,
		category,
		categoryColor,
		buttonText,
		buttonTextColor,
		buttonColor,
		review,
		reviewColor,
		image,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(templateSliderItemName, {
			"swiper-slide": isSlideItem,
			[uniqueId]: !isSlideItem,
		}),
	});

	return (
		<div {...blockProps}>
			<div className="group relative h-full">
				<div
					className={classNames(
						"aspect-h-1 aspect-w-1 lg:aspect-none h-full w-full overflow-hidden bg-gray-200 group-hover:opacity-75",
						templateRounded
					)}
				>
					{image.url && (
						<img
							className="h-full w-full object-cover object-center"
							src={image.url}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					)}
				</div>

				{isWithIndex && (
					<div className="absolute -top-2 left-2.5">
						{index === 0 ? (
							<>
								<img
									src={primaryFlagImage}
									alt="flag alt"
									width={52}
									height={67}
								/>
								<div className="absolute -top-1 bottom-0 left-0 right-1 flex items-center justify-center">
									<img src={crownIcon} alt="crown" width={21} height={18} />
								</div>
							</>
						) : (
							<>
								<img src={flagImage} alt="flag alt" width={52} height={56} />
								<div className="absolute -top-1.5 bottom-0 left-0 right-1.5 flex items-center justify-center">
									<p className="text-2xl font-black text-white">{index + 1}</p>
								</div>
							</>
						)}
					</div>
				)}

				<div className="absolute inset-x-0 bottom-0">
					<div className="mx-4">
						<div className="mx-7">
							<RichText.Content
								tagName="p"
								className="mb-2 text-xs font-semibold"
								value={category}
								style={{ color: categoryColor }}
							/>

							<RichText.Content
								tagName="p"
								className="mb-6 text-base font-semibold"
								value={title}
								style={{ color: titleColor }}
							/>
						</div>

						<a
							href={link.url}
							target={link.openInNewTab ? "_blank" : "_self"}
							rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
							className="no-underline"
						>
							<button
								className="relative w-full rounded-xl px-7 py-4"
								type="button"
								aria-expanded="false"
								style={{ backgroundColor: buttonColor }}
							>
								<RichText.Content
									tagName="span"
									className="mx-auto text-base font-medium"
									value={buttonText}
									style={{ color: buttonTextColor }}
								/>
							</button>
						</a>

						<div className="py-5 text-center">
							<a
								href={link.url}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
								className="text-sm font-medium no-underline"
							>
								<RichText.Content
									tagName="span"
									value={review}
									style={{ color: reviewColor }}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
