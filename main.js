function test() {
    var x = document.getElementById("two");
    var y = document.getElementById("one");
    if (x.style.visibility === "hidden") {
      y.style.visibility = "hidden";
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
  }