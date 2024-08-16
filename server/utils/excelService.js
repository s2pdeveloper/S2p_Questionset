const {reject} = require("lodash");
const xlsx = require("xlsx");

const excelService = {
   

    exportTableToExcel: (tableData, name = "") => {
        return new Promise((resolve, reject) => {
            try {
                let {sheetName, fileName} = getFileName(name);
                const dataArray = [];
                const headers = Object.keys(tableData[0]);

                dataArray.push(headers);
                tableData.forEach(item => {
                    const row = [];
                    headers.forEach(header => {
                        row.push(item[header]);
                    });
                    dataArray.push(row);
                });

                // Create a new workbook
                let wb = xlsx.utils.book_new();

                // Add a worksheet
                let ws = xlsx.utils.aoa_to_sheet(dataArray);
                xlsx.utils.book_append_sheet(wb, ws, sheetName);

                // Initialize column widths object
                let columnWidths = {};

                // Iterate through each cell in the worksheet
                Object.keys(ws).forEach(cell => {
                    if (cell[0] === "!") return; // Skip non-cell keys
                    let col = cell.replace(/[0-9]/g, ""); // Extract column from cell address
                    let cellContent = ws[cell]?.v || ""; // Get cell content or empty string
                    let cellContentLength = cellContent.toString().length;

                    // Update maximum column width
                    if (!columnWidths[col] || cellContentLength > columnWidths[col]) {
                        columnWidths[col] = cellContentLength;
                    }
                });

                // Convert character lengths to column widths
                let columnWidthsArray = Object.keys(columnWidths).map(col => {
                    return {wch: columnWidths[col]};
                });

                // Apply column widths to the worksheet
                ws["!cols"] = columnWidthsArray;

                // xlsx.writeFile(wb, ${fileName}.xlsx);
                const excelBuffer = xlsx.write(wb, {type: "buffer", bookType: "xlsx"});

                resolve(excelBuffer);
            } catch (e) {
                reject(e);
            }
        });
    },
};

function getFileName (name)   {
    let timeSpan = new Date().toISOString();
    let sheetName = name || "Excel";
    let fileName = `${sheetName}-${timeSpan}`;
    return {
        sheetName,
        fileName,
    };
}

module.exports = excelService;