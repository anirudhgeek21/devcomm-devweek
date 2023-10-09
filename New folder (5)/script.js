
var height, weight, bmi;

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  var a = document.querySelectorAll("input");
  weight = Number(a[0].value);
  height = Number(a[1].value);

  if (isNaN(weight) || isNaN(height)){
    alert("Enter a valid Number !!!");
  }
  else{
    bmi = weight / (height * height);
    document.querySelector(".result").innerHTML = "Your Bmi is : " + String(bmi);
  }
});
