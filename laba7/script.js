let massive1 = [1, 2, 3, 4, "Понедельник"];
alert(massive1.length);
let massive2 = new Array(1, 2, 3, 4, 5, "Вторник");
alert(massive2.length);
let massive3 = Array.of(1, 2, 3, "Среда");
alert(massive3.length);
let massive = [...massive1, ...massive2, ...massive3];
alert(massive.length);

let a = document.getElementById('a');
for(let i=0; i < massive.length; i++){
    a.innerHTML += i + ' - ' + massive[i] + '<br>';
}

let copymassive = [...massive];
let deleted = copymassive.pop(); // удаленный в конце элемент можно куда-нибудь записать
console.log(copymassive);
copymassive.shift(); //удаление с начала
console.log(copymassive);
copymassive.splice(0,3, "911", "228", "336");  //заменить первые три
console.log(copymassive);
copymassive.push("пуш1","пуш2");  //добавить в конец
console.log(copymassive);
copymassive.unshift("аншифт1", "аншифт2"); // добавить в начало
console.log(copymassive);
delete copymassive[8];
delete copymassive[5];
delete copymassive[6];
console.log(copymassive);

let b = document.getElementById('b');
copymassive = copymassive.filter((elem) => {return elem});
for (let k = 0; k < copymassive.length; k ++) {
    b.innerHTML += k + ' - ' + copymassive[k] + '<br>';
} //5 задание, инициализированные элементы


copymassive = [];
copymassive.length = 0;
copymassive.splice(0, copymassive.length);// все способы отчищают массив
console.log(copymassive);

//задание по варианту:
let massive4 = [1, 2, 3, 4, 5, 6];
let massive4firstcopy = massive4.toString();// первый способ
console.log(massive4firstcopy);
//второй способ:
let massive4copy = [...massive4];
let str = " ";
for(let i = 0; i<massive4copy.length; i++) {
    console.log(massive4copy[i]);
    str += `${massive4copy[i]}, `
}
console.log(str);

//второе задание:
//создаем массив со случайными числами
let massive4_2 = [];
for(let i = 0; i<20; i++) {
    massive4_2[i] = Math.round(Math.random()*35);
}

//вычисляем среднее арифметическое
let summa = 0;
for(let i = 0; i<20; i++) {
    summa += massive4_2[i];
}
summa /= massive4_2.length;
//проверяем наличие среднего арифметического в массиве
console.log(massive4_2);
console.log(Math.round (summa));

let be = false;
for(let i = 0; i<20; i++) {
    if(massive4_2[i] == Math.round(summa)) {
        be = true;
    }
}

if(be) {
    console.log("Значение есть в массиве");
}
else {
    console.log("Значение не есть в массиве");
}


