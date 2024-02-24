import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import type { IBannerBlockAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IBannerBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		borderColor,
		backgroundColor,
		bonusLabelColor,
		bonusBackgroundColor,
		domainLinkColor,
		paymentBackgroundColor,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Colors", "wp-custom-blocks")} initialOpen>
				<ColorControl
					label={__("Background Color", "wp-custom-blocks")}
					color={backgroundColor}
					onChange={(v) => setAttributes({ backgroundColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Border Color", "wp-custom-blocks")}
					color={borderColor}
					onChange={(v) => setAttributes({ borderColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Bonus Label Color", "wp-custom-blocks")}
					color={bonusLabelColor}
					onChange={(v) => setAttributes({ bonusLabelColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Bonus Background Color", "wp-custom-blocks")}
					color={bonusBackgroundColor}
					onChange={(v) => setAttributes({ bonusBackgroundColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Domain Link Color", "wp-custom-blocks")}
					color={domainLinkColor}
					onChange={(v) => setAttributes({ domainLinkColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Payment Background Color", "wp-custom-blocks")}
					color={paymentBackgroundColor}
					onChange={(v) => setAttributes({ paymentBackgroundColor: v })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
