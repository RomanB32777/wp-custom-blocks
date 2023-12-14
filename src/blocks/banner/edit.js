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

const { Fragment, useState } = wp.element;
const { __ } = wp.i18n;

import { LinkControl, Payment } from "./components";

import appStoreImage from "./assets/appStore.png";
import googlePlayImage from "./assets/googlePlay.png";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		logo,
		bonusLabel,
		domain,
		domainLink,
		bonusLink,
		appleLink,
		googleLink,
		...payments
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);

	return (
		<Fragment>
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
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={__("Add Link", "top-blocks")}
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
								label={__("AppStore Link", "top-blocks")}
								setAttributes={setAttributes}
							/>
							<LinkControl
								link={googleLink}
								linkName="googleLink"
								label={__("Google Link", "top-blocks")}
								setAttributes={setAttributes}
							/>
							<LinkControl
								link={bonusLink}
								linkName="bonusLink"
								label={__("Button Link", "top-blocks")}
								setAttributes={setAttributes}
							/>
							<LinkControl
								link={domainLink}
								linkName="domainLink"
								label={__("Domain Link", "top-blocks")}
								setAttributes={setAttributes}
							/>
						</div>
					</Popover>
				)}
			</BlockControls>
			<div {...useBlockProps()}>
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
									title: __("Logo", "top-blocks"),
									instructions: __("Upload logo", "top-blocks"),
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

				<div className="bonus">
					<RichText
						tagName="p"
						value={bonusLabel}
						onChange={(v) => setAttributes({ bonusLabel: v })}
						placeholder={__("Bonus button text..", "top-blocks")}
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
							placeholder={__("Domain..", "top-blocks")}
						/>
					</div>
				</div>

				<div className="blocks">
					{Object.entries(payments).map(([name, { photo }], index) => (
						<Payment
							key={`${name}-${index}`}
							name={name}
							photo={photo}
							setAttributes={setAttributes}
						/>
					))}
				</div>
			</div>
		</Fragment>
	);
}
