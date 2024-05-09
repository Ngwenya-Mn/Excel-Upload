# Excel_Upload Documentation

## Tools Used

- HTML
- CSS
- JavaScript
- Bootstrap
- JQuery

**_Use this link to see the Project :_** https://thegiante.github.io/Excel-Upload/

<hr/>

### PROJECT REPORT

**1.User Interface :**
In this project HTML and Bootstrap were used to create the structure of the project.

The HTML structure is well-organized and follows best practices.
The <head> section includes the necessary meta tags for character set and viewport settings.
The <title> tag provides a descriptive title for the page.
External stylesheets (Bootstrap and a custom styles.css) are linked in the <head> section.

Page Content:
The main content is wrapped in a bootstrap class(container-fluid), which ensures
responsiveness across different screen sizes.
Inside the container, there’s a div with an id(content) that holds the actual content.
The <h2> tag displays the heading “Upload your files below excel/csv.”
A horizontal line (<hr>) separates the heading from the file upload section.

File Upload Section:
The file upload section consists of an <input type="file"> element.
The id(file_upload) attribute assigns an identifier to the input field.
The class(form-control-file) ensures consistent styling with Bootstrap.
The accept(.csv,.xlsx,.xls) attribute restricts file selection to CSV, Excel (.xlsx), and Excel 97-2003 (.xls) formats.
A button with the label “Upload” is provided. When clicked, it presumably triggers the changer() function which is defined in the JavaScript file.

Data Viewer Container:
Below the file upload section, there’s a div with an id(dataviewer) ntended to display
the uploaded data (parsed from the file) and a bootstrap class(table-responsive) was used
to make the table table respond to the size of the device screen.


JavaScript Dependencies:
The provided JavaScript dependencies are essential for functionality:
* jQuery
* Bootstrap
* PapaParse - for CSV parsing
* xlsx - for Excel file handling

Custom Script:
The custom script likely contains additional logic for handling file uploads, parsing data,
and displaying it in the data viewer.

**2.File Processing :**  
In the HTML code, an input element with the type set to "file" and an id assigned to it.
This allows users to select a file from their local file system.

JavaScript Function changer():
This function is triggered when a file is selected using the file input element. It starts
by getting the file input element by it's id.

Reading the File:
If a file is selected, a FileReader object is created. The FileReader object provides methods
to read the contents of files asynchronously.

reader.onload:
This event is triggered when the file reading operation is successfully completed.
Inside this event handler, the content of the file is accessed using e.target.result.
The file content is assumed to be in binary format, so it's read as binary using
readAsBinaryString.The content of the file is passed to the XLSX.read function. This function
is likely part of the xlsx library, which is used for reading Excel files in JavaScript.

The XLSX.read function reads the binary data of the Excel file and converts it into a 
JavaScript object representing the workbook.

XLSX.utils.sheet_to_json function converts the first sheet of the workbook into a JSON object.

reader.onerror:
This event is triggered if an error occurs while reading the file.

**3.Data Display :**
Parsing Excel File:
Inside the onload function, the binary data of the file is accessed via e.target.result.
This data is then passed to the XLSX.read() function from the SheetJS library. This function
parses the binary data into an Excel workbook object.

Converting Excel Sheet to JSON:
Once the Excel workbook is obtained, the first sheet's name is extracted, and the 
corresponding sheet object is retrieved. This sheet object is then passed to 
XLSX.utils.sheet_to_json() function, which converts the sheet data into a JSON array.

Displaying Data in HTML Table:
The resulting JSON array is passed to the displayTable() function. This function first 
clears any existing content in the table container id(dataviewer). If no data is found, 
it appends a paragraph saying "No data found".

Generating Table Headers:
If data is found, the function dynamically generates an HTML table. It creates a 
<table> element and adds the 'table' and 'table-striped' bootstrap classes to it. 
Then it creates a <thead> element and within it, a <tr> element for the table headers. 
It loops through the first row of the JSON array (which contains the headers) and creates 
a <th> element for each header, setting it's text to the header value.

Generating Table Body:
After generating the table headers, the function creates a <tbody> element. It loops 
through the remaining rows of the JSON array (excluding the header row) and for each 
row, creates a <tr> element. Within each row, it creates a <td> element for each cell 
value and sets it's text accordingly.

Appending Table to Container:
Finally, the generated table (with headers and body) is appended to the table container
id(dataviewer) in the HTML document.

**4.Styling :**
Overall Page Layout:
The HTML structure is wrapped in a div of bootstrap class(container-fluid), ensuring 
that content spans the entire width of the viewport. Inside this container, the div with 
an id(content) holds the main content of the page.

Header Styling:
The header "Upload your files below excel/csv" is styled using Bootstrap's display
and font-weight classes (display-5 and fw-bold). This ensures it stands out and is
visually appealing.

File Input Styling:
The file input field is styled using Bootstrap's form-control-file class, which 
provides consistent styling across browsers. Additionally, custom CSS rules define
border, padding, and border-radius properties, enhancing it's appearance and ensuring
it matches the overall design.

Button Styling:
The "Upload" button is styled using Bootstrap's btn and btn-outline-success classes,
giving it a clean and prominent appearance. The padding ensures it's visually appealing 
and clickable.

Table Styling:
The table container id(dataviewer) is styled using Bootstrap's table-responsive class,
making it scrollable on smaller screens to prevent horizontal overflow. This ensures a 
better user experience, especially on mobile devices.

Custom CSS:
Custom CSS rules are applied to the div with an id(content) to center it's contents both
horizontally and vertically. This ensures the content is visually centered on the page, 
enhancing readability and aesthetics.

**5.Version Control :** 
Collaboration via GitHub:
Created a remote repository on GitHub.
Pushed the local repository to GitHub using git remote add origin <repository_URL> and 
git push -u origin main.
The project was published using GitHub Pages to be rendered as a webpage.

Setting Up Git Repository Locally:
cloned the GitHub repository to  the local machine to start the project.
Added project files to the repository using git add . to stage any changes.
Committed the initial set of files using git commit -m "initial commit".

Regular Commit Practices:
Made frequent commits as changes and project progression.
Used descriptive commit messages that clearly explained the changes made in each commit.
Committed early and often to track progress.

## FUTURE ENHANCEMENTS

**1.Progress Bar :**
Add a progress bar to indicate the status of file upload and processing, especially for larger files, to keep users informed about the progress.

**2.Integration with Data Visualization Libraries :**    
Integrate with data visualization libraries to generate interactive charts or graphs based on the uploaded data, providing visual insights into the data.

**3.Advanced Data Display Features :**     
Enable sorting, filtering, or searching functionality within the displayed table to help users interact with the data more effectively.
Allow users to customize the appearance or formatting of the table, such as adjusting column widths or applying styling to specific cells.

**4.Security Enhancements :**
Ensure that sensitive data is handled securely, especially if the application is handling files containing confidential information.
