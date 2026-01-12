const button = document.querySelector("#sayHello");

button.addEventListener("click", sayHello);

function sayHello() {
  document.getElementById("message").innerHTML = "Hello World";
}