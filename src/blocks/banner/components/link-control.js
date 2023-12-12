import { TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const { Fragment } = wp.element;

const LinkControl = ({ label, link, linkName, setAttributes }) => {
	const handleChangeLink = (v) => {
		setAttributes({
			[linkName]: { ...link, url: v },
		});
	};

	const handleChangeToggle = () => {
		setAttributes({
			[linkName]: { ...link, openInNewTab: !link.openInNewTab },
		});
	};

	return (
		<Fragment>
			<TextControl
				label={label}
				value={link && link.url}
				onChange={handleChangeLink}
			/>
			<ToggleControl
				label={__("Open in new tab", "top-blocks")}
				checked={link && link.openInNewTab}
				onChange={handleChangeToggle}
			/>
		</Fragment>
	);
};

export default LinkControl;
