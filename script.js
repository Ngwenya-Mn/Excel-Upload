var button = document.getElementById("submit-btn").addEventListener('click', changer);

function changer() {
  const fileInput = document.getElementById('file_upload');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      displayTable(jsonData);
    };
    reader.onerror = function() {
      console.error('Error reading file');
    };
    reader.readAsBinaryString(file);
  } else {
    console.error('No file selected');
  }
}

function displayTable(data) {
  const tableContainer = $('#dataviewer');
  tableContainer.empty();

  if (data.length === 0) {
    tableContainer.append('<p>No data found</p>');
    return;
  }

  const table = $('<table></table>');
  table.addClass('table table-striped');

  //table header
  const thead = $('<thead></thead>');
  const headerRow = $('<tr></tr>');
  data[0].forEach(header => {
    const th = $('<th></th>');
    th.text(header);
    headerRow.append(th);
  });
  thead.append(headerRow);
  table.append(thead);

  //table body
  const tbody = $('<tbody></tbody>');
  for (let i = 1; i < data.length; i++) {
    const row = $('<tr></tr>');
    data[i].forEach(cell => {
      const td = $('<td></td>');
      td.text(cell);
      row.append(td);
    });
    tbody.append(row);
  }
  table.append(tbody);

  tableContainer.append(table);
}