
let table = document.createElement("table");
table.style.border = "3px solid white";
table.style.borderCollapse = "collapse";


let cellStyle = "border: 3px solid white; padding: 5px;";


let firstRow = document.createElement("tr");
firstRow.style.background = "darkred";
firstRow.style.color = "white";
firstRow.style.fontWeight = "bold";


let headers = ["Заголовок 1", "Заголовок 2"];
for (let i = 0; i < headers.length; i++) {
    let headerCell = document.createElement("th");
  headerCell.style.cssText = cellStyle;
  headerCell.textContent = headers[i];
  firstRow.appendChild(headerCell);
}

table.appendChild(firstRow);

let rows = [
  ["Ячейка 1", "Ячейка 2"]
];

for (let i = 0; i < rows.length; i++) {
    let row = document.createElement("tr");
  row.style.background = "darkred";
  row.style.color = "white";

  for (let j = 0; j < rows[i].length; j++) {
    let cell = document.createElement("td");
    cell.style.cssText = cellStyle;
    cell.textContent = rows[i][j];
    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.body.appendChild(table);