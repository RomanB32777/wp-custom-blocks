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
	mainColor: {
		type: "string",
		default: "#a689ff",
	},
	titleColor: {
		type: "string",
		default: "#1c1230",
	},
	descriptionColor: {
		type: "string",
		default: "#343741",
	},
	stepColor: {
		type: "string",
		default: "#fff",
	},
	borderColor: {
		type: "string",
		default: "#bdabda",
	},
	isOnlyText: {
		type: "boolean",
	},
};

export default attributes;
