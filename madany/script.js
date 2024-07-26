const oneWay = document.getElementById("oneway");
const roundTrip = document.getElementById("RoundTrip");
const returnFields = document.querySelector(".return-function");

let returnDisplay = false;

if (returnDisplay) {
  returnFields.style.display = "flex";
} else {
  returnFields.style.display = "none";
}

oneWay.addEventListener("click", function () {
  returnDisplay = false;
  returnFields.style.display = "none";
  console.log(returnFields.style);
});

roundTrip.addEventListener("click", function () {
  returnDisplay = true;
  returnFields.style.display = "flex ";
  // returnFields.style.flexWrap = "nowrap";
  returnFields.classList.add="col-sm-12 "
  console.log(returnFields.style);
});
