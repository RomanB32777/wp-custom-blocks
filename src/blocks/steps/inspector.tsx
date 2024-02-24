import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { CardDivider, PanelBody, ToggleControl } from "@wordpress/components";
import { dispatch } from "@wordpress/data";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import type { IStepsBlockAttributes } from "./attributes";

const Inspector: FC<IInspectorProps<IStepsBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		isOnlyText,
		mainColor,
		stepColor,
		titleColor,
		descriptionColor,
		borderColor,
	} = attributes;

	const toggleHandler = () => {
		const newStatus = !isOnlyText;

		setAttributes({ isOnlyText: newStatus });

		if (clientId) {
			dispatch("core/block-editor").updateBlockAttributes(clientId, {
				isOnlyText: newStatus,
			});
		}
	};

	return (
		<InspectorControls>
			<PanelBody title={__("Block settings", "wp-custom-blocks")} initialOpen>
				<ToggleControl
					label={__("Only text", "wp-custom-blocks")}
					checked={isOnlyText}
					onChange={toggleHandler}
				/>
			</PanelBody>
			<PanelBody title={__("Step settings", "wp-custom-blocks")} initialOpen>
				<ColorControl
					label={__("Main Color", "wp-custom-blocks")}
					color={mainColor}
					onChange={(v) => setAttributes({ mainColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Step Color", "wp-custom-blocks")}
					color={stepColor}
					onChange={(v) => setAttributes({ stepColor: v })}
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
				{isOnlyText && (
					<Fragment>
						<CardDivider />
						<ColorControl
							label={__("Border Color", "wp-custom-blocks")}
							color={borderColor}
							onChange={(v) => setAttributes({ borderColor: v })}
						/>
					</Fragment>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
