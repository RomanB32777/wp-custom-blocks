import React, { type FC } from "react";
import type { BlockEditProps } from "@wordpress/blocks";
import { TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import type { ILinkAttributes } from "@/types";

interface ILinkControlProps
	extends Pick<
		BlockEditProps<Record<string, ILinkAttributes>>,
		"setAttributes"
	> {
	link: ILinkAttributes;
	linkName: string;
	label?: string;
}

export const LinkControl: FC<ILinkControlProps> = ({
	label,
	link,
	linkName,
	setAttributes,
}) => {
	const handleChangeLink = (url: string) => {
		setAttributes({
			[linkName]: { ...link, url },
		});
	};

	const handleChangeToggle = () => {
		setAttributes({
			[linkName]: { ...link, openInNewTab: !link.openInNewTab },
		});
	};

	return (
		<div className="w-72 p-2">
			<TextControl label={label} value={link.url} onChange={handleChangeLink} />
			<ToggleControl
				label={__("Open in new tab", "wp-custom-blocks")}
				checked={link && link.openInNewTab}
				onChange={handleChangeToggle}
			/>
		</div>
	);
};
