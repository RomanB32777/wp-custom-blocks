interface IFaqSchemaItem {
	"@type": "Question";
	name: string;
	acceptedAnswer: {
		"@type": "Answer";
		text: string;
	};
}

interface IFaqSchema {
	"@context": "https://schema.org";
	"@type": "FAQPage";
	mainEntity: IFaqSchemaItem[];
}

const initFaq = (wrapper: HTMLDivElement) => {
	if (!wrapper) {
		return;
	}

	const isOpenDefault =
		wrapper.getAttribute("data-faq-open-default") === "true";
	const isOpenMultiple =
		wrapper.getAttribute("data-faq-open-multiple") === "true";

	const questions = wrapper.querySelectorAll<HTMLDivElement>(".question");
	const questionContents = wrapper.querySelectorAll(".question-content");

	const getQuestionContent = (questionEl: HTMLDivElement | null) => {
		if (!questionEl) {
			return {};
		}

		const title = questionEl.querySelector(".question-title");
		const arrowWrapper = questionEl.querySelector(".arrow-wrapper");
		const questionContent = questionEl.querySelector(".question-content");

		return { title, arrowWrapper, questionContent };
	};

	const changeStateOfQuestion = (questionEl: HTMLDivElement | null) => {
		if (!questionEl) {
			return;
		}

		const { title, arrowWrapper, questionContent } =
			getQuestionContent(questionEl);

		if (arrowWrapper) {
			arrowWrapper.classList.toggle("rotate-45");

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

		if (!isOpenMultiple) {
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
		}
	};

	if (questions.length) {
		const scriptElement = document.createElement("script");

		scriptElement.type = "application/ld+json";
		scriptElement.className = "custom-faq-schema";

		const faqData: IFaqSchema = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: [],
		};

		questions.forEach((question) => {
			const { title, questionContent } = getQuestionContent(question);

			if (title && questionContent) {
				faqData.mainEntity.push({
					"@type": "Question",
					name: title.textContent,
					acceptedAnswer: {
						"@type": "Answer",
						text: questionContent.textContent,
					},
				});
			}
		});

		scriptElement.textContent = JSON.stringify(faqData);

		document.body.appendChild(scriptElement);

		if (isOpenDefault) {
			itemHandler(questions[0]);
		}
	}

	questions.forEach((question) => {
		question.addEventListener("click", () => itemHandler(question));
	});
};

const faqBlocks = document.querySelectorAll<HTMLDivElement>(".questions");

faqBlocks.forEach(initFaq);
