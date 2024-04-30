import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import { CardDivider, PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { TemplateWrapperInspector } from "@/components";
import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import {
	attributes as defaultAttributes,
	type ITableBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<ITableBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { borderRadius } = attributes;

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<TemplateWrapperInspector
			attributes={attributes}
			setAttributes={setAttributes}
			blockSettings={
				<>
					<RangeControl
						label={__("Block radius", "wp-custom-blocks")}
						value={borderRadius}
						onChange={(v) =>
							setAttributes({
								borderRadius: v,
							})
						}
						step={1}
						min={0}
						max={100}
						allowReset
						resetFallbackValue={Number(
							getDefaultAttributeValue(defaultAttributes, "borderRadius")
						)}
					/>
				</>
			}
		>
			<PanelBody
				title={__("Table item settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				<ColorControl
					name="backgroundColor"
					label={__("Background color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="columnColor"
					label={__("Column color", "wp-custom-blocks")}
					{...colorControlProps}
				/>

				<CardDivider />
				<ColorControl
					name="rowColor"
					label={__("Row color", "wp-custom-blocks")}
					{...colorControlProps}
				/>
			</PanelBody>
		</TemplateWrapperInspector>
	);
};

export default Inspector;
