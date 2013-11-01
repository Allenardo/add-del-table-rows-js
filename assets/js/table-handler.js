function insertRow()
{ 
 var row = document.getElementById('add-remove');
 var lastRow = row.rows.length;
 var tbl = document.getElementById('add-remove').insertRow(lastRow);
 var c1 = tbl.insertCell(0);
 var c2 = tbl.insertCell(1);
 var c3 = tbl.insertCell(2);

 c1.innerHTML = "<input type='text' name='delete' value='Enter Date'>";
 c2.innerHTML = "<input type='text' name='delete' value='Enter Holiday'>";
 c3.innerHTML = "<img class='icon-remove' onclick='deleteRow(this);'>";
}


function deleteRow(row)
{ 
var i = row.parentNode.parentNode.rowIndex;
document.getElementById('add-remove').deleteRow(i-1);
}

