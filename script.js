var file = document.getElementById("file_upload");
var viewer = document.getElementById("dataviewer");

file.addEventListener("change", importFile);

function importFile(evt) {
  var f = evt.target.files[0];

  if (f) {
    var r = new FileReader();
    r.onload = (e) => {
      var contents = processFile(e.target.result, f.name);
      console.log(contents);
      displayTable(contents);
    };
    r.readAsBinaryString(f);
  } else {
    console.log("Failed to load file");
  }
}
function processFile(data, fileName) {
  if (fileName.endsWith(".csv")) {
    return processCSV(data);
  } else if (fileName.endsWith(".xls") || fileName.endsWith(".xlsx")) {
    return processExcel(data);
  } else {
    console.log("Unsupported file format");
    return null;
  }
}

function processCSV(data) {
  // Assuming CSV data is directly usable
  return data;
}

function processExcel(data) {
  var workbook = XLSX.read(data, { type: "binary" });
  var firstSheet = workbook.SheetNames[0];
  var jsonData = to_json(workbook);
  return jsonData;
}

function to_json(workbook) {
  var result = {};
  workbook.SheetNames.forEach(function (sheetName) {
    var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
    });
    if (roa.length) result[sheetName] = roa;
  });
  return result;
}

function displayTable(data) {
  // Assuming data is in JSON format
  var tableHTML = '<table class="table table-striped">';
  for (var sheetName in data) {
    tableHTML +=
      '<thead><tr><th colspan="' +
      data[sheetName][0].length +
      '">' +
      sheetName +
      "</th></tr></thead>";
    tableHTML += "<tbody>";
    data[sheetName].forEach(function (row) {
      tableHTML += "<tr>";
      row.forEach(function (cell) {
        tableHTML += "<td>" + cell + "</td>";
      });
      tableHTML += "</tr>";
    });
    tableHTML += "</tbody>";
  }
  tableHTML += "</table>";
  viewer.innerHTML = tableHTML;
}
