import {
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";

const { Fragment } = wp.element;
const { __ } = wp.i18n;

export const Payment = ({ name, photo, setAttributes }) => {
	return (
		<Fragment>
			<div className="payment">
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
												label={__("Edit Logo", "top-blocks")}
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
};
