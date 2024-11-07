import React, { type FC } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import type { IFaqItemElementAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IFaqItemElementAttributes>> = ({
	attributes,
}) => {
	const {
		index,
		question,
		answer,
		isParentStyles,
		questionColor,
		answerColor,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div
				className="question group px-8 py-4 bg-white rounded-xl duration-200 cursor-pointer md:!px-4"
				data-question={index}
			>
				<div className="flex items-start justify-between">
					<RichText.Content
						tagName="h3"
						className="question-title text-lg font-medium basis-5/6 md:!text-2xl"
						value={question}
						style={{ color: !isParentStyles ? questionColor : undefined }}
					/>
					<div className="flex justify-end basis-1/6">
						<div className="arrow-wrapper duration-200 rotate-0">
							<div className="flex items-center p-2">
								<div className="more-arrow">
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.71429 7.71429V0H10.2857V7.71429H18V10.2857H10.2857V18H7.71429V10.2857H0V7.71429H7.71429Z"
											fill="currentColor"
										></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<RichText.Content
					tagName="p"
					className="question-content text-base hidden mt-3 md:!text-lg mt:mb-6"
					value={answer}
					style={{ color: !isParentStyles ? answerColor : undefined }}
				/>
			</div>
		</div>
	);
};

export default Save;
