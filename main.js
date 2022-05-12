let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("rivers");
let boat6 = document.getElementById("boat");
let yathreb = document.querySelector(".yathreb");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  console.log("river", river);
  boat6.style.top = value + "px";
  boat6.style.left = value * 3 + "px";
  yathreb.style.fontSize = value + "px";
  console.log("fontsize", yathreb.style.fontSize);

  if (scrollY >= 67) {
    yathreb.style.fontSize = 67 + "px";
    yathreb.style.position = "fixed";
    if (scrollY >= 478) {
      yathreb.style.display = "none";
    } else {
      yathreb.style.display = "block";
    }
    if (scrollY >= 127) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281,#10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016,#10001f)";
    }
  }
};
