var element1 = document.querySelector(".individual");
var element2 = document.querySelector(".mentor");
var element3 = document.querySelector(".startup");
var element4 = document.querySelector(".incubator");

// var first = document.querySelector('input[name="only"]:checked').checked;
var second = document.getElementById("2").checked;
var third = document.getElementById("3").checked;
var fourth = document.getElementById("4").checked;

// console.log(first)

// console.log("Hello");
function changeColor(e) {
  var list = document.querySelectorAll(".radio");
  console.log(list);
  for(let i of list){
    console.log(i.id)
    document.querySelector(`.${i.id}`).classList.remove("orange");
  }
  document.querySelector(`.${e}`).classList.add("orange");
}