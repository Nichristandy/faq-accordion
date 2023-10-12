// alert("hello");

const headers = document.getElementsByClassName("header");
const content = document.getElementsByClassName("content");
const chevron = document.getElementsByClassName("chevron");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    //   checking if the accordion is open or not

    // if the accordion is closed
    if (content[i].classList.contains("hidden")) {
      content[i].classList.remove("hidden");
      headers[i].classList.add("font-bold");
      chevron[i].classList.add("rotate-180");
    }
    // if the accordion is opened
    else {
      content[i].classList.add("hidden");
      headers[i].classList.remove("font-bold");
      chevron[i].classList.remove("rotate-180");
    }
  });
}
