/**
 * WordPress dependencies
 */
import {
	BaseControl,
	Flex,
	FlexBlock,
	FlexItem,
	ColorIndicator,
	ColorPicker,
	Popover,
	Button,
} from "@wordpress/components";
import { withInstanceId } from "@wordpress/compose";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { COLORS } from "./constants";

import "./color-control.scss";

const ColorControl = ({ label, color, onChange, instanceId }) => {
	const [colorPanel, setColorPanel] = useState(false);

	const id = `color-control-${instanceId}`;
	return (
		<div className="control-container color-control">
			<Flex>
				<FlexBlock>
					<BaseControl className="color-label" id={id} label={label} />
				</FlexBlock>
				<FlexItem>
					<Button
						icon="image-rotate"
						label={__("Reset", "wp-custom-blocks")}
						onClick={() => onChange("")}
						className={`reset-button ${color ? "active" : "disabled"}`}
					/>
				</FlexItem>
				<FlexItem>
					<button
						className="color-indicator"
						onClick={() => setColorPanel(true)}
					>
						<ColorIndicator colorValue={color} />
					</button>
					{colorPanel && (
						<Popover
							position="bottom right"
							onFocusOutside={() => setColorPanel(false)}
							offset={10}
						>
							<div className="color-panel">
								<ColorPicker
									color={color}
									onChangeComplete={(value) => onChange(value.hex)}
									disableAlpha={false}
								/>
								<div className="colors-palette">
									<label className="label mb-8" htmlFor="colors-palette">
										{__("Colors Palette", "wp-custom-blocks")}
									</label>
									<div id="colors-palette">
										{COLORS?.map((paletteColor, index) => {
											return (
												<ColorIndicator
													className={`color-indicator ${
														paletteColor.color === color ? "active" : ""
													}`}
													title={paletteColor.name}
													key={index}
													colorValue={paletteColor.color}
													onClick={() => onChange(paletteColor.color)}
												/>
											);
										})}
									</div>
								</div>
							</div>
						</Popover>
					)}
				</FlexItem>
			</Flex>
		</div>
	);
};

export default withInstanceId(ColorControl);
