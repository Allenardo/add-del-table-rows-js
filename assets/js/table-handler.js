function insertRow() { 
  var row = document.getElementById('add-remove');
  var lastRow = row.rows.length;
  var table = document.getElementById('add-remove').insertRow(lastRow);
  var firstCell = table.insertCell(0);
  var secondCell = table.insertCell(1);
  var thirdCell = table.insertCell(2);
  
  firstCell.innerHTML = "<input type='text' name='delete' value='Enter Date'>";
  secondCell.innerHTML = "<input type='text' name='delete' value='Enter Holiday'>";
  thirdCell.innerHTML = "<img class='btn icon-remove' onclick='deleteRow(this);'>";
}

function deleteRow(row) { 
  var rowIndex = row.parentNode.parentNode.rowIndex;
  document.getElementById('add-remove').deleteRow(rowIndex-1);
}