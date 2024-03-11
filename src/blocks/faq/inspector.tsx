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

import { type IFaqBlockAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IFaqBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const {
		backgroundColor,
		titleColor,
		descriptionColor,
		isParentStyles,
		questionColor,
		answerColor,
		activeColor,
		borderColor,
		arrowBackgroundColor,
		arrowColor,
		activeArrowColor,
	} = attributes;

	const [itemStyles, showItemStylesPanel] = useState(isParentStyles);

	useEffect(() => {
		showItemStylesPanel(isParentStyles);
	}, [isParentStyles]);

	return (
		<InspectorControls>
			<TipResponsive />

			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					label={__("Background Color", "wp-custom-blocks")}
					color={backgroundColor}
					onChange={(v) => setAttributes({ backgroundColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Title Color", "wp-custom-blocks")}
					color={titleColor}
					onChange={(v) => setAttributes({ titleColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Description Color", "wp-custom-blocks")}
					color={descriptionColor}
					onChange={(v) => setAttributes({ descriptionColor: v })}
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
					label={__("Question Color", "wp-custom-blocks")}
					color={questionColor}
					onChange={(v) => setAttributes({ questionColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Answer Color", "wp-custom-blocks")}
					color={answerColor}
					onChange={(v) => setAttributes({ answerColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Active Color", "wp-custom-blocks")}
					color={activeColor}
					onChange={(v) => setAttributes({ activeColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Border Color", "wp-custom-blocks")}
					color={borderColor}
					onChange={(v) => setAttributes({ borderColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Arrow background color", "wp-custom-blocks")}
					color={arrowBackgroundColor}
					onChange={(v) => setAttributes({ arrowBackgroundColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Arrow color", "wp-custom-blocks")}
					color={arrowColor}
					onChange={(v) => setAttributes({ arrowColor: v })}
				/>

				<CardDivider />
				<ColorControl
					label={__("Active arrow Color", "wp-custom-blocks")}
					color={activeArrowColor}
					onChange={(v) => setAttributes({ activeArrowColor: v })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
