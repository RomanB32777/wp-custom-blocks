import {
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const { Fragment } = wp.element;

export const Payment = ({ name, photo, backgroundColor, setAttributes }) => {
	return (
		<Fragment>
			<div className="payment" style={{ backgroundColor }}>
				<div className="photo">
					{photo ? (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										[name]: { photo: media },
									})
								}
								allowedTypes={["image"]}
								value={photo && photo.id}
								render={({ open }) => {
									return (
										<Fragment>
											<img src={photo.url} alt={photo.alt || name} />
											<ToolbarButton
												containerClassName="edit"
												label={__("Edit Logo", "wp-custom-blocks")}
												onClick={open}
												icon="edit"
											/>
										</Fragment>
									);
								}}
							/>
						</MediaUploadCheck>
					) : (
						<MediaPlaceholder
							onSelect={(media) =>
								setAttributes({
									[name]: { photo: media },
								})
							}
							allowedTypes={["image"]}
							multiple={false}
							labels={{
								title: __("Logo", "wp-custom-blocks"),
								instructions: __("Upload logo", "wp-custom-blocks"),
							}}
							icon="format-image"
						/>
					)}
				</div>
			</div>
		</Fragment>
	);
};
