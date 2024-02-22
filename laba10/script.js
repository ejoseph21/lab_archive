 
 //1
 // Получаем текущую дату
 let currentDate = new Date();
 // Получаем текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь)
 let currentMonth = currentDate.getMonth();
 // Создаем объект с названиями пор времени года и соответствующими месяцами
 let seasons = {
   'Зима': [0, 1, 11], // Январь, Февраль, Декабрь
   'Весна': [2, 3, 4], // Март, Апрель, Май
   'Лето': [5, 6, 7], // Июнь, Июль, Август
   'Осень': [8, 9, 10] // Сентябрь, Октябрь, Ноябрь
 };
 // Определяем пору года на основе текущего месяца
 let currentSeason;
 for (let season in seasons) {
   if (seasons[season].includes(currentMonth)) {
     currentSeason = season;
     break;
   }
 }
 // Функция, которая выводит сообщение о месяцах, относящихся к текущей поре года
 function showSeasonMonths() {
   switch (currentSeason) {
     case 'Зима':
       alert(`Сейчас зима. Месяцы зимы: Январь, Февраль, Декабрь`);
       break;
     case 'Весна':
     alert(`Сейчас весна. Месяцы весны: Март, Апрель, Май`);
       break;
     case 'Лето':
     alert(`Сейчас лето. Месяцы лета: Июнь, Июль, Август`);
       break;
     case 'Осень':
     alert(`Сейчас осень. Месяцы осени: Сентябрь, Октябрь, Ноябрь`);
       break;
     default:
       document.getElementById('result').innerHTML = 'Ошибка: не удалось определить текущую пору года.';
   }
 }

 //2
 let data = new Date();
 let b1 = document.getElementById('b1');
 let result1 = document.getElementById('result1');

 b1.onclick = function age() { //создаем функцию для подсчта лет

 let d = document.getElementById('d').value; //из поля d получаем значение и записываем в переменную
 let data2 = new Date(d); //создаем новую переменную для изменения формата даты 
 let r = data.getFullYear() - data2.getFullYear(); //вычитаем из текущего года введенный 
 let r1 = data2.getMonth() - data.getMonth(); //вычитаем из текущего месяца введенный 
 
 if (r1 > 0){ //если больше текущего месяца, то минус 1 год
  result1.innerHTML = `Ваш возраст: ${r-1}`;

 }
 else{
  result1.innerHTML = ` Ваш возраст: ${r}`;
 }

 }

 //3
 let start = document.getElementById('start');
 let stop = document.getElementById('stop');
 let time1;
 let time2;
 let result2 = document.getElementById('result2');
 start.onclick = function count(){
time1 = Date.now();
 }
stop.onclick = function count(){
time2 = Date.now();
result2.innerHTML = +(time2 - time1);
}
//4
//1.Создайте массив целых чисел. Напишите сценарий,который находит максимальный элемент в массиве.
let array = document.getElementById('array');
array.onclick = function max(){
let arr = [81, 15, 28, 16, 84, 109, 27428, 292, 1, 93, 290, 820022, 92, 2002];
let maxValue = Math.max(...arr);
alert(`Максимальное значение: ${maxValue}`);
}
//2.Напишите сценарий, который из переданной строки позволяет извлечь подстроку в соответствии с указанной позицией.
let b2 = document.getElementById('b2');
b3.onclick = function strings0(){
  let str0 = "Привет меня зовут Элина";
  alert(`Первоначальный вид строки: ${str0}`);
}
b2.onclick = function strings(){
  "Привет меня зовут Элина".split("");
  "Привет меня зовут Элина".split(" ");
  let str = "Привет меня зовут Элина".split(" ", 1);
  alert(`Полученная подстрока: ${str}`);
}

//5
let oddnumber = {
  isOdd: function(odd) {
      if (odd % 2 == 1) return true
      else return false;
  }
};
Number.__proto__ = oddnumber;
let b4 = document.getElementById('b4');
b4.onclick = function Number1() {
  let inputn = document.getElementById("inputn").value;
  console.log(inputn);
  let value = Number.isOdd(inputn);
  console.log(value);
  document.getElementById("result3").innerHTML += `Возвращено ${value}. Значение ${value?'не':''}четное.<br>`
}

//6
let b5 = document.getElementById("b5");
b5.onclick = function() {
    let inputt = document.getElementById("inputt").value;
    let znachenie = false;
    if (!(inputt.search(/\d.*/g))) { //регулярное выражение
        znachenie = true;
    } else znachenie = false;
    document.getElementById("result4").innerHTML += `${znachenie?"Да, начинается":"Нет, не начинается"}<br>`
}

