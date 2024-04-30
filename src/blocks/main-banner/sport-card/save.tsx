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

import { bannerSliderItemName } from "../constants";
import type { ISportCardElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<ISportCardElementAttributes>> = ({
	attributes,
}) => {
	const {
		name,
		nameColor,
		backgroundImg,
		link,
		icon,
		arrowColor,
		linkText,
		linkColor,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(bannerSliderItemName, "swiper-slide"),
	});

	return (
		<div {...blockProps}>
			<div className="group relative">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 h-96 lg:aspect-none">
					{backgroundImg.url && (
						<img
							className="h-full w-full object-cover object-center"
							src={backgroundImg.url}
							alt={backgroundImg.alt}
							width={backgroundImg.width}
							height={backgroundImg.height}
						/>
					)}
				</div>

				{linkText ? (
					<div className="absolute inset-0 flex items-center">
						<a
							href={link.url}
							target={link.openInNewTab ? "_blank" : "_self"}
							rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
							className="mx-auto text-primary font-black italic text-base uppercase no-underline"
						>
							<RichText.Content
								tagName="span"
								value={linkText}
								style={{ color: linkColor }}
							/>
						</a>
					</div>
				) : (
					<div className="absolute inset-x-0 bottom-0 bg-white mx-4 mb-4 rounded-lg lg:mx-6 lg:mb-6">
						<a
							href={link.url}
							target={link.openInNewTab ? "_blank" : "_self"}
							rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
							className="no-underline"
						>
							<div className="px-4 py-3 flex justify-between items-center">
								<div className="flex items-center">
									{icon.url && (
										<div className="bg-primary overflow-hidden rounded-md w-10 h-10 mr-3 p-2">
											<img
												className="h-full w-full object-cover object-center"
												src={icon.url}
												alt={icon.alt}
												width={icon.width}
												height={icon.height}
											/>
										</div>
									)}
									<RichText.Content
										tagName="p"
										className="text-sm font-semibold italic lg:text-lg"
										value={name}
										style={{ color: nameColor }}
									/>
								</div>
								<div className="rotate-6" style={{ color: arrowColor }}>
									<svg
										width="9"
										height="13"
										viewBox="0 0 6 8"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.25557 4.39741L2.06807 7.58491C1.84775 7.80523 1.4915 7.80523 1.27354 7.58491L0.743848 7.05523C0.523535 6.83491 0.523535 6.47866 0.743848 6.26069L3.00322 4.00132L0.743848 1.74194C0.523535 1.52163 0.523535 1.16538 0.743848 0.947412L1.27119 0.413037C1.4915 0.192725 1.84775 0.192725 2.06572 0.413037L5.25322 3.60054C5.47588 3.82085 5.47588 4.1771 5.25557 4.39741Z"
											fill="currentColor"
										></path>
									</svg>
								</div>
							</div>
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Save;
