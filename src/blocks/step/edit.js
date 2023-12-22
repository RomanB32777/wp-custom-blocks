import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const { Fragment, useEffect } = wp.element;

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		step,
		photo,
		title,
		description,
		mainColor,
		titleColor,
		descriptionColor,
		stepColor,
		borderColor,
		isOnlyText,
	} = attributes;

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

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "step-" + clientId.slice(0, 8),
			});
		}
	}, []);

	return (
		<Fragment>
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
											label={__("Edit Logo", "wp-custom-blocks")}
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
				<div
					className="line"
					style={{
						backgroundColor: mainColor,
					}}
				></div>
				<span
					className="step"
					style={{ background: mainColor, color: stepColor }}
				>
					{step}
				</span>
				<RichText
					tagName="h5"
					className="title"
					value={title}
					onChange={(v) => setAttributes({ title: v })}
					placeholder={__("step text..", "wp-custom-blocks")}
					style={{ color: titleColor }}
				/>
				<RichText
					tagName="p"
					className={getDescriptionClassNames()}
					value={description}
					onChange={(v) => setAttributes({ description: v })}
					placeholder={__("description..", "wp-custom-blocks")}
					style={{
						color: descriptionColor,
						borderColor: isOnlyText ? borderColor : null,
					}}
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
									title: __("Logo", "wp-custom-blocks"),
									instructions: __(
										"Upload your company logo",
										"wp-custom-blocks"
									),
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
