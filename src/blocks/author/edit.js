import { useBlockProps, RichText } from "@wordpress/block-editor";

const { useEffect } = wp.element;
const { useSelect } = wp.data;
const { __ } = wp.i18n;

export default function Edit({ attributes, setAttributes }) {
	const { description, author } = attributes;

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
		<div {...useBlockProps()}>
			{author && (
				<div className="avatar">
					<img src={author.avatar_urls?.[48]} alt={author.name} />
				</div>
			)}
			<RichText
				tagName="p"
				className="description"
				value={description}
				onChange={(v) => setAttributes({ description: v })}
				placeholder={__("Description..", "top-blocks")}
			/>
		</div>
	);
}
