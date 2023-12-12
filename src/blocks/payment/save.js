import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { uniqueId, photo, name } = attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			{photo && (
				<div className="photo">
					<img src={photo.url} alt={photo.alt || name} />
				</div>
			)}
		</div>
	);
}
