/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { description, author } = attributes;

	return (
		<div {...useBlockProps.save()}>
			{author && (
				<div className="avatar">
					<img src={author.avatar_urls?.[48]} alt={author.name} />
				</div>
			)}
			<RichText.Content
				tagName="p"
				className="description"
				value={description}
			/>
		</div>
	);
}
