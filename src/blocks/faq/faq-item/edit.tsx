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
		style: { margin: 0 },
	});

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				<div
					className="question group border px-6 py-4 duration-200 cursor-pointer"
					data-question={index}
				>
					<div className="flex items-start justify-between">
						<RichText
							tagName="p"
							className="question-title font-lineSeedJp text-base basis-5/6"
							value={question}
							onChange={(v) => setAttributes({ question: v })}
							placeholder={__("Question..", "wp-custom-blocks")}
							style={{ color: !isParentStyles ? questionColor : undefined }}
						/>
						<div className="flex justify-end basis-1/6">
							<div className="arrow-wrapper duration-200 rotate-0">
								<div className="flex items-center cursor-pointer">
									<div className="more-arrow w-6 h-6 rounded-full flex items-center justify-center">
										<svg
											width="6"
											height="8"
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
							</div>
						</div>
					</div>
					<RichText
						tagName="p"
						className="question-content font-lineSeedJp text-base mt-4"
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
