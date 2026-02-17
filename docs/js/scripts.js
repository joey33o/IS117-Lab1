const button = document.getElementById("myButton");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "Nice! Javascript changed this.";
  });
}
