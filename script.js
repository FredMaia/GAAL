var darkModeBool = true;
function darkMode() {
  darkModeBool = !darkModeBool;
  if (darkModeBool) {
    document.body.style.background = "rgb(0, 15, 66)";
    document.body.style.color = "whitesmoke";
    document.getElementById("link1").style.color = "whitesmoke";
    document.getElementById("link2").style.color = "whitesmoke";
    document.getElementById("link3").style.color = "whitesmoke";
    document.body.style.transition = "0.2s"
  } else {
    document.body.style.background = "whitesmoke";
    document.body.style.color = "rgb(0, 15, 66)";
    document.getElementById("link1").style.color = "rgb(0, 15, 66)";
    document.getElementById("link2").style.color = "rgb(0, 15, 66)";
    document.getElementById("link3").style.color = "rgb(0, 15, 66)";
    document.body.style.transition = "0.2s";
  }
}