export const initLightBoxes = () => {
	const modal = document.querySelector<HTMLDivElement>("#light-modal");
	const modalImg = modal.querySelector<HTMLImageElement>(
		"#light-modal-preview"
	);

	if (!modal && !modalImg) {
		return;
	}

	const slideImages =
		document.querySelectorAll<HTMLImageElement>(".light-modal-image");

	const modalClose =
		modal.querySelectorAll<HTMLButtonElement>(".light-modal-close");

	slideImages.forEach((el) => {
		el.addEventListener("click", () => {
			modal.classList.toggle("hidden");
			modalImg.src = el.src;
			modalImg.alt = el.alt;
		});
	});

	modalClose.forEach((el) =>
		el.addEventListener("click", () => {
			modal.classList.toggle("hidden");
		})
	);
};

initLightBoxes();
