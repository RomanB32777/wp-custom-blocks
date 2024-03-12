import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import {
	attributes as defaultAttributes,
	type IBannerBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IBannerBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<PanelBody title={__("Colors", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="backgroundColor"
					label={__("Background Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="borderColor"
					label={__("Border Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="bonusLabelColor"
					label={__("Bonus Label Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="bonusBackgroundColor"
					label={__("Bonus Background Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="domainLinkColor"
					label={__("Domain Link Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="paymentBackgroundColor"
					label={__("Payment Background Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
