import React, { type FC } from "react";
/**
 * WordPress dependencies
 */
import {
	Button,
	CardDivider,
	PanelBody,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { TemplateWrapperInspector } from "@/components";
import { ColorControl } from "@/controls";
import type { IInspectorProps } from "@/types";

import {
	attributes as defaultAttributes,
	type ICellValues,
	type ITableBlockAttributes,
} from "./attributes";

const Inspector: FC<IInspectorProps<ITableBlockAttributes>> = ({
	attributes,
	setAttributes,
}) => {
	const { columns, rows, isPreviewIcons } = attributes;
	const [uniqKeys, setUniqKeys] = useState(() => new Set(Object.keys(columns)));

	// const handleDeleteColumn = (column) => {
	// 	const uniqColumns = getSetFromArray();

	// 	uniqColumns.delete(column);

	// 	setAttributes({ columnKeys: Array.from(uniqColumns) });
	// };

	const handleAddColumn = () => {
		const newKey = String(Math.random());

		if (!uniqKeys.has(newKey)) {
			setUniqKeys(uniqKeys.add(newKey));

			const updatedRows = Object.entries(rows).map(([key, values]) => {
				const newCell: ICellValues = {
					column: "",
					value: "",
					icon: {},
				};

				return [
					key,
					{
						...values,
						[newKey]: newCell,
					},
				];
			});

			setAttributes({ rows: Object.fromEntries(updatedRows) });
			setAttributes({ columns: { ...columns, [newKey]: "" } });
		}
	};

	const handleChangeColumn = (columnKey: string) => (value: string) => {
		setAttributes({ columns: { ...columns, [columnKey]: value } });

		const updatedRows = Object.entries(rows).map(([key, values]) => {
			const cell = rows[key]?.[columnKey];
			const newValues = {
				...values,
				[columnKey]: {
					...cell,
					column: value,
				},
			};

			return [key, newValues];
		});

		setAttributes({ rows: Object.fromEntries(updatedRows) });
	};

	const colorControlProps = {
		attributes,
		defaultAttributes,
		setAttributes,
	};

	return (
		<TemplateWrapperInspector
			attributes={attributes}
			defaultAttributes={defaultAttributes}
			setAttributes={setAttributes}
			blockSettings={
				<ToggleControl
					label={__("Preview loading icons", "wp-custom-blocks")}
					checked={isPreviewIcons}
					onChange={() => setAttributes({ isPreviewIcons: !isPreviewIcons })}
				/>
			}
		>
			<PanelBody
				title={__("Table settings", "wp-custom-blocks")}
				initialOpen={true}
			>
				{Array.from(uniqKeys).map((columnKey, index) => (
					<TextControl
						key={columnKey}
						label={`column ${index + 1}`}
						onChange={handleChangeColumn(columnKey)}
						value={columns[columnKey]}
					/>
				))}

				<Button variant="primary" onClick={handleAddColumn}>
					Add new column
				</Button>
			</PanelBody>

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
