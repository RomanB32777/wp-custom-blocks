export const hexToRgb = (hex: string) => {
	const aRgbHex = hex.match(/.{1,2}/g);

	if (!aRgbHex || aRgbHex?.length < 3) {
		return [];
	}

	return aRgbHex.map((i) => parseInt(i, 16));
};
