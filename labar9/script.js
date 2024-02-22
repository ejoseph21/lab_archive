//1 task
let o1 = document.getElementById('o1');
let o2= document.getElementById('o2');
animal1 ={};
animal1.name = " bear ";
animal1.color = " brown ";
animal1.size = " big ";
animal1.place = " forest ";
animal1.type = " mammal ";

let animal2 = Object.create(null);
animal2.name = " mouse ";
animal2.color = " grey ";
animal2.size = " small ";
animal2.place = " field ";
animal2.type = " rodent ";
console.log(animal2);
//2 task
let pr1 = '';
for (p in animal1) {
    pr1 += `${p} ` ;
}
o1.innerHTML = `Свойства animal1: ${pr1}`;

let pr2 = '';
for (p in animal2) {
    pr2 += `${animal2[p]}` ;
}
o2.innerHTML = `Значения свойств animal2: ${pr2}`;
//3 task
let b1 = document.getElementById('b1');
b1.onclick = function f1(){
    let str = '';
    for(prop in animal1){
        str += `${prop}: ${animal1[prop]}; `;
    }
    alert(`Привет!:) Подробная информация об Animal1 ${str}`);
}
//4 task
document.write(`<div class="doc"> Подробная информация об Animal2:  ${pr2}</div>`);
//5 task
function employe(name, otdel, tel, wage) {
    this.name = name;
    this.otdel= otdel;
    this.tel = tel;
    this.wage = wage;
    this.getName = function() {
        return this.name;}
    this.setName = function(name) {
        this.name = name;}
   }
   let employe1 = new employe("Ben", "dushnila", "+375297865413", "1.000.000$/hour");

   console.log(employe1);
   
   employe1.setName("Anton");

   console.log(employe1);

   //6 task
   let copy = animal1;
   console.log(copy);
