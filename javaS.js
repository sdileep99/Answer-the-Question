let formEl = document.getElementById("questionsForm");
let resultEl = document.getElementById("resultMsg");

let hyderabadEl = document.getElementById("cityHyderabad");
let chennaiEl = document.getElementById("cityChennai");
let delhiEl = document.getElementById("cityDelhi");
let mumbaiEl = document.getElementById("cityMumbai");


let city = "";

hyderabadEl.addEventListener("change", function(event) {
    city = event.target.value;

});
chennaiEl.addEventListener("change", function(event) {
    city = event.target.value;
});
delhiEl.addEventListener("change", function(event) {
    city = event.target.value;
});
mumbaiEl.addEventListener("change", function(event) {
    city = event.target.value;
});


formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(city);
    if (city === "") {
        resultEl.textContent = "Please select the answer";
    } else {
        resultEl.textContent = "";
        if (city === "Delhi") {
            resultEl.textContent = "Correct answer";
            resultEl.style.color = "green";
        } else {
            resultEl.textContent = "Wrong answer!";
            resultEl.style.color = "red";
        }

    }
});
