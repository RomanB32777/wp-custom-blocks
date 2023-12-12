const attributes = {
	uniqueID: {
		type: "string",
	},
	step: {
		type: "number",
		default: 1,
	},
	photo: {
		type: "object",
	},
	title: {
		type: "string",
	},
	description: {
		type: "string",
	},
	isOnlyText: {
		type: "boolean",
	},
};

export default attributes;
