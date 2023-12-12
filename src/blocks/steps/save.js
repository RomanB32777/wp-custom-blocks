/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title } = attributes;

	return (
		<div {...useBlockProps.save()}>
			{title && (
				<div className="space-block-title title relative">
					<span>{title}</span>
				</div>
			)}
			<div className="blocks">{<InnerBlocks.Content />}</div>
		</div>
	);
}
