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
		borderColor,
		backgroundColor,
		domain,
		bonusLabel,
		bonusLink,
		bonusLabelColor,
		bonusBackgroundColor,
		googleLink,
		appleLink,
		domainLink,
		domainLinkColor,
		paymentBackgroundColor,
		...payments
	} = attributes;

	return (
		<div
			{...useBlockProps.save()}
			style={{
				borderColor,
				backgroundColor,
			}}
		>
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
					<div
						className="bonus"
						style={{
							backgroundColor: bonusBackgroundColor,
						}}
					>
						<RichText.Content
							tagName="p"
							value={bonusLabel}
							style={{
								color: bonusLabelColor,
							}}
						/>
					</div>
				</a>
			)}

			<div className="content">{<InnerBlocks.Content />}</div>

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
							<RichText.Content
								tagName="span"
								value={domain}
								style={{ color: domainLinkColor }}
							/>
						</a>
					</div>
				)}
			</div>
			<div className="blocks">
				{payments &&
					Object.entries(payments)
						.filter(([, { photo }]) => Boolean(photo))
						.map(([name, { photo }], index) => (
							<div
								className="payment"
								key={`${name}-${index}`}
								style={{
									backgroundColor: paymentBackgroundColor,
								}}
							>
								<div className="photo">
									<img src={photo?.url} alt={photo?.alt || name} />
								</div>
							</div>
						))}
			</div>
		</div>
	);
}
