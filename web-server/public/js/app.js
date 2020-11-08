console.log("js loaded");

const weatherForm = document.querySelector("form");
const userSearch = document.querySelector("input");
let messageOne = document.querySelector("#message-1");
let message2 = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  messageOne.textContent = "";
  message2.textContent = "";
  const location = userSearch.value;
  console.log(location);

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = "wrong parameter";
      }
      console.log(data.forecast.data);
      message2.textContent = data.forecast.data;
    });
  });
});
