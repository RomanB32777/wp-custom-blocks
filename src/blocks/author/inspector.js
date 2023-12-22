import { PanelBody, CardDivider } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import ColorControl from "../../controls/color-control";

const { InspectorControls } = wp.blockEditor;

const Inspector = ({ attributes, setAttributes }) => {
	const { backgroundColor, avatarColor, avatarBorderColor, descriptionColor } =
		attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Colors", "wp-custom-blocks")} initialOpen={true}>
				<ColorControl
					label={__("Background Color", "wp-custom-blocks")}
					color={backgroundColor}
					onChange={(v) => setAttributes({ backgroundColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Avatar Color", "wp-custom-blocks")}
					color={avatarColor}
					onChange={(v) => setAttributes({ avatarColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Avatar Border Color", "wp-custom-blocks")}
					color={avatarBorderColor}
					onChange={(v) => setAttributes({ avatarBorderColor: v })}
				/>
				<CardDivider />
				<ColorControl
					label={__("Description Color", "wp-custom-blocks")}
					color={descriptionColor}
					onChange={(v) => setAttributes({ descriptionColor: v })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
