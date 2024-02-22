let sum = 0;
let buts = []

for(let i = 1; i < 6; i++) {
    buts[i] = document.getElementById(`b${i}`);
    buts[i].onclick = function() {sum += +this.textContent};
}
buts[6] = document.getElementById(`b6`);
buts[6].onclick = function() {alert(`Сумма = ${sum}`); sum = 0;}

let myName = window.prompt("Введите Ваше имя:");
if(!myName){
    alert("Добро пожаловать!");
}
if(myName){
    alert(`Добро пожаловать, ${myName}!`);
}