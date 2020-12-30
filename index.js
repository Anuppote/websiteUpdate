var array = [
  "M",
  "E",
  "R",
  "R",
  "Y",
  "C",
  "H",
  "R",
  "I",
  "S",
  "T",
  "M",
  "A",
  "S",
];
var inc = -180;
var id = setInterval(move, 2);
var i = 0;

function move() {
  // var text = shift(array);
  // function shift(arr) {
  //   var i = -1;
  //   i++;
  //   return arr[i];
  // }
  if (inc === 300) {
    inc = -180;
    i++;
    if (i == array.length) {
      clearInterval(id);
    }
  } else {
    inc++;
    document.querySelector(".child").innerHTML = `${array[i]}`;
    document
      .querySelector(".child")
      .setAttribute("style", `margin-top:${inc}px;`);
  }
}
