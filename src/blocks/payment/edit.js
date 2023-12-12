import {
	useBlockProps,
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
	const { uniqueId, photo, name } = attributes;

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "payment-" + clientId.slice(0, 8),
			});
		}
	}, []);

	// Block Props
	const blockProps = useBlockProps({
		className: uniqueId,
	});

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
				<div className="photo">
					{photo ? (
						<img src={photo.url} alt={photo.alt || name} />
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
								instructions: __("Upload logo", "top-blocks"),
							}}
							icon="format-image"
						/>
					)}
				</div>
			</div>
		</Fragment>
	);
}
