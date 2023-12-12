const attributes = {
	description: {
		type: "string",
	},
	bonusLabel: {
		type: "string",
	},
	domain: {
		type: "string",
	},
	bonusLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	domainLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	googleLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	appleLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	logo: {
		type: "object",
	},
};

export default attributes;
