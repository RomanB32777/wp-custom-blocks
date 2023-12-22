import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const { Fragment, useEffect } = wp.element;
const { useSelect } = wp.data;

import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes }) {
	const {
		description,
		author,
		backgroundColor,
		avatarColor,
		avatarBorderColor,
		descriptionColor,
	} = attributes;

	const authorId = useSelect(
		(select) => select("core/editor").getCurrentPostAttribute("author"),
		[]
	);

	const authorInfo = useSelect(
		(select) => select("core").getUser(authorId),
		[authorId]
	);

	useEffect(() => {
		setAttributes({ author: authorInfo });
	}, [authorInfo, setAttributes]);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps()}
				style={{
					backgroundColor,
				}}
			>
				{author && (
					<div className="avatar">
						<div
							className="border1"
							style={{ borderColor: avatarBorderColor }}
						></div>
						<div
							className="border2"
							style={{ borderColor: avatarBorderColor }}
						></div>
						<img
							src={author.avatar_urls?.[48]}
							alt={author.name}
							style={{
								background: avatarColor,
								borderColor: avatarBorderColor,
							}}
						/>
					</div>
				)}
				<RichText
					tagName="p"
					className="description"
					value={description}
					onChange={(v) => setAttributes({ description: v })}
					placeholder={__("Description..", "wp-custom-blocks")}
					style={{ color: descriptionColor }}
				/>
			</div>
		</Fragment>
	);
}
