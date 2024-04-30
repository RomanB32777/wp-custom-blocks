import React, { type FC } from "react";
import classNames from "classnames";
import {
	BlockControls,
	InnerBlocks,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import {
	Button,
	Popover,
	ToolbarButton,
	ToolbarGroup,
} from "@wordpress/components";
import { select } from "@wordpress/data";
import { Fragment, useEffect, useRef, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { LinkControl } from "@/controls";
import type { IImageAttributes } from "@/types";
import { minifyCssStrings } from "@/utils/minify-css";

import appStoreImage from "./assets/appStore.png";
import googlePlayImage from "./assets/googlePlay.png";
import Inspector from "./inspector";
import type { IBannerBlockAttributes } from "./attributes";
import { Payment } from "./components";

const Edit: FC<BlockEditProps<IBannerBlockAttributes>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const {
		uniqueId,
		blockStyle,
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
		payments,
	} = attributes;

	const [linkPanel, showLinkPanel] = useState(false);
	const uniqKeys = useRef(new Set(payments.map((payment) => payment.id)));

	const childBlocks =
		select("core/block-editor").getBlocksByClientId(clientId)?.[0]?.innerBlocks;

	const blockProps = useBlockProps({
		className: classNames(
			uniqueId,
			"wp-custom-blocks-banner font-inter border rounded-xl p-4 [&>*:not(:last-child)]:mb-5 md:!py-7 md:!rounded-3xl"
		),
		style: {
			backgroundColor,
		},
	});

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: "banner-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, uniqueId, setAttributes]);

	useEffect(() => {
		setAttributes({
			childCount: childBlocks.length,
		});
	}, [childBlocks, setAttributes]);

	const handleAddPayment = () => {
		const newKey = String(Math.random());

		if (!uniqKeys.current.has(newKey)) {
			uniqKeys.current.add(newKey);

			setAttributes({
				payments: [...payments, { id: newKey, image: {} }],
			});
		}
	};

	const handleChangeImage = (id: string) => (media: IImageAttributes) => {
		const updatedPayments = payments.map((payment) => {
			if (payment.id === id) {
				return { ...payment, image: media };
			}

			return payment;
		});

		setAttributes({
			payments: updatedPayments,
		});
	};

	const handleDeletePayment = (id: string) => () => {
		uniqKeys.current.delete(id);

		setAttributes({
			payments: payments.filter((payment) => payment.id !== id),
		});
	};

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		.${uniqueId} {
			border-color: ${borderColor};
		}

		.${uniqueId} .bonus-button {
			background-color: ${bonusBackgroundColor};
		}

		.${uniqueId} .domain {
			color: ${domainLinkColor};
		}

		.${uniqueId} .payment {
			background-color: ${paymentBackgroundColor};
		}
	`;

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [blockStyle, blockStyleCss, setAttributes]);

	return (
		<Fragment>
			<style>{`${minifyCssStrings(blockStyleCss)}`}</style>

			<Inspector attributes={attributes} setAttributes={setAttributes} />

			{logo.id && (
				<BlockControls controls={[]}>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										logo: media,
									})
								}
								allowedTypes={["image"]}
								value={logo.id}
								render={({ open }) => {
									return (
										<ToolbarButton
											label={__("Edit Logo", "wp-custom-blocks")}
											placeholder={__("Edit Logo", "wp-custom-blocks")}
											onClick={open}
											icon="format-image"
										/>
									);
								}}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				</BlockControls>
			)}

			<BlockControls controls={[]}>
				<ToolbarGroup>
					<ToolbarButton
						label={__("Add Link", "wp-custom-blocks")}
						placeholder={__("Add Link", "wp-custom-blocks")}
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
					</Popover>
				)}
			</BlockControls>

			<div {...blockProps}>
				<div className="flex flex-col justify-between items-center md:!flex-row">
					<div className="logo">
						{logo.url ? (
							<img
								className="max-w-64 max-h-20"
								src={logo.url}
								alt={logo.alt}
								width={logo.width}
								height={logo.height}
							/>
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
								onHTMLDrop={undefined}
							/>
						)}
					</div>
					<div className="flex justify-between mt-5 gap-2 md:!mt-0">
						<img
							className="max-h-14"
							src={googlePlayImage}
							alt="Google Play"
							width="190"
							height="57"
						/>
						<img
							className="max-h-14"
							src={appStoreImage}
							alt="App Store"
							width="169"
							height="57"
						/>
					</div>
				</div>

				<div className="bonus-button p-4 text-center rounded-xl md:!p-6">
					<RichText
						tagName="p"
						className="p-0 m-0 text-5xl font-bold md:!text-3xl"
						value={bonusLabel}
						onChange={(v) => setAttributes({ bonusLabel: v })}
						placeholder={__("Bonus button text..", "wp-custom-blocks")}
						style={{
							color: bonusLabelColor,
						}}
					/>
				</div>

				<InnerBlocks />

				<div>
					<span>Official website: </span>
					<RichText
						tagName="span"
						value={domain}
						className="domain"
						onChange={(v) => setAttributes({ domain: v })}
						placeholder={__("Domain..", "wp-custom-blocks")}
					/>
				</div>

				<div className="flex flex-wrap justify-between gap-2">
					{payments.map(({ id, image }) => {
						return (
							<Payment
								key={id}
								image={image}
								onChange={handleChangeImage(id)}
								onDelete={handleDeletePayment(id)}
							/>
						);
					})}
				</div>

				<Button
					aria-pressed="mixed"
					variant="tertiary"
					label="Add new payment"
					icon="plus"
					onClick={handleAddPayment}
					showTooltip
				/>
			</div>
		</Fragment>
	);
};

export default Edit;
