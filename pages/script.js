function temp(value, unit1, unit2) {
  if (unit1 == "c" && unit2 == "k") {
    return value + 273.15;
  } else if (unit1 == "c" && unit2 == "f") {
    return (value * 9) / 5 + 32;
  } else if (unit1 == "k" && unit2 == "c") {
    return value - 273.15;
  } else if (unit1 == "k" && unit2 == "f") {
    return ((value - 273.15) * 9) / 5 + 32;
  } else if (unit1 == "f" && unit2 == "c") {
    return ((value - 32) * 5) / 9;
  } else if (unit1 == "f" && unit2 == "k") {
    return ((value - 32) * 5) / 9 + 273.15;
  } else if (unit1 == unit2) {
    return value;
  }
}
function check() {
  let unit1 = document.querySelector(".unit1").value;
  let unit2 = document.querySelector(".unit2").value;
  let value = parseInt(document.querySelector(".value").value);
  document.querySelector(".result").value = temp(value, unit1, unit2).toFixed(
    2
  );
}
function reset() {
  document.querySelector(".unit1").value = "kg";
  document.querySelector(".unit2").value = "cm";
  document.querySelector(".value").value = 0;
  document.querySelector(".result").value = 0;
  document.getElementById("result").innerText = 0;
  document.getElementById("box").style.boxShadow = "none";
}