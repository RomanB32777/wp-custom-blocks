import React, { type FC } from "react";
import {
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import type { IImageAttributes } from "@/types";

import type { IPaymentAttributes } from "../attributes";

type TPaymentSave = Omit<IPaymentAttributes, "id">;

interface IPayment extends TPaymentSave {
	onChange: (media: IImageAttributes) => void;
	onDelete: () => void;
}

export const Payment: FC<IPayment> = ({ image, onChange, onDelete }) => {
	return (
		<div className="payment min-h-24 flex-auto relative md:!flex-1">
			<div className="absolute top-2 right-2 z-10">
				<ToolbarButton
					variant="primary"
					label={__("Delete payment", "wp-custom-blocks")}
					onClick={onDelete}
					icon="trash"
					placeholder={__("Delete payment", "wp-custom-blocks")}
				/>
			</div>
			<div className="photo h-full mx-auto max-w-28">
				{image.url ? (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onChange}
							allowedTypes={["image"]}
							value={image.id}
							render={({ open }) => {
								return (
									<Fragment>
										<img
											className="w-full !h-full object-contain"
											src={image.url}
											alt={image.alt}
											width={image.width}
											height={image.height}
										/>
										<div className="absolute bottom-2 right-2">
											<ToolbarButton
												variant="primary"
												label={__("Edit logo", "wp-custom-blocks")}
												onClick={open}
												icon="format-image"
												placeholder={__("Edit logo", "wp-custom-blocks")}
											/>
										</div>
									</Fragment>
								);
							}}
						/>
					</MediaUploadCheck>
				) : (
					<MediaPlaceholder
						onSelect={onChange}
						allowedTypes={["image"]}
						multiple={false}
						labels={{
							title: __("Logo", "wp-custom-blocks"),
							instructions: __("Upload logo", "wp-custom-blocks"),
						}}
						icon="format-image"
						onHTMLDrop={undefined}
					/>
				)}
			</div>
		</div>
	);
};

export const PaymentSave: FC<TPaymentSave> = ({ image }) => {
	return (
		<div className="payment flex-auto md:!flex-1">
			<div className="h-full mx-auto max-w-28">
				<img
					className="w-full h-full object-cover"
					src={image.url}
					alt={image.alt}
					width={image.width}
					height={image.height}
				/>
			</div>
		</div>
	);
};
