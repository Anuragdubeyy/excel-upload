import { useState } from "react";
import * as XLSX from "xlsx";
import Pagination from "../../component/common/Pagination";

const Dashboard: React.FC = () => {
  const [fileData, setFileData] = useState<[][]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target?.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setFileData(jsonData);
      setCurrentPage(1); // Reset to the first page on new upload
    };
    reader.readAsBinaryString(file);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startRow = (currentPage - 1) * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const paginatedData = fileData.slice(startRow, endRow);
  const totalPages = Math.ceil((fileData.length - 1) / rowsPerPage);

  return (
    <div>
      <h1>Dashboard</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <div>
        <h2>File Data:</h2>
        {fileData.length > 0 && (
          <>
            <table>
              <thead>
                <tr>
                  {fileData[0].map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, rowIndex) => (
                  <tr key={startRow + rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <Pagination
              page={currentPage}
              totalProducts={totalPages}
              handlePage={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
