

function authAction(event) {
	const login = document.getElementById('login').value;
	const password = document.getElementById('password').value;

	if (login === "admin" && password === "123") {
		window.history.pushState({}, "", '/GTAlanding/lk.html');
		document.location.reload();
	}
	else {
		document.querySelector('.error').style.visibility = "visible";
	}
	event.preventDefault();
}

const form = document.querySelector('.auth-form');
form.addEventListener('submit', authAction)