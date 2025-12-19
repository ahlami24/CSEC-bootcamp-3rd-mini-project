isOn = false;
function offMode() {
  if (isOn == false) {
    document.querySelector(".container").classList.add("night");
    document.querySelector("#body").classList.add("bnight");
    document.querySelector("#on-off").innerHTML = "ON";
    isOn = true;
  } else {
    document.querySelector(".container").classList.remove("night");
    document.querySelector("#body").classList.remove("bnight");
    document.querySelector("#on-off").innerHTML = "OFF";
    isOn = false;
  }
}
