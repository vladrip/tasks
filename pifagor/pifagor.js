var i, j;
  pifagor = document.getElementById("pifagor")
  for (i = 1; i<=9; i++) {
  var div_row = document.createElement("div");
  div_row.setAttribute("class", "row");

  for(j = 1; j <= 9; j++) {
    var div_cell = document.createElement("div");
    
    className = (i ==j) ? "cell cell-main" : "cell";
    className = (i > j) ? "cell cell-under" : className;
    className = (i < j) ? "cell cell-over" : className;
    
    div_cell.setAttribute("class", className);
    div_cell.innerText = (i * j);
    div_row.appendChild(div_cell);
  }
  pifagor.appendChild(div_row);
  }