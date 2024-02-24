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

	const blockProps = useBlockProps({
		className: "item-button w-full text-center",
	});

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<BlockControls controls={undefined}>
				<Fragment>
					<ToolbarGroup>
						<ToolbarButton
							label={__("Add Link", "wp-custom-blocks")}
							onClick={() => showLinkPanel(true)}
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
								label={__("Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
						</Popover>
					)}
				</Fragment>
			</BlockControls>

			<div {...blockProps}>
				<button
					className="relative rounded-lg py-4 px-7"
					type="button"
					aria-expanded="false"
					style={{ backgroundColor: buttonColor }}
				>
					<RichText
						tagName="span"
						className="font-roboto text-base font-medium mx-auto"
						value={buttonText}
						onChange={(v) => setAttributes({ buttonText: v })}
						placeholder={__("Button text..", "wp-custom-blocks")}
						style={{ color: buttonTextColor }}
					/>
				</button>
			</div>
		</Fragment>
	);
};

export default Edit;
