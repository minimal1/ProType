/** @format */
var container = document.querySelector(".calcContainer");
var output = document.querySelector(".calc__output");
var btns = document.querySelectorAll("button");
var handleBtnClick = function (event) {
    var target = event.target;
    console.log(target);
};
var init = function () {
    btns.forEach(function (value) {
        value.addEventListener("click", handleBtnClick);
    });
    output.value = "0";
};
if (container) {
    init();
}
