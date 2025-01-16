let display = document.getElementById("display");
let button = document.querySelectorAll("button");
let arrBtns = Array.from(button);

let result = "";
arrBtns.forEach((currBtn) => {
  currBtn.addEventListener("click", (e) => {
    let btnValue = e.target.innerHTML;

    if (btnValue === "Del") {
      result = result.slice(0, -1);
      display.value = result;
    } else if (btnValue == "AC") {
      result = "";
      display.value = result;
    } else if (btnValue == "=") {
      result = eval(result);
      display.value = result;
    } else {
      result += btnValue;
      display.value = result;
    }
  });
});
