const attributes = {
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
	payment1: {
		type: "object",
		default: {},
	},
	payment2: {
		type: "object",
		default: {},
	},
	payment3: {
		type: "object",
		default: {},
	},
	payment4: {
		type: "object",
		default: {},
	},
	payment5: {
		type: "object",
		default: {},
	},
	payment6: {
		type: "object",
		default: {},
	},
};

export default attributes;
