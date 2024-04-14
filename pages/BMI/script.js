
function compute() {
  let unit1 = document.querySelector(".unit1").value;
  let unit2 = document.querySelector(".unit2").value;
  let wt = parseInt(document.querySelector(".wt").value);
  let ht = document.querySelector(".ht").value;
  let bmiCal = bmi(unit1, unit2, wt, ht).toFixed(1);
  document.getElementById("result").innerText = bmiCal;

  if (bmiCal > 0 && bmiCal < 18.5) {
    document.getElementById("resultWordP").innerText = "Underweight";
    document.getElementById("resultWord").style.width = "150px";
    document.getElementById("box").style.boxShadow = "0px 0px 20px 2px turquoise";
  } else if (bmiCal >= 18.5 && bmiCal <= 24.9) {
    document.getElementById("resultWordP").innerText = "Normal";
    document.getElementById("resultWord").style.width = "150px";
    document.getElementById("box").style.boxShadow = "0px 0px 20px 5px green";
  } else if (bmiCal > 25 && bmiCal < 29.9) {
    document.getElementById("resultWordP").innerText = "Overweight";
    document.getElementById("resultWord").style.width = "150px";
    document.getElementById("box").style.boxShadow = "0px 0px 20px 2px yellow";
  }
  else if (bmiCal > 30 && bmiCal < 100) {
    document.getElementById("resultWordP").innerText = "Obesily";
    document.getElementById("resultWord").style.width = "150px";
    document.getElementById("box").style.boxShadow = "0px 0px 20px 2px red";
  }
}

function bmi(unit1, unit2, wt, ht) {
  if (unit1 == "lb") {
    wt = wt / 2.205;
    // pounds to kg
  }

  if (unit2 == "cm") {
    ht = ht / 100;
    // cm to meters
  }

  if (unit2 == "f") {
    ht = ht / 3.281;
    // feet to meters
  }

  if (unit2 == "i") {
    ht = ht * 0.0254;
    // inches to meters
  }

  const bm = wt / ht ** 2;

  if (bm <= 0 || bm >= 50 || (wt == 0 && ht == 0)) {
    alert("Enter Valid Parameters");
    return 0;
  } else {
    return bm;
  }
}

function reset() {
  document.querySelector(".unit1").value = "kg";
  document.querySelector(".unit2").value = "cm";
  document.querySelector(".wt").value = 0;
  document.querySelector(".ht").value = 0;
  document.getElementById("resultWordP").innerText = "Health";
  document.getElementById("result").innerText = 0;
  document.getElementById("box").style.boxShadow = "none";
}


