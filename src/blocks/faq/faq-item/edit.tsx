import React, { type FC } from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import Inspector from "./inspector";
import type { IFaqItemElementAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IFaqItemElementAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		index,
		question,
		answer,
		isParentStyles,
		questionColor,
		answerColor,
	} = attributes;

	const blockProps = useBlockProps({
		style: {
			margin: 0,
			maxWidth: "none",
		},
	});

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<div {...blockProps}>
				<div
					className="question group cursor-pointer rounded-xl bg-white p-4 duration-200"
					data-question={index}
				>
					<div className="flex items-start justify-between">
						<RichText
							tagName="h3"
							className="question-title basis-5/6 text-lg font-medium md:!text-2xl"
							value={question}
							onChange={(v) => setAttributes({ question: v })}
							placeholder={__("Question..", "wp-custom-blocks")}
							style={{ color: !isParentStyles ? questionColor : undefined }}
						/>

						<div className="flex basis-1/6 justify-end">
							<div className="arrow-wrapper rotate-0 duration-200">
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

					<RichText
						tagName="p"
						className="question-content mt:mb-6 mt-3 text-base md:!text-lg"
						value={answer}
						onChange={(v) => setAttributes({ answer: v })}
						placeholder={__("Answer..", "wp-custom-blocks")}
						style={{ color: !isParentStyles ? answerColor : undefined }}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
