import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const { dispatch, useSelect } = wp.data;
const { Fragment, useEffect } = wp.element;

import Inspector from "./inspector";

const allowedBlocks = ["wp-custom-block/step"];

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		stepsMainColor,
		stepsStepColor,
		stepsTitleColor,
		stepsDescriptionColor,
		stepsBorderColor,
		isOnlyText,
	} = attributes;

	const childBlocks = useSelect(
		(select) => {
			const blocks = select("core/block-editor").getBlocksByClientId(clientId);

			if (!blocks.length) {
				return [];
			}

			return blocks[0].innerBlocks;
		},
		[clientId]
	);

	useEffect(() => {
		childBlocks.forEach((block, index) => {
			dispatch("core/editor").updateBlockAttributes(block.clientId, {
				mainColor: stepsMainColor,
				stepColor: stepsStepColor,
				titleColor: stepsTitleColor,
				descriptionColor: stepsDescriptionColor,
				borderColor: stepsBorderColor,
				isOnlyText,
				step: index + 1,
			});
		});
	}, [
		childBlocks,
		isOnlyText,
		stepsMainColor,
		stepsStepColor,
		stepsTitleColor,
		stepsDescriptionColor,
		stepsBorderColor,
	]);

	return (
		<Fragment>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<div {...useBlockProps()}>
				<div className="blocks">
					<InnerBlocks
						allowedBlocks={allowedBlocks}
						template={[allowedBlocks]}
						renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					/>
				</div>
			</div>
		</Fragment>
	);
}
