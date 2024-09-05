export function getScrollBarWidth(current = false) {
	if (!current) document.body.style.setProperty("height", "200vh");
	const width = window.innerWidth - document.documentElement.clientWidth;
	document.body.style.removeProperty("height");

	return width;
}

export function setupScrollBarWidthCSSVariable() {
	window.onresize = () =>
		document.documentElement.style.setProperty(
			"--scrollbar-width",
			getScrollBarWidth() + "px"
		);
	window.onresize(new UIEvent("resize"));
}
