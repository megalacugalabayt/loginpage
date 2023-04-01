let form = document.querySelector("form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	if (username.value === "kullaniciadi" && password.value === "sifre") {
		window.location.href = "anasayfa.html";
	} else {
		let error = document.createElement("p");
		error.textContent = "Kullanıcı adı veya şifre hatalı!";
		error.style.color = "red";
		form.appendChild(error);
	}
});
