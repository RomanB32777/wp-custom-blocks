export const initFaq = () => {
	const wrapper = document.querySelector(".questions");

	if (!wrapper) {
		return;
	}

	const questions = wrapper.querySelectorAll<HTMLDivElement>(".question");
	const questionContents = wrapper.querySelectorAll(".question-content");

	const changeStateOfQuestion = (questionEl: HTMLDivElement | null) => {
		if (!questionEl) {
			return;
		}

		const title = questionEl.querySelector(".question-title");
		const arrowWrapper = questionEl.querySelector(".arrow-wrapper");
		const questionContent = questionEl.querySelector(".question-content");

		if (arrowWrapper) {
			arrowWrapper.classList.toggle("text-grizzly-dark");
			arrowWrapper.classList.toggle("text-white");
			arrowWrapper.classList.toggle("rotate-0");
			arrowWrapper.classList.toggle("-rotate-90");

			const arrow = arrowWrapper.querySelector(".more-arrow");
			arrow?.classList.toggle("active");
		}

		questionContent?.classList.toggle("hidden");
		title?.classList.toggle("font-semibold");
	};

	const itemHandler = (questionEl: HTMLDivElement | null) => {
		const questionContent = questionEl.querySelector(".question-content");

		changeStateOfQuestion(questionEl);
		questionEl.classList.toggle("active");

		questions.forEach((el) => {
			if (el !== questionEl && el.classList.contains("active")) {
				changeStateOfQuestion(el);

				el.classList.toggle("active");
			}
		});

		questionContents.forEach((el) => {
			if (el !== questionContent) {
				el.classList.add("hidden");
			}
		});
	};

	if (questions.length) {
		itemHandler(questions[0]);
	}

	questions.forEach((question) => {
		question.addEventListener("click", () => itemHandler(question));
	});
};

initFaq();
