const header = document.querySelector('header')
const burger = document.querySelector(".burger");

window.addEventListener("scroll", (event) => {
	if (this.scrollY !== 0) {
		header.style.background = "#2f51cc7a";
		burger.style.setProperty("--color", "rgba(255,255,255, 1)");
	}
	else {
		header.style.background= "var(--bg-color-light)";
		burger.style.setProperty("--color", "#4e4e4e");
	}
});