var balls = document.getElementsByClassName("ball");
document.addEventListener("mousemove",function(event) {
    followMouse(event);
});
function changeOptions(id) {
  var element = document.getElementById(id);
  var color = getColor(element.value);
  element.style.color = "white";
  element.style.backgroundColor = color;
}

function followMouse (event) {
  var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";
      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
      }
}

function getColor(colorValue) {
  switch (colorValue) {
    case "red":
      return "rgb(254,0,0)";
    case "blue":
      return "rgb(20, 73, 94)";
    case "green":
      return "rgb(137, 172, 118)"
    case "orange":
      return "rgb(255, 128, 0)"
    case "black":
      return "black";  
    default:
      return "gray";
  }
}

function updateColorComponents() {
  var newEyeColor = document.getElementById("eyeColor");
  var newBackgroundColor = document.getElementById("backgroundColor");
  console.log(getColor(newEyeColor.value));
  changeColorEyes(getColor(newEyeColor.value));
  changeColorBackground(getColor(newBackgroundColor.value));
}

function changeColorEyes(color) {
  color === "gray" ? color = "black":color = color;
  for (let i = 0; i < 2; i++) {
    balls[i].style.background = color;
  }
}

function changeColorBackground(color) {
  color === "gray" ? color = "rgb(20, 73, 94)" : color;
  var bodyTag = document.getElementsByTagName("body");
  bodyTag[0].style.background = color;
}


    