function handleClick1() {
  city = "대구광역시";
  console.log(city);
}
function handleClick2() {
  city = "경상북도";
  console.log(city);
}
function handleClick3() {
  city = "경상남도";
  console.log(city);
}
function handleClick4() {
  city = "부산광역시";
  console.log(city);
}

const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");

menu1.addEventListener("click", handleClick1);
menu2.addEventListener("click", handleClick2);
menu3.addEventListener("click", handleClick3);
menu4.addEventListener("click", handleClick4);

console.log(city);
