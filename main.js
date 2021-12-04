// let elem = document.getElementById("mydiv");

// console.log(elem);

// elem.innerText = "Besir";
// elem.innerHTML = "<h1>Besir</h1>";

// console.log(elem.innerText)

// let names = ["bashir", "mamed", "isa"];

// for (const item of names) {
//   //   elem.innerText += item + "/";
//   elem.innerHTML += `<h1>${item}</h1>`;
// }

// let elems = document.getElementsByClassName("text");

// let elems = document.getElementsByTagName("p");

// console.log(elems);

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     elems[index].innerText = "salam";
// }

// let myelems = document.getElementsByClassName("myelem");

// for (let i = 0; i < myelems.length; i++) {
//     myelems[i].innerText = i+1;
// }

// console.log(myelems);

// let elem = document.querySelector(".myelem #change-this");
// elem.innerText = "Bashir";
// console.log(elem);

// let elems = document.querySelectorAll(".myelem span.change-this");

// for (const elem of elems) {
//   elem.innerText = "bashir";
// }
// console.log(elems);

// function test() {
//     alert("You clicked me.")
// }

// let btn = document.querySelector(".myButton");

// btn.onclick = function () {
//     alert("Salam");
// };

// btn.onclick = function () {
//     alert("sagol");
// };

// btn.onclick = function () {
//   alert("necesen?");
// };

// btn.addEventListener("click", function () {
//   alert("Salam");
// });

// btn.addEventListener("click", function () {
//   alert("sagol");
// });

// btn.onclick = function () {
//   alert("yaxsiyam");
// };

// btn.addEventListener("mouseover", function () {
//   alert("Salam");
// });

// let myp = document.querySelector("p.myp");
// let button = document.querySelector("button.changer");

// button.addEventListener("click", function () {
// myp.innerText = "salam";
// myp.style.color = "red";
// myp.style.backgroundColor = "black";
//   console.log(myp.classList);
//   myp.classList.add("active");
//   console.log(myp.classList);
//   console.log(myp.classList);
//   if (myp.classList.contains("active")) {
//     myp.classList.remove("active");
//   } else {
//     myp.classList.add("active");
//   }
//   console.log(myp.className)
//   myp.classList.toggle("active");
//   console.log(myp.className)
// });

let in1 = document.querySelector("#num1");
let in2 = document.querySelector("#num2");
let button = document.querySelector("#calculate");

button.addEventListener("click", function () {
  alert(parseInt(in1.value) + parseInt(in2.value));
  in1.value="";
  in2.value="";
});
