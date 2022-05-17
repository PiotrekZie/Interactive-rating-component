function test() {
    var x = document.getElementById("two");
    var y = document.getElementById("one");

    if (x.style.display === "none") {

    } else {
      x.style.display = "flex";
      y.style.display = "none";
    }
  }