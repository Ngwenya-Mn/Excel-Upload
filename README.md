# Excel_Upload Documentation
## Tools Used
* HTML
* CSS
* JavaScript
* Bootstrap
* JQuery
<hr/>

### PROJECT REPORT

1. **User Interface**:
    In this project HTML and Bootstrap were used to create the structure of the project.

    The HTML structure is well-organized and follows best practices.
    The <head> section includes the necessary meta tags for character set and viewport settings.
    The <title> tag provides a descriptive title for the page.
    External stylesheets (Bootstrap and a custom styles.css) are linked in the <head> section.

    Page Content:
    The main content is wrapped in a <div class="container-fluid">, which ensures responsiveness across different screen sizes.
    Inside the container, there’s a <div id="content"> that holds the actual content.
    The <h2> tag displays the heading “Upload your files below excel/csv.”
    A horizontal line (<hr>) separates the heading from the file upload section.

    File Upload Section:
    The file upload section consists of an <input type="file"> element.
    The id="file_upload" attribute assigns an identifier to the input field.
    The class="form-control-file" ensures consistent styling with Bootstrap.
    The accept=".csv,.xlsx,.xls" attribute restricts file selection to CSV, Excel (.xlsx), and Excel 97-2003 (.xls) formats.
    A button with the label “Upload” is provided. When clicked, it presumably triggers the changer() function (which is defined elsewhere in the JavaScript).

    Data Viewer Container:
    Below the file upload section, there’s a <div id="dataviewer" class="table-responsive">.
    This container is likely intended to display the uploaded data (parsed from the file).

    JavaScript Dependencies:
    The provided JavaScript dependencies are essential for functionality:
    jQuery 
    Bootstrap 
    PapaParse - for CSV parsing
    xlsx - for Excel file handling

    Custom Script:
    The custom script likely contains additional logic for handling file uploads, parsing data, and displaying it in the data viewer.

2. **File Processing**: 
    Explain how you utilized JavaScript to manage file input and how the FileReader API was implemented to read files directly in the browser.
3. **Data Display**: 
    Detail the process of reading the file and parsing the data using libraries like PapaParse for CSVs and SheetJS for Excel files. Discuss how you dynamically generated a table with HTML to display this content.
4. **Styling**: 
    Describe how you used CSS and Bootstrap to style the table and the overall page, focusing on creating a responsive and visually appealing layout.
5. **Version Control**: 
    Outline how you used Git for version control, including regular commit practices, and how you utilized GitHub for hosting the repository, which facilitated collaboration and revision tracking.

