function changer() {
  const fileInput = document.getElementById('file_upload');
  const file = fileInput.files[0];

  if (file) {
    const fileName = file.name;
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
  const tableContainer = document.getElementById('dataviewer');
  tableContainer.innerHTML = '';

  if (data.length === 0) {
    tableContainer.innerHTML = '<p>No data found</p>';
    return;
  }

  const table = document.createElement('table');
  table.className = 'table table-striped';

  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  data[0].forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');
  for (let i = 1; i < data.length; i++) {
    const row = document.createElement('tr');
    data[i].forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  tableContainer.appendChild(table);
}