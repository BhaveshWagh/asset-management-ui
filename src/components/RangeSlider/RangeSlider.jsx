import React from "react";
import styles from "./RangeSlider.module.css";

const RangeSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderContainer}>
        <label for="hk">HK$</label>
        <input type="text" value="10000000" className={styles.value} readOnly />
        <input
          type="range"
          min="1000000"
          max="20000000000"
          className={styles.slider}
        />
        <label for="hk">HK$</label>
        <input
          type="text"
          value="142344423"
          className={styles.value}
          readOnly
        />
      </div>
      <div className={styles.filters}>
        <select className={styles.dropdown}>
          
          <option>Ticker: All</option>
        </select>
        <select className={styles.dropdown}>
          <option>Ticker: All</option>
        </select>
      </div>
    </div>
  );
};

export default RangeSlider;
