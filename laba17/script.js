//1
let json = '[{"name": "Анна"}, {"name": "Сергей"}, {"name": "Лиза"}]';

//2
let data = JSON.parse(json);

//3
let res = document.getElementById("res");
data.forEach((el) => {
  let li = document.createElement("li");
  li.textContent = el.name;
  res.appendChild(li);
});

//4
$(document).ready(function () {
  let body = $("body > *");
  console.log(body);
});

//5
$(document).ready(function () {
  let table = $("<table>");
  //6
  table.addClass("table");
  let thead = $("<thead>");
  let headerRow = $("<tr>");

  let headers = [" ", "PRESENT", "PAST", "FUTURE"];
  headers.forEach(function (headerText) {
    let headerCell = $("<th>");
    headerCell.text(headerText);
    headerRow.append(headerCell);
  });

  thead.append(headerRow);
  table.append(thead);
  let tbody = $("<tbody>");
  let rows = [
    ["+", "I dance", "I danced", "I will dance"],
    ["-", "I don't dance", "I didn't dance", "I'll not dance"],
    ["?", "Do i dance?", "Did i dance?", "Will i dance?"],
  ];

  rows.forEach(function (rowData) {
    let row = $("<tr>");

    rowData.forEach(function (cellData) {
      let cell = $("<td>");
      cell.text(cellData);
      row.append(cell);
    });

    tbody.append(row);
  });
  table.append(tbody);
  $("body").append(table);

  //7
  $("th").hover(function () {
    let time = $(this).text();
    alert("Время: " + time);
  });
});

//8
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      alert("Пожалуйста, заполните все поля");
    } else {
     alert("Форма отправлена");
    }
  });
});

//9
$(document).ready(function(){ 
  var switchStatus = false;   
  $("#switch").on('change', function() {     
  if ($(this).is(':checked')) {         
  switchStatus = $(this).is(':checked'); 
  $(this).val(switchStatus); 
  $('.status').css('text-align','left'); 
  $('.status').html('ON');     
  }     
  else {        
  switchStatus = $(this).is(':checked');    
  $(this).val(switchStatus);    
  $('.status').css('text-align','right');    
  $('.status').html('OFF');       
  } 
  }); 
  });