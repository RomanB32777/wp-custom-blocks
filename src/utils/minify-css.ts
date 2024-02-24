/* eslint-disable no-useless-escape */
export const minifyCssStrings = (cssString = " ") =>
	cssString
		.replace(/\s+/g, " ")
		.replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, "");
