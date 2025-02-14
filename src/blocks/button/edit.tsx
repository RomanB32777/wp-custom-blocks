import React, { type FC } from "react";
import {
	BlockControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import { Popover, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { Fragment, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { LinkControl } from "@/controls";

import Inspector from "./inspector";
import type { IButtonBlockAttributes } from "./attributes";

const Edit: FC<BlockEditProps<IButtonBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		link,

		buttonText,
		buttonTextColor,
		buttonColor,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	const handleShowLinkPanel = () => showLinkPanel((prev) => !prev);

	const blockProps = useBlockProps({
		className: "item-button font-inter w-full text-center",
	});

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<BlockControls controls={undefined}>
				<Fragment>
					<ToolbarGroup>
						<ToolbarButton
							label={__("Add Link", "wp-custom-blocks")}
							onClick={handleShowLinkPanel}
							icon="admin-links"
							placeholder={__("Add Link", "wp-custom-blocks")}
						/>
					</ToolbarGroup>

					{linkPanel && (
						<Popover
							offset={5}
							position="bottom right"
							onFocusOutside={handleShowLinkPanel}
						>
							<LinkControl
								link={link}
								linkName="link"
								label={__("Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
						</Popover>
					)}
				</Fragment>
			</BlockControls>

			<div {...blockProps}>
				<button
					className="relative rounded-xl px-7 py-4"
					type="button"
					aria-expanded="false"
					style={{ backgroundColor: buttonColor }}
				>
					<RichText
						tagName="span"
						value={buttonText}
						style={{ color: buttonTextColor }}
						className="mx-auto text-base font-medium"
						placeholder={__("Button text..", "wp-custom-blocks")}
						onChange={(v) => setAttributes({ buttonText: v })}
					/>
				</button>
			</div>
		</Fragment>
	);
};

export default Edit;
