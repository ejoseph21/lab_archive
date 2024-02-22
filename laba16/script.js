//1
class sotr {
    constructor(name, age, otdel, stag) {
      this.name = name;
      this.age = age;
      this.otdel = otdel;
      this.stag = stag;
    }
  }
  
  let sotrs = [];
  
  sotrs.push(new sotr("Анастасия Ромашко", 22, "Разработка", 3));
  sotrs.push(new sotr("Анастасия Козленко", 21, "Маркетинг", 2));
  sotrs.push(new sotr("Валерия Гейшалева", 26, "Тестирование", 5));
  
  let info = document.getElementById("res");
  
  sotrs.forEach(sotr => {
    let sotrX = document.createElement("div");
    sotrX.innerHTML = "<p>" + sotr.name +"<p>Возраст:" + sotr.age +"<p>Отдел:"+ sotr.otdel +"<p>Стаж:"+ sotr.stag +"<hr>";
       info.appendChild(sotrX);
  });
  
  //2
  let name1 = prompt("Введите ФИО сотрудника");
  let age1 = parseInt(prompt("Введите возраст сотрудника"));
  let otdel1 = prompt("Введите название отдела сотрудника");
  let stag1 = parseInt(prompt("Введите стаж работы сотрудника"));
  
  let sotr1 = new sotr(name1, age1, otdel1, stag1);
  //34
  function tojson(){
  let jsonStr = JSON.stringify(sotr1);
  let res1 = document.getElementById("res1");
  res1.innerHTML = jsonStr;}
  //5
  let obj = JSON.parse(jsonStr, function(value)  {
    if (typeof value === 'string') {
      return value;
      
    }
  });
  //6
  let jsonString = '{"name":"Настя","age":18,"otdel":"ЭВС","stag":4 курс}';