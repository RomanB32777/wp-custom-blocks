import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody, ToggleControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { TipResponsive } from "@/components";
import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import {
	attributes as defaultAttributes,
	type IFaqBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IFaqBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { isOpenDefault, isOpenMultiple, isParentStyles } = attributes;

	const [itemStyles, showItemStylesPanel] = useState(isParentStyles);

	useEffect(() => {
		showItemStylesPanel(isParentStyles);
	}, [isParentStyles]);

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<InspectorControls>
			<TipResponsive />

			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					name="titleColor"
					label={__("Title Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ToggleControl
					label={__("First element is open by default", "wp-custom-blocks")}
					checked={isOpenDefault}
					onChange={() => setAttributes({ isOpenDefault: !isOpenDefault })}
				/>

				<CardDivider />
				<ToggleControl
					label={__("Ability to open multiple items", "wp-custom-blocks")}
					checked={isOpenMultiple}
					onChange={() => setAttributes({ isOpenMultiple: !isOpenMultiple })}
				/>

				<CardDivider />
				<ToggleControl
					label={__("Parent styles", "wp-custom-blocks")}
					checked={isParentStyles}
					onChange={() => setAttributes({ isParentStyles: !isParentStyles })}
				/>
			</PanelBody>
			<PanelBody
				title={__("Items styles", "wp-custom-blocks")}
				initialOpen={itemStyles}
				opened={itemStyles}
				onToggle={() => showItemStylesPanel(!itemStyles)}
			>
				<ColorControl
					name="questionColor"
					label={__("Question Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="answerColor"
					label={__("Answer Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="activeColor"
					label={__("Active Color", "wp-custom-blocks")}
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
					name="arrowBackgroundColor"
					label={__("Arrow background color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="arrowColor"
					label={__("Arrow color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="activeArrowColor"
					label={__("Active arrow Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
