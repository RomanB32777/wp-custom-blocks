import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		uniqueId,
		step,
		photo,
		title,
		description,
		mainColor,
		titleColor,
		descriptionColor,
		stepColor,
		borderColor,
		isOnlyText,
	} = attributes;

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
			<div
				className="line"
				style={{
					backgroundColor: mainColor,
				}}
			></div>
			{step && (
				<span className="step" style={{ background: mainColor, color: stepColor }}>
					{step}
				</span>
			)}
			{title && (
				<RichText.Content
					tagName="h5"
					className="title"
					value={title}
					style={{ color: titleColor }}
				/>
			)}
			{description && (
				<RichText.Content
					tagName="p"
					className={getDescriptionClassNames()}
					value={description}
					style={{
						color: descriptionColor,
						borderColor: isOnlyText ? borderColor : null,
					}}
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
