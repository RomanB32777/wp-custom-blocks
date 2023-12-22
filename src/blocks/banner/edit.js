import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Popover } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const { Fragment, useState } = wp.element;

import { LinkControl, Payment } from "./components";
import Inspector from "./inspector";

import appStoreImage from "./assets/appStore.png";
import googlePlayImage from "./assets/googlePlay.png";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		logo,
		borderColor,
		backgroundColor,
		bonusLabel,
		bonusLabelColor,
		bonusBackgroundColor,
		domain,
		domainLink,
		domainLinkColor,
		bonusLink,
		appleLink,
		googleLink,
		paymentBackgroundColor,
		...payments
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			{logo && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										logo: media,
									})
								}
								allowedTypes={["image"]}
								value={logo && logo.id}
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
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={__("Add Link", "wp-custom-blocks")}
						onClick={() => showLinkPanel(true)}
						icon="admin-links"
					/>
				</ToolbarGroup>
				{linkPanel && (
					<Popover
						position="bottom right"
						onFocusOutside={() => showLinkPanel(false)}
						offset={5}
					>
						<div className="link-control">
							<LinkControl
								link={appleLink}
								linkName="appleLink"
								label={__("AppStore Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
							<LinkControl
								link={googleLink}
								linkName="googleLink"
								label={__("Google Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
							<LinkControl
								link={bonusLink}
								linkName="bonusLink"
								label={__("Button Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
							<LinkControl
								link={domainLink}
								linkName="domainLink"
								label={__("Domain Link", "wp-custom-blocks")}
								setAttributes={setAttributes}
							/>
						</div>
					</Popover>
				)}
			</BlockControls>
			<div
				{...useBlockProps()}
				style={{
					borderColor,
					backgroundColor,
				}}
			>
				<div className="banner-header">
					<div className="logo">
						{logo ? (
							<img src={logo.url} alt={logo.alt} />
						) : (
							<MediaPlaceholder
								onSelect={(media) =>
									setAttributes({
										logo: media,
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
					<div className="app-links">
						<span className="link">
							<img src={googlePlayImage} alt="GooglePlay" />
						</span>
						<span className="link">
							<img src={appStoreImage} alt="AppStore" />
						</span>
					</div>
				</div>

				<div
					className="bonus"
					style={{
						backgroundColor: bonusBackgroundColor,
					}}
				>
					<RichText
						tagName="p"
						value={bonusLabel}
						onChange={(v) => setAttributes({ bonusLabel: v })}
						placeholder={__("Bonus button text..", "wp-custom-blocks")}
						style={{
							color: bonusLabelColor,
						}}
					/>
				</div>

				<div className="content">
					<InnerBlocks
						renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					/>
				</div>

				<div className="additions">
					<div className="domain">
						<span>公式ウェブサイト: </span>
						<RichText
							tagName="span"
							value={domain}
							onChange={(v) => setAttributes({ domain: v })}
							placeholder={__("Domain..", "wp-custom-blocks")}
							style={{ color: domainLinkColor }}
						/>
					</div>
				</div>

				<div className="payments">
					{Object.entries(payments).map(([name, { photo }], index) => (
						<Payment
							key={`${name}-${index}`}
							name={name}
							photo={photo}
							backgroundColor={paymentBackgroundColor}
							setAttributes={setAttributes}
						/>
					))}
				</div>
			</div>
		</Fragment>
	);
}
