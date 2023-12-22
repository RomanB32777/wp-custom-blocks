const attributes = {
	bonusLabel: {
		type: "string",
	},
	bonusLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	bonusBackgroundColor: {
		type: "string",
		default: "#a97bff",
	},
	bonusLabelColor: {
		type: "string",
		default: "#fff",
	},
	domain: {
		type: "string",
	},
	domainLink: {
		type: "object",
		default: {
			url: "#",
			openInNewTab: true,
		},
	},
	domainLinkColor: {
		type: "string",
		default: "#a97bff",
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
	backgroundColor: {
		type: "string",
		default: "#fff",
	},
	borderColor: {
		type: "string",
		default: "#bdabda",
	},
	paymentBackgroundColor: {
		type: "string",
		default: "#f5eeff",
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
