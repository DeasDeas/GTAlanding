const header = document.querySelector('header')

const main = document.getElementById("main-btn");
const start = document.getElementById("start-btn");
const shop = document.getElementById("shop-btn");

window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;

	if (scroll !== 0) {
		header.style.background = "#2f51cc7a";
	}
	else {
		header.style.background= "var(--bg-color-light)";
	}

	if (scroll > 900 && scroll < 1300) {
		main.className = "button-like"
		start.className = "button-like"
		shop.className = "button-like"
		start.classList.add("button-like__selected")
	}
	else if (scroll >= 1300) {
		main.className = "button-like"
		start.className = "button-like"
		shop.className = "button-like"
		shop.classList.add("button-like__selected")
	}
	else {
		main.className = "button-like"
		start.className = "button-like"
		shop.className = "button-like"
		main.classList.add("button-like__selected")
	}
});