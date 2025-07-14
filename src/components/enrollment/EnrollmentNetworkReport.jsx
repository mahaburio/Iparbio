import React from 'react';

const EnrollmentNetworkReport = ({ selectedBC, currentData }) => {
  return (
    <div className="container mt-5">
      <div className="dataTable">
        <table id="bcTable">
          <thead>
            <tr>
              <th>Business Center</th>
              <th>Lvl</th>
              <th>Name</th>
              <th>L-Total</th>
              <th>R-Total</th>
              <th>Title</th>
              <th>PC in Team</th>
              <th>Business Center</th>
              <th>Lvl</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody id="bcTableBody">
            {currentData.map((item, index) => (
              <tr key={index}>
                <td>{item.center}</td>
                <td>{item.level}</td>
                <td>{item.name}</td>
                <td>{item.left}</td>
                <td>{item.right}</td>
                <td>{item.title}</td>
                <td>{item.pc}</td>
                <td>{item.center}</td>
                <td>{item.level}</td>
                <td>{item.name}</td>
              </tr>
            ))}
            {currentData.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center">
                  No data available for {selectedBC}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollmentNetworkReport;
