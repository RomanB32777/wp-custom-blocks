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

import {
	attributes as defaultAttributes,
	type IStepsBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<IStepsBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const { isOnlyText } = attributes;

	const toggleHandler = () => {
		const newStatus = !isOnlyText;

		setAttributes({ isOnlyText: newStatus });

		if (clientId) {
			dispatch("core/block-editor").updateBlockAttributes(clientId, {
				isOnlyText: newStatus,
			});
		}
	};

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
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
					name="mainColor"
					label={__("Main Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="stepColor"
					label={__("Step Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="titleColor"
					label={__("Title Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="descriptionColor"
					label={__("Description Color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				{isOnlyText && (
					<Fragment>
						<CardDivider />
						<ColorControl
							name="borderColor"
							label={__("Border Color", "wp-custom-blocks")}
							{...colorControlProps}
						/>
					</Fragment>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
