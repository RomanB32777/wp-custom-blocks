import React from "react";
/**
 * WordPress dependencies
 */
import classNames from "classnames";
import type { BlockEditProps } from "@wordpress/blocks";
import {
	BaseControl,
	Button,
	ColorIndicator,
	ColorPicker,
	Flex,
	FlexBlock,
	FlexItem,
	Popover,
} from "@wordpress/components";
import { useInstanceId } from "@wordpress/compose"; // withInstanceId
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import type { TBlockAttributes } from "@/types";
import { getDefaultAttributeValue } from "@/utils/default-attribute-value";

import styles from "./color-control.module.scss";
/**
 * Internal dependencies
 */
import { COLORS } from "./constants";

interface IColorControlProps<T extends Record<keyof T, unknown>>
	extends Pick<BlockEditProps<T>, "attributes" | "setAttributes"> {
	name: keyof T;
	label?: string;
	disabled?: boolean;
	defaultAttributes: TBlockAttributes<T>;
}

export const ColorControl = <T extends Record<keyof T, unknown>>({
	label,
	name,
	disabled,
	attributes,
	defaultAttributes,
	setAttributes,
}: IColorControlProps<T>) => {
	const [colorPanel, setColorPanel] = useState(false);

	const instanceId = useInstanceId(ColorControl);

	const id = `color-control-${instanceId}`;

	const color = attributes[name] as string;

	const onChange = (v: string) => setAttributes({ [name]: v } as Partial<T>);

	return (
		<Flex>
			<FlexBlock>
				<BaseControl
					id={id}
					label={label}
					className={classNames(styles.label, "!mb-0")}
					__nextHasNoMarginBottom
					children=""
				/>
			</FlexBlock>
			<FlexItem>
				<Button
					icon="image-rotate"
					iconSize={14}
					label={__("Reset", "wp-custom-blocks")}
					disabled={disabled}
					size="small"
					onClick={() =>
						onChange(String(getDefaultAttributeValue(defaultAttributes, name)))
					}
					className={classNames(styles.reset, "w-3", {
						active: color,
						disabled: !color,
					})}
				/>
			</FlexItem>
			<FlexItem>
				<button
					disabled={disabled}
					className={classNames(styles.indicator, "w-6 h-6")}
					onClick={() => setColorPanel(true)}
				>
					<ColorIndicator colorValue={color} />
				</button>
				{colorPanel && (
					<Popover
						position="bottom right"
						onFocusOutside={() => setColorPanel(false)}
						offset={5}
					>
						<ColorPicker
							color={color}
							onChange={(value) => onChange(value)}
							enableAlpha
						/>
						<div className="px-3 pb-3">
							<label
								className="label inline-block mb-2"
								htmlFor="colors-palette"
							>
								{__("Colors Palette", "wp-custom-blocks")}
							</label>
							<div
								id="colors-palette"
								className="flex flex-wrap items-stretch justify-start gap-1"
							>
								{COLORS.map((paletteColor, index) => {
									return (
										<ColorIndicator
											className={classNames({
												active: paletteColor.color === color,
											})}
											title={paletteColor.name}
											key={index}
											colorValue={paletteColor.color}
											onClick={() => onChange(paletteColor.color)}
										/>
									);
								})}
							</div>
						</div>
					</Popover>
				)}
			</FlexItem>
		</Flex>
	);
};
