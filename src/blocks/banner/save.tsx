import React, { type FC } from "react";
import classNames from "classnames";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";

import appStoreImage from "./assets/appStore.png";
import googlePlayImage from "./assets/googlePlay.png";
import type { IBannerBlockAttributes } from "./attributes";

const Save: FC<BlockSaveProps<IBannerBlockAttributes>> = ({ attributes }) => {
	const {
		uniqueId,
		logo,
		backgroundColor,
		domain,
		bonusLabel,
		bonusLink,
		bonusLabelColor,
		googleLink,
		appleLink,
		domainLink,
		payments,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classNames(
			uniqueId,
			"wp-custom-blocks-banner border rounded-lg px-4 pt-4 [&>*]:mb-5 md:!px-7 md:!pt-7"
		),
		style: {
			backgroundColor,
		},
	});

	return (
		<div {...blockProps}>
			<div className="flex flex-col justify-between items-center md:!flex-row">
				{logo.url && (
					<a
						href={domainLink.url}
						target={domainLink.openInNewTab ? "_blank" : "_self"}
						rel={domainLink.openInNewTab ? "noopener noreferrer" : "noopener"}
					>
						<img
							className="max-w-64 max-h-20"
							src={logo.url}
							alt={logo.alt || domain}
						/>
					</a>
				)}
				<div className="flex justify-between mt-5 gap-2 md:!mt-0">
					<a
						className="no-underline"
						href={googleLink.url}
						target={googleLink.openInNewTab ? "_blank" : "_self"}
						rel={googleLink.openInNewTab ? "noopener noreferrer" : "noopener"}
					>
						<img className="max-h-14" src={googlePlayImage} alt="GooglePlay" />
					</a>
					<a
						className="no-underline"
						href={appleLink.url}
						target={appleLink.openInNewTab ? "_blank" : "_self"}
						rel={appleLink.openInNewTab ? "noopener noreferrer" : "noopener"}
					>
						<img className="max-h-14" src={appStoreImage} alt="AppStore" />
					</a>
				</div>
			</div>

			{bonusLabel && (
				<a
					className="no-underline block"
					href={bonusLink.url}
					target={bonusLink.openInNewTab ? "_blank" : "_self"}
					rel={bonusLink.openInNewTab ? "noopener noreferrer" : "noopener"}
				>
					<div className="bonus-button p-4 text-center rounded-lg md:!p-6">
						<RichText.Content
							tagName="p"
							className="text-3xl font-bold md:!text-5xl"
							value={bonusLabel}
							style={{
								color: bonusLabelColor,
							}}
						/>
					</div>
				</a>
			)}

			<div className="[&>*]:my-7">{<InnerBlocks.Content />}</div>

			{domain && (
				<div>
					<span>Official website: </span>
					<a
						href={domainLink.url}
						target={domainLink.openInNewTab ? "_blank" : "_self"}
						rel={domainLink.openInNewTab ? "noopener noreferrer" : "noopener"}
					>
						<RichText.Content
							tagName="span"
							className="domain"
							value={domain}
						/>
					</a>
				</div>
			)}

			<div className="flex flex-wrap justify-between gap-2">
				{payments
					.filter(({ image }) => Boolean(image.url))
					.map(({ id, image }) => {
						return (
							<div className="payment rounded-lg flex-auto md:!flex-1" key={id}>
								<div className="h-full mx-auto max-w-28">
									<img
										className="w-full h-full object-cover"
										src={image.url}
										alt={image.alt}
									/>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Save;
