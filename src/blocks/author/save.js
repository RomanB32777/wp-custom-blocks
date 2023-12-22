/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		description,
		author,
		backgroundColor,
		avatarColor,
		avatarBorderColor,
		descriptionColor,
	} = attributes;

	return (
		<div
			{...useBlockProps.save()}
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
			<RichText.Content
				tagName="p"
				className="description"
				value={description}
				style={{ color: descriptionColor }}
			/>
		</div>
	);
}
