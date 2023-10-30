//1 задание
let b1 = document.getElementById('b1');
let resultat = document.getElementById('resultat');
b1.onclick = function exp1() {
let v1 = document.getElementById('v1').value;
let v2 = document.getElementById('v2').value;
let res = Math.pow(v1,v2);
resultat.innerHTML = res;
}
//2 задание
let b2 = document.getElementById('b2');
let resultat1 = document.getElementById('resultat1');
let months = ["Нет такого месяца 0", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
b2.onclick = function exp2() {
let v3 = document.getElementById('v3').value;
if (v3>0 && v3<13){
let monn = months[v3];
resultat1.innerHTML = monn;
}
else {
    resultat1.innerHTML = "Введено неверное значение"
}
}
//3 задание
let b3 = document.getElementById('b3');
let resultat2 = document.getElementById('resultat2');
let max = document.getElementById('max');
let massive = document.getElementById('massive');
b3.onclick = function exp3() {
let array = [];
for(let i = 0; i<20; i++) {
    array[i] = Math.round(Math.random()*500);
}
let arr = Math.max(...array);
massive.innerHTML=`Массив `+array;
max.innerHTML=`Максимальное значение в массиве `+arr;
exp4(arr);
}
let diap = document.getElementById('diap');
function exp4(arr){
 if (arr>0 && arr<10){
 diap.innerHTML = "Диапазон от 0 до 10";
}
 if (arr>10 && arr<100){
 diap.innerHTML = "Диапазон от 10 до 100";
 }
else {diap.innerHTML = " Диапазон от 100";
 }
} 
//4 задание
let b4 = document.getElementById('b4');
let otvet = document.getElementById('otvet');
let new_str = '';
b4.onclick = function repeat() {
  let str = document.getElementById('str').value;
  let kol = document.getElementById('kol').value;
if (kol>1) {
  for (kol; kol>0; kol--)
  {
  new_str += str + " ";
  }
otvet.innerHTML = new_str;
}
else {
 for (let it=2; it>0; it--)
 {
  new_str += str + " ";
 }
 otvet.innerHTML = new_str;
}
new_str = '';
}
//5 задание
let b5 = document.getElementById('b5');
let resultat5 = document.getElementById('resultat5');
b5.onclick = function exp5() {
let v5 = document.getElementById('v5').value;
let v6 = document.getElementById('v6').value;
let v7 = document.getElementById('v7').value;
let res1 = (v5*v6/v7);
resultat5.innerHTML = res1;
}
