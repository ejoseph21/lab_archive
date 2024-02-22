//1
let a = document.body;
console.log(a);
// Создаем функцию для вывода типа узла
function showNodeType() {
// Получаем первые два элемента
let firstElement = document.getElementById('1');
let secondElement = document.getElementById('2');
// Выводим типы узлов
console.log("Тип первого узла: ", firstElement.nodeType);
console.log("Тип второго узла: ", secondElement.nodeType);
}  
// Вызываем функцию
showNodeType();

//2
let monthslist = document.getElementById('list');
let tablebutton = document.getElementById('tablebutton');
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
tablebutton.onclick = function createtable(){
let table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.border = '1px solid black';
let tableHead = document.createElement('thead');
tableHead.style.borderCollapse = 'collapse';
tableHead.style.border = '1px solid black';
let tableBody = document.createElement('tbody');
tableHead.style.borderCollapse = 'collapse';
tableHead.style.border = '1px solid black';

let tableHeaderRow = document.createElement('tr');
let headerCell1 = document.createElement('th');
headerCell1.textContent = '№';
let headerCell2 = document.createElement('th');
headerCell2.textContent = 'Название месяца';

tableHeaderRow.appendChild(headerCell1);
tableHeaderRow.appendChild(headerCell2);
tableHead.appendChild(tableHeaderRow);
table.appendChild(tableHead);

months.forEach((month, index) => {
    let tableRow = document.createElement('tr');
    let cell1 = document.createElement('td');
    cell1.textContent = (index + 1).toString();
    let cell2 = document.createElement('td');
    cell2.textContent = month;

    tableRow.appendChild(cell1);
    tableRow.appendChild(cell2);
    tableBody.appendChild(tableRow);
});

table.appendChild(tableBody);

document.body.appendChild(table); //добавляет таблицу на страницу
}

//3
let list = document.getElementById("list");
let li13 = document.getElementById('13li');
li13.onclick = function list13(){
let newItem = document.createElement("month13");
newItem.appendChild(document.createTextNode("13-го месяца не бывает"));
// Добавляем новый элемент в список
list.appendChild(newItem);
}
//4
let buttonweek = document.getElementById('week')
week.onclick = function weeklist(){
    let list = document.getElementById("list");
    let listItem = list.getElementsByTagName("li")[12]; // Получаем 13-й пункт (индексация начинается с 0)
// Создаем маркированный список
    let nestedList = document.createElement("ul");
// Наполняем маркированный список днями недели
    let weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
for (let i = 0; i < weekdays.length; i++) {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(weekdays[i]));
    nestedList.appendChild(listItem);
}
// Добавляем маркированный список в 13-й пункт списка
    listItem.appendChild(nestedList);
}
//5
document.getElementById('zagolovki').addEventListener('click', function() {
    let headings = document.querySelectorAll('main h1, main h2, main h3');
    headings.forEach(heading => {
      console.log(heading.textContent);
    });
  });

//6 
let radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(button => {
  button.addEventListener('change', function() {
    radioButtons.forEach(btn => {
      if (btn !== button) {
        btn.nextSibling.style.color = btn.checked ? 'red' : 'blue';
      }
    });
  });
});
