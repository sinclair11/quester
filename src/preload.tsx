// Get versions
window.addEventListener("DOMContentLoaded", () => {
	const replaceText = (selector: string, text: string): void => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	// Packages version
	for (const type of ["chrome", "node", "electron"]) {
		replaceText(
			`${type}-version`,
			process.versions[type as keyof typeof process.versions]
		);
	}
});
