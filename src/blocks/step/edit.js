import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
const { Fragment, useEffect } = wp.element;

const { __ } = wp.i18n;

import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { uniqueId, step, photo, title, description, isOnlyText } = attributes;

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "step-" + clientId.slice(0, 8),
			});
		}
	}, []);

	// Block Props
	const blockProps = useBlockProps({
		className: uniqueId,
	});

	const getDescriptionClassNames = () => {
		const classNames = ["description"];

		if (isOnlyText) {
			classNames.push("border");
		}

		return classNames.join(" ");
	};

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			{photo && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										photo: media,
									})
								}
								allowedTypes={["image"]}
								value={photo && photo.id}
								render={({ open }) => {
									return (
										<ToolbarButton
											label={__("Edit Logo", "top-blocks")}
											onClick={open}
											icon="edit"
										/>
									);
								}}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				</BlockControls>
			)}
			<div {...blockProps}>
				<span className="step">{step}</span>
				<RichText
					tagName="h5"
					className="title"
					value={title}
					onChange={(v) => setAttributes({ title: v })}
					placeholder={__("step text..", "top-blocks")}
				/>
				<RichText
					tagName="p"
					className={getDescriptionClassNames()}
					value={description}
					onChange={(v) => setAttributes({ description: v })}
					placeholder={__("description..", "top-blocks")}
				/>
				{!isOnlyText && (
					<div className="photo">
						{photo ? (
							<img src={photo.url} alt={photo.alt || title} />
						) : (
							<MediaPlaceholder
								onSelect={(media) =>
									setAttributes({
										photo: media,
									})
								}
								allowedTypes={["image"]}
								multiple={false}
								labels={{
									title: __("Logo", "top-blocks"),
									instructions: __("Upload your company logo", "top-blocks"),
								}}
								icon={"format-image"}
							/>
						)}
					</div>
				)}
			</div>
		</Fragment>
	);
}
