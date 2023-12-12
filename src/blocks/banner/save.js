/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

import appStoreImage from "./assets/appStore.png";
import googlePlayImage from "./assets/googlePlay.png";

export default function save({ attributes }) {
	const {
		logo,
		description,
		domain,
		bonusLabel,
		bonusLink,
		googleLink,
		appleLink,
		domainLink,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="banner-header">
				{logo && (
					<div className="logo">
						{domainLink ? (
							<a
								href={domainLink && domainLink.url}
								target={
									domainLink && domainLink.openInNewTab ? "_blank" : "_self"
								}
								rel={
									domainLink && domainLink.openInNewTab
										? "noopener noreferrer"
										: "noopener"
								}
							>
								<img src={logo.url} alt={logo.alt || domain} />
							</a>
						) : (
							<img src={logo.url} alt={logo.alt || domain} />
						)}
					</div>
				)}
				<div className="app-links">
					{googleLink && (
						<a
							className="link"
							href={googleLink && googleLink.url}
							target={
								googleLink && googleLink.openInNewTab ? "_blank" : "_self"
							}
							rel={
								googleLink && googleLink.openInNewTab
									? "noopener noreferrer"
									: "noopener"
							}
						>
							<img src={googlePlayImage} alt="GooglePlay" />
						</a>
					)}
					{appleLink && (
						<a
							className="link"
							href={appleLink && appleLink.url}
							target={appleLink && appleLink.openInNewTab ? "_blank" : "_self"}
							rel={
								appleLink && appleLink.openInNewTab
									? "noopener noreferrer"
									: "noopener"
							}
						>
							<img src={appStoreImage} alt="AppStore" />
						</a>
					)}
				</div>
			</div>

			{bonusLabel && (
				<a
					className="link"
					href={bonusLink && bonusLink.url}
					target={bonusLink && bonusLink.openInNewTab ? "_blank" : "_self"}
					rel={
						bonusLink && bonusLink.openInNewTab
							? "noopener noreferrer"
							: "noopener"
					}
				>
					<div className="bonus">
						<RichText.Content tagName="p" value={bonusLabel} />
					</div>
				</a>
			)}

			{description && <p className="description">{description}</p>}

			<div className="additions">
				{domain && domainLink && (
					<div className="domain">
						<span>公式ウェブサイト: </span>
						<a
							className="domain-link"
							href={domainLink && domainLink.url}
							target={
								domainLink && domainLink.openInNewTab ? "_blank" : "_self"
							}
							rel={
								domainLink && domainLink.openInNewTab
									? "noopener noreferrer"
									: "noopener"
							}
						>
							<RichText.Content tagName="span" value={domain} />
						</a>
					</div>
				)}
			</div>
			<div className="blocks">{<InnerBlocks.Content />}</div>
		</div>
	);
}
