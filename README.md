# Excel_Upload Documentation
## Tools Used
* HTML
* CSS
* JavaScript
* Bootstrap
* JQuery

***Use this link to see the Project :*** https://thegiante.github.io/Excel-Upload/

<hr/>

### PROJECT REPORT

**1.User Interface :**
    In this project HTML and Bootstrap were used to create the structure of the project.

    The HTMl structure is well organized and follows best practices.
    The <head> section includes the necessary meta tags for character set and viewport settings.
    The <title> tag provides a descriptive title for the page.
    Exxternal stylesheets (Bootstrap and a custom styles.css) are linked in the <head> section.

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
