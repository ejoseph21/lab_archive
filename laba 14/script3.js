// Способ 1: получаем доступ по ID элемента
let elementById = document.getElementById("myElement");
    
// Способ 2: получаем доступ с использованием иерархической структуры DOM (getElementByTagName())
let elementByTag = document.getElementsByTagName("div")[0];

// Способ 3: получаем доступ с использованием иерархической структуры DOM (querySelector())
let elementByQuery = document.querySelector("#myElement");

// Проверяем, равны ли переменные (ссылаются ли они на один и тот же узел)
let areEqual = (elementById === elementByTag && elementById === elementByQuery);
console.log("Переменные ссылаются на один и тот же узел:", areEqual);