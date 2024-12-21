import React from "react";
import AppraisalHeader from "../AppraisalHeader/AppraisalHeader";
import RangeSlider from "../RangeSlider/RangeSlider";

import BarCharts from "../BarChart/BarCharts";
import styles from "./MainContent.module.css";
import Table from "../Table/Table";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <AppraisalHeader />
      <hr />
      <div className={styles.controls}>
        <RangeSlider />
      </div>
      <BarCharts />
      <Table/>
    </div>
  );
};

export default MainContent;
