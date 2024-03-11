import React, { type FC } from "react";
import { BlockControls, RichText } from "@wordpress/block-editor";
import type {
	Merged,
	Reserved,
} from "@wordpress/block-editor/components/use-block-props";
import type { BlockEditProps, BlockSaveProps } from "@wordpress/blocks";
import { Popover, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { LinkControl } from "@/controls";

import type { IBaseTemplateAttributes } from "./attributes";

interface ITemplateWrapperSave
	extends Omit<BlockSaveProps<IBaseTemplateAttributes>, "className"> {
	blockProps: Record<string, unknown>;
	children: React.ReactNode;
}

interface ITemplateWrapperEdit<Props>
	extends Pick<
		BlockEditProps<IBaseTemplateAttributes>,
		"attributes" | "setAttributes"
	> {
	blockProps: Omit<Props, "ref"> & Merged & Reserved;
	children: React.ReactNode;
}

export const TemplateWrapperEdit = <T,>({
	attributes: {
		title,
		titleColor,
		titleTag,
		description,
		descriptionColor,
		link,
		isWithLinkBlock,
		linkText,
		linkTextColor,
		linkBtnArrowColor,
		linkBackgroundBtnColor,
	},
	setAttributes,
	blockProps,
	children,
}: ITemplateWrapperEdit<T>) => {
	const [linkPanel, showLinkPanel] = useState(false);

	return (
		<Fragment>
			{isWithLinkBlock && (
				<BlockControls controls={undefined}>
					<Fragment>
						<ToolbarGroup>
							<ToolbarButton
								label={__("Add Link", "wp-custom-blocks")}
								onClick={() => showLinkPanel(!linkPanel)}
								icon="admin-links"
								placeholder={__("Add Link", "wp-custom-blocks")}
							/>
						</ToolbarGroup>
						{linkPanel && (
							<Popover
								position="bottom right"
								onFocusOutside={() => showLinkPanel(false)}
								offset={5}
							>
								<LinkControl
									link={link}
									linkName="link"
									label={__("More link", "wp-custom-blocks")}
									setAttributes={setAttributes}
								/>
							</Popover>
						)}
					</Fragment>
				</BlockControls>
			)}

			<div {...blockProps}>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="my-10 sm:my-20">
						<div className="flex justify-between items-center mb-8">
							<RichText
								tagName={titleTag}
								className="title font-notoSans italic"
								value={title}
								onChange={(v) => setAttributes({ title: v })}
								placeholder={__("Block title..", "wp-custom-blocks")}
								style={{ color: titleColor }}
							/>
							{isWithLinkBlock && (
								<div className="flex items-center cursor-pointer">
									<RichText
										tagName="span"
										className="font-notoSans hidden text-sm font-bold italic uppercase md:inline-block md:mr-3"
										value={linkText}
										onChange={(v) => setAttributes({ linkText: v })}
										placeholder={__("Link text..", "wp-custom-blocks")}
										style={{ color: linkTextColor }}
									/>
									<div
										className="more-arrow w-6 h-6 rounded-full flex items-center justify-center"
										style={{
											color: linkBtnArrowColor,
											background: linkBackgroundBtnColor,
										}}
									>
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
							)}
						</div>
						<RichText
							tagName="p"
							className="font-notoSans max-w-3xl text-base"
							value={description}
							onChange={(v) => setAttributes({ description: v })}
							placeholder={__("Block description..", "wp-custom-blocks")}
							style={{ color: descriptionColor }}
						/>
						{children}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export const TemplateWrapperSave: FC<ITemplateWrapperSave> = ({
	attributes: {
		title,
		titleColor,
		titleTag,
		description,
		descriptionColor,
		link,
		isWithLinkBlock,
		linkText,
		linkTextColor,
		linkBtnArrowColor,
		linkBackgroundBtnColor,
	},
	blockProps,
	children,
}) => {
	return (
		<div {...blockProps}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="my-10 sm:my-20">
					<div className="flex justify-between items-center mb-8">
						<RichText.Content
							tagName={titleTag}
							className="title font-notoSans italic"
							value={title}
							style={{ color: titleColor }}
						/>
						{isWithLinkBlock && (
							<a
								href={link.url}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={link.openInNewTab ? "noopener noreferrer" : "noopener"}
								className="no-underline"
							>
								<div className="flex items-center cursor-pointer">
									<RichText.Content
										tagName="span"
										className="font-notoSans hidden text-sm font-bold italic uppercase md:inline-block md:mr-3"
										value={linkText}
										style={{ color: linkTextColor }}
									/>
									<div
										className="more-arrow w-6 h-6 rounded-full flex items-center justify-center bg-white-light"
										style={{
											color: linkBtnArrowColor,
											backgroundColor: linkBackgroundBtnColor,
										}}
									>
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
							</a>
						)}
					</div>
					<RichText.Content
						tagName="p"
						className="font-notoSans max-w-3xl text-base"
						value={description}
						style={{ color: descriptionColor }}
					/>
					{children}
				</div>
			</div>
		</div>
	);
};
