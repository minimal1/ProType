/** @format */

const container: HTMLDivElement = document.querySelector(".calcContainer");

const output: HTMLInputElement = document.querySelector(".calc__output");
const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");

const handleBtnClick: (event: MouseEvent) => void = (event) => {
  const { target } = event;

  console.log(target);
};

const init: () => void = () => {
  btns.forEach((value: HTMLButtonElement) => {
    value.addEventListener("click", handleBtnClick);
  });
  output.value = "0";
};

if (container) {
  init();
}
