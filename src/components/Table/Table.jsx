import React from "react";
import "./Table.css";

const data = {
  2020: [
    {
      client: "Hongkong and Shanghai Banking ..",
      team: "GC",
      salesperson: "Keith",
      aum: "19,874,635,125",
    },
    {
      client: "JPMorgan Chase & Co.",
      team: "CM",
      salesperson: "Alan",
      aum: "16,934,345,134",
    },
    {
      client: "Citibank, N.A",
      team: "GC",
      salesperson: "Betty",
      aum: "13,831,295,083",
    },
    {
      client: "Bank of China",
      team: "Intermediary",
      salesperson: "Tom",
      aum: "12,234,845,011",
    },
    {
      client: "Standard Chartered Hong Kong",
      team: "CM",
      salesperson: "David",
      aum: "12,098,779,244",
    },
    {
      client: "UBS Securities Hong Kong Limited",
      team: "Intermediary",
      salesperson: "Victor",
      aum: "11,933,815,290",
    },
    {
      client: "BNP Paribas Securities India",
      team: "HK",
      salesperson: "Sharon",
      aum: "10,456,125,280",
    },
    {
      client: "Industrial and Commercial Bank ...",
      team: "Intermediary",
      salesperson: "Kevin",
      aum: "10,012,870,852",
    },
    {
      client: "Hang Seng Bank Limited",
      team: "HK",
      salesperson: "Sam",
      aum: "9,363,245,937",
    },
    {
      client: "BOCI Securities Limited",
      team: "CM",
      salesperson: "Raven",
      aum: "8,534,178,722",
    },
  ],
  2021: [
    {
      client: "Hongkong and Shanghai Banking ..",
      team: "CM",
      salesperson: "Alan",
    },
    { client: "JPMorgan Chase & Co.", team: "GC", salesperson: "Keith" },
    { client: "Citibank, N.A", team: "Intermediary", salesperson: "Tom" },
    { client: "Bank of China", team: "GC", salesperson: "Betty" },
    {
      client: "Standard Chartered Hong Kong",
      team: "CM",
      salesperson: "Victor",
    },
    {
      client: "UBS Securities Hong Kong Limited",
      team: "Intermediary",
      salesperson: "Victor",
    },
    {
      client: "BNP Paribas Securities India",
      team: "HK",
      salesperson: "Sharon",
    },
    {
      client: "Industrial and Commercial Bank ...",
      team: "Intermediary",
      salesperson: "Kevin",
    },
    { client: "Hang Seng Bank Limited", team: "HK", salesperson: "Sam" },
    { client: "BOCI Securities Limited", team: "CM", salesperson: "Raven" },
  ],
};

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>CLIENT NAME</th>
            <th>TEAM</th>
            <th>SALESPERSON</th>
            <th>AUM (HK$)</th>
            <th>TEAM</th>
            <th>SALESPERSON</th>
          </tr>
        </thead>
        <tbody>
          {data["2020"].map((item, index) => (
            <tr key={index}>
              <td>{item.client}</td>
              <td>{item.team}</td>
              <td>{item.salesperson}</td>
              <td>{item.aum}</td>
              <td>{data["2021"][index]?.team}</td>
              <td>{data["2021"][index]?.salesperson}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
