import React from 'react';

const SummaryTable = ({ data }) => (
  <div className="wallet-details summeryDetails activeEwallet">
    <div className="coupons-table">
      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Account Number</th>
            <th>Currency</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.accountName}</td>
              <td>{item.accountNumber}</td>
              <td>{item.currency}</td>
              <td>{item.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SummaryTable;
