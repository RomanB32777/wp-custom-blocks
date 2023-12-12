import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { uniqueId, step, photo, title, description, isOnlyText } =
		attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	const getDescriptionClassNames = () => {
		const classNames = ["description"];

		if (isOnlyText) {
			classNames.push("border");
		}

		return classNames.join(" ");
	};

	return (
		<div {...blockProps}>
			{step && <span className="step">{step}</span>}
			{title && (
				<RichText.Content tagName="h5" className="title" value={title} />
			)}
			{description && (
				<RichText.Content
					tagName="p"
					className={getDescriptionClassNames()}
					value={description}
				/>
			)}
			{photo && !isOnlyText && (
				<div className="photo">
					<img src={photo.url} alt={photo.alt || title} />
				</div>
			)}
		</div>
	);
}
